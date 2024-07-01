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
exports.Prompter = void 0;
const similarity_1 = require("./similarity");
const dictionarizer_1 = require("./utility/dictionarizer");
const predicate_cache_1 = require("./code_analyses/predicate_cache");
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
const consts_1 = require("./utility/consts");
const COMMAND = 'code-actions-sample.command';
//Ctrl + Spacebar
class Prompter {
    context;
    constructor(context) {
        this.context = context;
    }
    static providedCodeActionKinds = [
        vscode.CodeActionKind.QuickFix
    ];
    addConstantFixer(m1, constantsDict, document, range, result) {
        let commandAction = null;
        for (const elem of Object.values(constantsDict['language-constants'])) {
            if ((0, similarity_1.similarity)(m1, elem) == 1.00) {
                return;
            }
            if ((0, similarity_1.similarity)(m1, elem) >= 0.5 && (0, similarity_1.similarity)(m1, elem) < 1.00) {
                const replaceWithRightConstant = this.createFix(document, range, elem, elem.length);
                commandAction = this.createCommand();
                result.push(replaceWithRightConstant);
            }
        }
        if (commandAction) {
            result.push(commandAction);
        }
    }
    addDynamicPredicateFixer(m1, dd, key, document, range, result) {
        let commandAction = null;
        for (const elem of Object.values(dd.get_field(key))) {
            const indexOf = elem.label.indexOf("(");
            const substringToCompare = elem.label.substring(0, indexOf);
            if ((0, similarity_1.similarity)(m1, substringToCompare) >= 0.5 && (0, similarity_1.similarity)(m1, substringToCompare) < 1.00) {
                const replaceWithRightAggregate = this.createFix(document, range, substringToCompare, substringToCompare.length);
                commandAction = this.createCommand();
                result.push(replaceWithRightAggregate);
            }
        }
    }
    addFixers(match, dictionary, document, range, prefix, otherPrefix = "", result) {
        let commandAction = null;
        if (otherPrefix == "") {
            for (const elem of Object.values(dictionary[prefix])) {
                if ((0, similarity_1.similarity)(match, prefix + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(match, prefix + elem.label + "{") < 1.00) {
                    const replaceWithRightBuiltin = this.createFix(document, range, prefix + elem.label + "{", (prefix + elem.label + "{").length);
                    commandAction = this.createCommand();
                    result.push(replaceWithRightBuiltin);
                }
            }
        }
        else {
            for (const elem of Object.values(dictionary[prefix])) {
                if ((0, similarity_1.similarity)(match, otherPrefix + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(match, otherPrefix + elem.label + "{") < 1.00) {
                    const replaceWithRightBuiltin = this.createFix(document, range, prefix + elem.label + "{", (prefix + elem.label + "{").length);
                    commandAction = this.createCommand();
                    result.push(replaceWithRightBuiltin);
                }
            }
        }
        if (commandAction) {
            result.push(commandAction);
        }
    }
    provideCodeActions(document, range) {
        const result = [];
        if (this.isAtStartOfAggregate(document, range)) {
            let aggregatesDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.AGGREGATES)); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const aggregateRegex = /(#\w+)\{/gm;
            const matches = line.matchAll(aggregateRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        this.addFixers(m1, aggregatesDict, document, range, "#", "", result);
                        //&coutn
                        if (result.length == 0) {
                            aggregatesDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.BUILTINS));
                            this.addFixers(m1, aggregatesDict, document, range, "&", "#", result); //#coutn
                        }
                    }
                }
            }
        }
        if (this.isAtStartOfBuiltins(document, range)) {
            let builtinsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.BUILTINS)); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const builtinRegex = /(&\w+)\{/gm;
            const matches = line.matchAll(builtinRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        this.addFixers(m1, builtinsDict, document, range, "&", "", result);
                        if (result.length == 0) {
                            builtinsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.AGGREGATES));
                            this.addFixers(m1, builtinsDict, document, range, "#", "&", result);
                        }
                    }
                }
            }
        }
        if (this.isAtStartOfConstants(document, range)) {
            const constantsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.CONSTANTS)); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const constantsRegex = /([A-Z]+_+)*[A-Z]+/gm; //#count{}
            const matches = line.matchAll(constantsRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[0];
                    if (m1) {
                        this.addConstantFixer(m1, constantsDict, document, range, result);
                    }
                }
            }
        }
        if (this.isAtStartOfDynamicPredicates(document, range)) {
            //Starting point for dynamic predicates correction
            const chiave = path.basename(document.fileName);
            const dd = predicate_cache_1.DynamicPredicateDictionary.getInstance();
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const aggregateRegex = /(\w+)\(/gm;
            const matches = line.matchAll(aggregateRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        this.addDynamicPredicateFixer(m1, dd, chiave, document, range, result);
                    }
                }
            }
        }
        return result;
    }
    isAtStartOfAggregate(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "#";
    }
    isAtStartOfBuiltins(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "&";
    }
    isAtStartOfDynamicPredicates(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character].match(/[a-zA-Z]/gm);
    }
    isAtStartOfConstants(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character].match(/[A-Z_]/gm);
    }
    createFix(document, range, expected_string, endstring = 2) {
        const fix = new vscode.CodeAction(`Convert to ${expected_string}`, vscode.CodeActionKind.QuickFix);
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, endstring)), expected_string);
        return fix;
    }
    createCommand() {
        const action = new vscode.CodeAction('Learn more about ASP', vscode.CodeActionKind.Empty);
        action.command = { command: COMMAND, title: 'Learn more about ASP. (Documentation)', tooltip: 'This will open the ASP documentation.' };
        return action;
    }
}
exports.Prompter = Prompter;
//# sourceMappingURL=prompter.js.map