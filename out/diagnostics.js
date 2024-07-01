"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
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
exports.subscribeToDocumentChanges = exports.createDiagnosticForAtoms = exports.createDiagnosticForFacts = exports.createDiagnosticForEndCommentsAndTests = exports.createDiagnostic = exports.refreshDiagnostics = exports.CODE_ERROR = void 0;
/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
const antlr4ts_1 = require("antlr4ts");
const vscode = __importStar(require("vscode"));
const ASPCore2Lexer_1 = require("./antlr_scripts/ASPCore2Lexer");
const ASPCore2Parser_1 = require("./antlr_scripts/ASPCore2Parser");
const parsing_1 = require("./parsing");
/** String to detect in the text document. */
exports.CODE_ERROR = "Errore 104";
/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param errorDiagnostics diagnostic collection
 */
let opened = false;
function refreshDiagnostics(doc, errorDiagnostics) {
    const regex = /\.(asp|lp|dlv)$/g;
    const atoms = [];
    if (regex.test(doc.fileName)) {
        let diagnostics = [];
        for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            const lineOfText = doc.lineAt(lineIndex);
            const [input, runDiagnostic] = (0, parsing_1.input_text)(lineOfText);
            const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
            const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
            tokens.fill();
            const aspParser = new ASPCore2Parser_1.ASPCore2Parser(tokens);
            aspParser.removeErrorListeners();
            if (lineOfText.text.includes("%/") || lineOfText.text.includes("%**")) {
                opened = true;
            }
            if (lineOfText.text.includes("/%") || lineOfText.text.includes("**%")) {
                opened = false;
                if (!runDiagnostic) {
                    continue;
                }
            }
            if (!opened || runDiagnostic) {
                aspParser.addErrorListener({
                    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                        if ((lineOfText.text.includes("/%") && lineOfText.text.search(new RegExp(`/%\\s*.+`)) !== -1)
                            || (lineOfText.text.includes("**%") && lineOfText.text.search(new RegExp(`\\*\\*%\\s*.+`)) !== -1)) {
                            diagnostics.push(createDiagnosticForEndCommentsAndTests(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
                        }
                        else {
                            diagnostics.push(createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error));
                        }
                    },
                });
            }
            aspParser.program();
            const constructs = (0, parsing_1.tokenize)(tokens);
            const [heads, tails, tails_negative, tails_in_symbols] = (0, parsing_1.tokenize_head_tail)(constructs, atoms);
            const msg = `The rule at line ${lineIndex + 1} is not safe`;
            if (!(0, parsing_1.checkSafe)(heads, tails, tails_negative, tails_in_symbols) && (0, parsing_1.checkIsRule)(constructs) && !(0, parsing_1.check_comment_or_test)(doc, lineIndex).check) {
                diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning));
            }
            else {
                diagnostics = diagnostics.filter(obj => {
                    return !obj.message.includes(msg);
                });
            }
            diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);
        }
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
exports.refreshDiagnostics = refreshDiagnostics;
function addWarningProbablyWrongName(diagnostics, atoms, doc) {
    atoms.map(atom => {
        const elem = (0, parsing_1.countElem)(doc, atom);
        if (elem.count === 1) { // una sola occorrenza
            if (elem.line !== -1) { // se non si trova in un commento
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
//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
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
function createDiagnosticForEndCommentsAndTests(doc, lineOfText, lineIndex, codeError, severity) {
    let regex = undefined;
    let startCharacter = 0;
    if (lineOfText.text.includes("/%")) {
        regex = new RegExp(`/%\\s*.+`);
        startCharacter += 2;
    }
    else {
        regex = new RegExp(`\\*\\*%\\s*.+`);
        startCharacter += 3;
    }
    startCharacter += lineOfText.text.search(regex);
    const endCharacter = lineOfText.text.length - 1;
    const range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
exports.createDiagnosticForEndCommentsAndTests = createDiagnosticForEndCommentsAndTests;
function createDiagnosticForFacts(doc, lineOfText, lineIndex, endCharacter, codeError, severity) {
    if (codeError.includes("no viable alternative at input")) {
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
function createDiagnosticForAtoms(doc, lineOfText, lineIndex, atom, codeError, severity) {
    const regex_for_token = new RegExp(`${atom}\\b`, "g");
    const startCharacter = lineOfText.text.search(regex_for_token);
    const endCharacter = startCharacter + (atom.length - 1);
    const range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
exports.createDiagnosticForAtoms = createDiagnosticForAtoms;
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
//# sourceMappingURL=diagnostics.js.map