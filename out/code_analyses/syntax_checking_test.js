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
exports.getLinesInTestBlock = exports.subscribeToDocumentChangesTest = exports.refreshDiagnosticsTest = exports.CODE_ERROR = void 0;
const antlr4ts_1 = require("antlr4ts");
const vscode = __importStar(require("vscode"));
const TESTLexer_1 = require("../antlr_scripts_test/TESTLexer");
const TESTParser_1 = require("../antlr_scripts_test/TESTParser");
const antlr4ts_2 = require("antlr4ts");
exports.CODE_ERROR = "Errore 104";
/*
Analizza un documento alla ricerca di errori di sintassi o logici specifici del linguaggio di test ASP,
segnalandoli direttamente nell'interfaccia utente di VSCode attraverso la creazione e l'associazione di diagnostici.
*/
function refreshDiagnosticsTest(doc, errorDiagnostics) {
    const regex = /\.(asp|lp|dlv)$/g;
    if (regex.test(doc.fileName)) {
        let diagnostics = [];
        const blocks = getLinesInTestBlock(doc);
        blocks.forEach(block => {
            let textAccumulator = '';
            for (let lineIndex = block.startLine; lineIndex <= block.endLine; lineIndex++) {
                const lineOfText = doc.lineAt(lineIndex);
                textAccumulator += lineOfText.text + '\n';
            }
            // Creazione del CharStream dall'input textAccumulator
            const inputStream = antlr4ts_2.CharStreams.fromString(textAccumulator);
            const testLexer = new TESTLexer_1.TESTLexer(inputStream);
            const tokens = new antlr4ts_1.CommonTokenStream(testLexer);
            const testParser = new TESTParser_1.TESTParser(tokens);
            testParser.removeErrorListeners();
            testParser.addErrorListener({
                syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                    const startPosition = new vscode.Position(block.startLine, 0);
                    const endPosition = new vscode.Position(block.endLine, doc.lineAt(block.endLine).text.length);
                    const diagnosticRange = new vscode.Range(startPosition, endPosition);
                    const diagnostic = new vscode.Diagnostic(diagnosticRange, msg, vscode.DiagnosticSeverity.Error);
                    diagnostics.push(diagnostic);
                },
            });
            try {
                testParser.annotationList();
            }
            catch (error) {
                console.error('Parsing error:', error);
            }
        });
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
exports.refreshDiagnosticsTest = refreshDiagnosticsTest;
/*
Questo metodo si assicura che le diagnosi degli errori vengano aggiornate in risposta a cambiamenti nel documento attivo,
nel contenuto del documento nel workspace e alla chiusura di documenti nel workspace.
*/
function subscribeToDocumentChangesTest(context, errorDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnosticsTest(vscode.window.activeTextEditor.document, errorDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            refreshDiagnosticsTest(editor.document, errorDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => refreshDiagnosticsTest(e.document, errorDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument((doc) => errorDiagnostics.delete(doc.uri)));
}
exports.subscribeToDocumentChangesTest = subscribeToDocumentChangesTest;
/*
Questo metodo viene utilizzato per identificare blocchi di test in un documento che sono delimitati da specifici marcatori di inizio e fine.
I marcatori sono %** per l'inizio di un blocco e **% per la fine di un blocco. Il metodo restituisce un array di oggetti,
ognuno dei quali rappresenta un blocco di testo con la sua linea di inizio e di fine.
*/
function getLinesInTestBlock(doc) {
    const startTest = '%**';
    const endTest = '**%';
    let insideTestBlock = false;
    let blocks = [];
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
exports.getLinesInTestBlock = getLinesInTestBlock;
//# sourceMappingURL=syntax_checking_test.js.map