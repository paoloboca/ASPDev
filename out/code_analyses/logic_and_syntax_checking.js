"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToDocumentChanges = exports.createDiagnosticForAtoms = exports.createDiagnosticForFacts = exports.createDiagnostic = exports.refreshDiagnostics = exports.CODE_ERROR = void 0;
const antlr4ts_1 = require("antlr4ts");
const vscode = __importStar(require("vscode"));
const ASPCore2Lexer_1 = require("../antlr_scripts/ASPCore2Lexer");
const ASPCore2Parser_1 = require("../antlr_scripts/ASPCore2Parser");
const parsing_1 = require("./parsing");
exports.CODE_ERROR = "Errore 104";
let opened = false;
/*
Analizza un documento alla ricerca di errori di sintassi o logici specifici del linguaggio ASP,
segnalandoli direttamente nell'interfaccia utente di VSCode attraverso la creazione e l'associazione di diagnostici.
*/
function refreshDiagnostics(doc, errorDiagnostics) {
    const regex = /\.(asp|lp|dlv)$/g;
    const atoms = [];
    if (regex.test(doc.fileName)) {
        let diagnostics = [];
        for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            const lineOfText = doc.lineAt(lineIndex);
            if (lineOfText.text.includes("%/") || lineOfText.text.includes("%**")) {
                opened = true;
            }
            if (lineOfText.text.includes("/%") || lineOfText.text.includes("**%")) {
                opened = false;
            }
            if (!opened) {
                const [input, runDiagnostic] = (0, parsing_1.input_text)(lineOfText);
                console.log(input);
                const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
                const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
                tokens.fill();
                const aspParser = new ASPCore2Parser_1.ASPCore2Parser(tokens);
                aspParser.removeErrorListeners();
                aspParser.addErrorListener({
                    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                        diagnostics.push(createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error));
                    },
                });
                aspParser.program();
                const constructs = (0, parsing_1.tokenize)(tokens);
                const [global_head, global_body, global_negative, global_expression, global_before_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals] = (0, parsing_1.tokenize_head_body)(constructs, atoms, lineOfText);
                const result = (0, parsing_1.checkSafe)(global_head, global_body, global_negative, global_expression, global_before_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals);
                const msg = `Safe condition violated at line ${lineIndex + 1}` + ` : ` + result.failedConditions.join(" , ");
                if (!result.safe && !(0, parsing_1.check_comment_or_test)(doc, lineIndex).check) {
                    diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
                }
                else {
                    diagnostics = diagnostics.filter(obj => {
                        return !obj.message.includes(msg);
                    });
                }
                diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);
            }
        }
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
exports.refreshDiagnostics = refreshDiagnostics;
/*
Aggiunge avvisi a una collezione di oggetti diagnostici, segnalando gli atomi che vengono utilizzati una sola volta nel documento.
Questa può essere un'indicazione che il nome dell'atomo potrebbe essere errato o che l'atomo potrebbe non essere necessario
*/
function addWarningProbablyWrongName(diagnostics, atoms, doc) {
    atoms.map(atom => {
        const elem = (0, parsing_1.countElem)(doc, atom);
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
        }
        else {
            diagnostics = diagnostics.filter(obj => {
                return !obj.message.includes(`${elem.token} is used only once`);
            });
        }
    });
    return diagnostics;
}
/*
Crea un oggetto diagnostico per Visual Studio Code che segnala un errore o un avviso in una specifica linea di un documento di testo.
Il punto iniziale dell'intervallo diagnostico è l'inizio della linea, mentre il punto finale varia:
*/
function createDiagnostic(doc, lineOfText, lineIndex, codeError, severity) {
    let endCharacter = undefined;
    if (lineOfText.text.includes("%/")) {
        endCharacter = lineOfText.text.search("%");
    }
    else {
        endCharacter = lineOfText.text.length;
    }
    const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + endCharacter);
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
exports.createDiagnostic = createDiagnostic;
/*
Genera un oggetto diagnostico per Visual Studio Code specificamente per errori legati a fatti nel documento.
Se l'errore è un errore di sintassi, la funzione cerca nel testo della linea l'elemento specifico
che ha causato l'errore (identificato tra apici nell'messaggio di errore), crea un intervallo diagnostico
che inizia da questo elemento fino all'endCharacter specificato,
e restituisce un oggetto diagnostico con questo intervallo, il messaggio di errore, e la gravità dell'errore.
*/
function createDiagnosticForFacts(doc, lineOfText, lineIndex, endCharacter, codeError, severity) {
    if (codeError.includes("Syntax Error")) {
        const error = codeError.split("'");
        const startCharacter = lineOfText.text.indexOf(error[1]);
        if (startCharacter >= 0) {
            const range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
            const diagnostic = new vscode.Diagnostic(range, codeError, severity);
            return diagnostic;
        }
        return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
    }
    return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
}
exports.createDiagnosticForFacts = createDiagnosticForFacts;
/*
Questo metodo analizza una specifica linea di testo all'interno di un documento per trovare un'occorrenza di un dato "atomo",
costruisce un oggetto diagnostico che localizza l'atomo e descrive il problema ad esso associato,
*/
function createDiagnosticForAtoms(doc, lineOfText, lineIndex, atom, codeError, severity) {
    const regex_for_token = new RegExp(`${atom}\\b`, "g");
    const startCharacter = lineOfText.text.search(regex_for_token);
    const endCharacter = startCharacter + (atom.length - 1);
    const range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
exports.createDiagnosticForAtoms = createDiagnosticForAtoms;
/*
Questo metodo si assicura che le diagnosi degli errori vengano aggiornate in risposta a cambiamenti nel documento attivo,
nel contenuto del documento nel workspace e alla chiusura di documenti nel workspace.
*/
function subscribeToDocumentChanges(context, errorDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, errorDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            refreshDiagnostics(editor.document, errorDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => refreshDiagnostics(e.document, errorDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument((doc) => errorDiagnostics.delete(doc.uri)));
}
exports.subscribeToDocumentChanges = subscribeToDocumentChanges;
//# sourceMappingURL=logic_and_syntax_checking.js.map