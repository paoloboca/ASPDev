import { CommonTokenStream, Recognizer } from "antlr4ts";
import * as vscode from "vscode";
import { ASPCore2Lexer } from "../antlr_scripts/ASPCore2Lexer";
import { ASPCore2Parser } from "../antlr_scripts/ASPCore2Parser";
import { check_comment_or_test, countElem,checkSafe, tokenize, tokenize_head_body, input_text } from "./parsing";
import { getLinesInTestBlock } from "./syntax_checking_test";
export const CODE_ERROR = "Errore 104";
let opened = false;
/*
Analizza un documento alla ricerca di errori di sintassi o logici specifici del linguaggio ASP, 
segnalandoli direttamente nell'interfaccia utente di VSCode attraverso la creazione e l'associazione di diagnostici.
*/
export function refreshDiagnostics(
    doc: vscode.TextDocument,
    errorDiagnostics: vscode.DiagnosticCollection
): void {
    
    const regex = /\.(asp|lp|dlv)$/g;
    const atoms: string[] = [];
    let opened = false;
    const testBlocks = getLinesInTestBlock(doc);

    if (regex.test(doc.fileName)) {
        let diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            if (isLineInTestBlock(lineIndex, testBlocks)) {
                continue;
            }

            const lineOfText = doc.lineAt(lineIndex);
            if (lineOfText.text.includes("%/")) {
                opened = true;
            }
            if (lineOfText.text.includes("/%")) {
                opened = false;
            }
            if (!opened) {
                const [input, runDiagnostic] = input_text(lineOfText);
                const aspLexer = new ASPCore2Lexer(input);
                const tokens = new CommonTokenStream(aspLexer);
                tokens.fill();
                const aspParser = new ASPCore2Parser(tokens);
                aspParser.removeErrorListeners();
                aspParser.addErrorListener({
                    syntaxError<T>(
                        recognizer: Recognizer<T, any>,
                        offendingSymbol: T,
                        line: number,
                        charPositionInLine: number,
                        msg: string,
                        e: Error | undefined
                    ): void {
                        diagnostics.push(createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error));
                    },
                });

                aspParser.program();
                const constructs = tokenize(tokens);
                const [global_head, global_body, global_negative, global_expression, global_before_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals] = tokenize_head_body(constructs, atoms, lineOfText);
                const result = checkSafe(global_head, global_body, global_negative, global_expression, global_before_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals);
                const msg = `Safe condition violated at line ${lineIndex + 1}: ${result.failedConditions.join(" , ")}`;

                if (!result.safe && !check_comment_or_test(doc, lineIndex).check) {
                    diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
                } else {
                    diagnostics = diagnostics.filter(obj => !obj.message.includes(msg));
                }
                diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);
            }
        }
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
// Funzione di supporto per verificare se una linea si trova all'interno di un blocco di test
function isLineInTestBlock(lineIndex: number, testBlocks: { startLine: number, endLine: number }[]): boolean {
    return testBlocks.some(block => lineIndex >= block.startLine && lineIndex <= block.endLine);
}
/*
Aggiunge avvisi a una collezione di oggetti diagnostici, segnalando gli atomi che vengono utilizzati una sola volta nel documento. 
Questa può essere un'indicazione che il nome dell'atomo potrebbe essere errato o che l'atomo potrebbe non essere necessario
*/
function addWarningProbablyWrongName(diagnostics: vscode.Diagnostic[], atoms: string[], doc: vscode.TextDocument) {
	atoms.map(atom => {
		const elem = countElem(doc, atom);
		if (elem.count === 1) { 
			if (elem.line !== -1) { 
				const msg = `${elem.token} is used only once`;
				const tmp_diagnostic = diagnostics.find(obj => {
					return obj.message === msg;
				});
				if (tmp_diagnostic === undefined) {
					diagnostics.push(createDiagnosticForAtoms(doc, doc.lineAt(elem.line), elem.line, elem.token, msg, vscode.DiagnosticSeverity.Warning));
				}
			}
		} else {
			diagnostics = diagnostics.filter(obj => {
				return !obj.message.includes(`${elem.token} is used only once`);
			}
			);
		}

	});
	return diagnostics;
}
/*
Crea un oggetto diagnostico per Visual Studio Code che segnala un errore o un avviso in una specifica linea di un documento di testo. 
Il punto iniziale dell'intervallo diagnostico è l'inizio della linea, mentre il punto finale varia:
*/
export function createDiagnostic(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity,
): vscode.Diagnostic {
	let endCharacter = undefined;
	if(lineOfText.text.includes("%/")) {
		endCharacter = lineOfText.text.search("%");
	}
	else {
		endCharacter = lineOfText.text.length;
	}
	
	const range = new vscode.Range(
		lineIndex,
		0,
		lineIndex,
		0 + endCharacter
	);

	const diagnostic = new vscode.Diagnostic(
		range,
		codeError,
		severity
	);
	return diagnostic;
}
/*
Genera un oggetto diagnostico per Visual Studio Code specificamente per errori legati a fatti nel documento. 
Se l'errore è un errore di sintassi, la funzione cerca nel testo della linea l'elemento specifico 
che ha causato l'errore (identificato tra apici nell'messaggio di errore), crea un intervallo diagnostico 
che inizia da questo elemento fino all'endCharacter specificato, 
e restituisce un oggetto diagnostico con questo intervallo, il messaggio di errore, e la gravità dell'errore.
*/
export function createDiagnosticForFacts(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	endCharacter: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity
): vscode.Diagnostic {
	if (codeError.includes("Syntax Error")) {
		const error = codeError.split("'");
		const startCharacter = lineOfText.text.indexOf(error[1]);
		if (startCharacter >= 0) {
			const range = new vscode.Range(
				lineIndex,
				startCharacter,
				lineIndex,
				0 + (endCharacter + 1)
			);
			const diagnostic = new vscode.Diagnostic(
				range,
				codeError,
				severity
			);
			return diagnostic;
		}
		return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
	}
	return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
}
/*
Questo metodo analizza una specifica linea di testo all'interno di un documento per trovare un'occorrenza di un dato "atomo", 
costruisce un oggetto diagnostico che localizza l'atomo e descrive il problema ad esso associato, 
*/
export function createDiagnosticForAtoms(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	atom: string,
	codeError: string,
	severity: vscode.DiagnosticSeverity) {
	const regex_for_token = new RegExp(`${atom}\\b`, "g");

	const startCharacter = lineOfText.text.search(regex_for_token);
	const endCharacter = startCharacter + (atom.length - 1);
	const range = new vscode.Range(
		lineIndex,
		startCharacter,
		lineIndex,
		0 + (endCharacter + 1)
	);
	const diagnostic = new vscode.Diagnostic(
		range,
		codeError,
		severity
	);
	return diagnostic;
}
/*
Questo metodo si assicura che le diagnosi degli errori vengano aggiornate in risposta a cambiamenti nel documento attivo, 
nel contenuto del documento nel workspace e alla chiusura di documenti nel workspace.
*/
export function subscribeToDocumentChanges(
	context: vscode.ExtensionContext,
	errorDiagnostics: vscode.DiagnosticCollection
): void {
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(
			vscode.window.activeTextEditor.document,
			errorDiagnostics
		);
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor) {
				refreshDiagnostics(editor.document, errorDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument((e) =>
			refreshDiagnostics(e.document, errorDiagnostics)
		)
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument((doc) =>
			errorDiagnostics.delete(doc.uri)
		)
	);
}