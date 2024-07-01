import { CommonTokenStream, Recognizer } from "antlr4ts";
import * as vscode from "vscode";
import { TESTLexer } from "../antlr_scripts_test/TESTLexer";
import { TESTParser } from "../antlr_scripts_test/TESTParser";
import { CharStreams } from "antlr4ts";
export const CODE_ERROR = "Errore 104";
/*
Analizza un documento alla ricerca di errori di sintassi o logici specifici del linguaggio di test ASP, 
segnalandoli direttamente nell'interfaccia utente di VSCode attraverso la creazione e l'associazione di diagnostici.
*/
export function refreshDiagnosticsTest(
    doc: vscode.TextDocument,
    errorDiagnostics: vscode.DiagnosticCollection
): void {
    
    const regex = /\.(asp|lp|dlv)$/g;
    if (regex.test(doc.fileName)) {
        let diagnostics: vscode.Diagnostic[] = [];
        const blocks = getLinesInTestBlock(doc);

        blocks.forEach(block => {
            let textAccumulator = '';

            for (let lineIndex = block.startLine; lineIndex <= block.endLine; lineIndex++) {
                const lineOfText = doc.lineAt(lineIndex);
                textAccumulator += lineOfText.text + '\n';
            }
			
            // Creazione del CharStream dall'input textAccumulator
            const inputStream = CharStreams.fromString(textAccumulator);
            const testLexer = new TESTLexer(inputStream);
            const tokens = new CommonTokenStream(testLexer);
            const testParser = new TESTParser(tokens);
            testParser.removeErrorListeners();

            testParser.addErrorListener({
                syntaxError<T>(
                    recognizer: Recognizer<T, any>,
                    offendingSymbol: T,
                    line: number,
                    charPositionInLine: number,
                    msg: string,
                    e: Error | undefined
                ): void {
                    
				   const startPosition = new vscode.Position(block.startLine, 0);
				   const endPosition = new vscode.Position(block.endLine, doc.lineAt(block.endLine).text.length);
				   const diagnosticRange = new vscode.Range(startPosition, endPosition);
                    const diagnostic = new vscode.Diagnostic(
                        diagnosticRange,
                        msg,
                        vscode.DiagnosticSeverity.Error
                    );

                    diagnostics.push(diagnostic);
                },
            });

            try {
                
                testParser.annotationList();
            } catch (error) {
                console.error('Parsing error:', error);
                
            }
        });
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
/*
Questo metodo si assicura che le diagnosi degli errori vengano aggiornate in risposta a cambiamenti nel documento attivo, 
nel contenuto del documento nel workspace e alla chiusura di documenti nel workspace.
*/
export function subscribeToDocumentChangesTest(
	context: vscode.ExtensionContext,
	errorDiagnostics: vscode.DiagnosticCollection
): void {
	if (vscode.window.activeTextEditor) {
		
		refreshDiagnosticsTest(
			vscode.window.activeTextEditor.document,
			errorDiagnostics
		);
		
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor) {
				refreshDiagnosticsTest(editor.document, errorDiagnostics);
				

			}
		})
	);
	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument((e) =>
			refreshDiagnosticsTest(e.document, errorDiagnostics)
			
			
		)
	);
	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument((doc) =>
			errorDiagnostics.delete(doc.uri)
		)
	);
}
/*
Questo metodo viene utilizzato per identificare blocchi di test in un documento che sono delimitati da specifici marcatori di inizio e fine. 
I marcatori sono %** per l'inizio di un blocco e **% per la fine di un blocco. Il metodo restituisce un array di oggetti, 
ognuno dei quali rappresenta un blocco di testo con la sua linea di inizio e di fine.
*/
export function getLinesInTestBlock(doc: vscode.TextDocument): { startLine: number, endLine: number }[] {
    const startTest = '%**';
    const endTest = '**%';
    let insideTestBlock = false;
    let blocks: { startLine: number, endLine: number }[] = [];
    let blockStart = -1;

    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);

        if (lineOfText.text.includes(startTest)) {
            insideTestBlock = true;
            blockStart = lineIndex;
        }

        if (insideTestBlock && lineOfText.text.includes(endTest)) {
            blocks.push({ startLine: blockStart, endLine: lineIndex });
            insideTestBlock = false;
        }
    }
	
	
    return blocks;
}