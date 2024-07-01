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
exports.fillDictionaryWithDynamicTerms = exports.__fillTerms = exports.onlyUnique = exports.sanitizeTerms = exports.fillDictionaryWithDynamicPredicates = exports.__fillPredicates = exports.buildPredicates = exports.isASPorDLVorLP = exports.readDictionariesandMergeIt = exports.getASPIntellisenseHoverProvider = exports.addEntryInAutocompleteItems = exports.reversePredicate = exports.getASPIntellisenseProvider = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const dictionarizer_1 = require("./utility/dictionarizer");
const predicate_cache_1 = require("./code_analyses/predicate_cache");
const dynamic_terms_dictionary_1 = require("./code_analyses/dynamic_terms_dictionary");
const consts_1 = require("./utility/consts");
//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
function getASPIntellisenseProvider(context) {
    const dd = predicate_cache_1.DynamicPredicateDictionary.getInstance();
    const terms_dd = dynamic_terms_dictionary_1.DynamicTermsDictionary.getInstance();
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //Provides autocomplete
        provideCompletionItems: function (document, position, token, context) {
            //Reads the whole file to retrieve predicates and terms
            const completionItems = [];
            const activeTextEditor = vscode.window.activeTextEditor;
            let fileName = '';
            if (activeTextEditor) {
                fileName = path.basename(activeTextEditor.document.fileName);
            }
            //Checks if the text being inserted is after a trigger character (',','(','#','&')
            let triggerCharacter;
            const line = document.lineAt(position);
            let characterIndex = position.character - 1;
            const searchedCharacters = /[ (,a-zA-Z0-9_#&:-]/;
            while (characterIndex >= 0 && searchedCharacters.test(line.text[characterIndex])) {
                if ([',', '(', '#', '&', ' '].includes(line.text[characterIndex])) {
                    triggerCharacter = line.text[characterIndex];
                    break;
                }
                --characterIndex;
            }
            //If the trigger character is found it provides every completion item associated with that character
            if (triggerCharacter == '#' || triggerCharacter == '&') {
                //#,&
                for (const elem of Object.values(autocompleteDict[triggerCharacter])) {
                    addEntryInAutocompleteItems(completionItems, elem, vscode.CompletionItemKind.Method);
                }
            }
            else if (triggerCharacter == ',' || triggerCharacter == ' ') {
                let match_open_bracket = false;
                let predicato = "";
                --characterIndex;
                while (characterIndex >= 0) {
                    if (line.text[characterIndex] === "(") {
                        match_open_bracket = true;
                    }
                    if ([')', '<', '>', '}', ':', '-'].includes(line.text[characterIndex]) || ([')', '<', '>', '}', ':', '-', ',', ' '].includes(line.text[characterIndex]) && match_open_bracket)) {
                        break;
                    }
                    predicato += line.text[characterIndex];
                    --characterIndex;
                }
                if (match_open_bracket) {
                    const dictionary = terms_dd.get_field(fileName);
                    const dic2 = dictionary?.get(reversePredicate(predicato));
                    if (dic2) {
                        for (const suggest of dic2) {
                            if (suggest != "_")
                                completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                        }
                    }
                }
                else {
                    autocompleteDict["language-constants"].forEach((elem) => {
                        completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                    });
                    for (const elem of dd.get_field(fileName)) {
                        addEntryInAutocompleteItems(completionItems, elem, vscode.CompletionItemKind.Field);
                    }
                }
            }
            else if (triggerCharacter == '(') {
                let predicato = "";
                --characterIndex;
                while (characterIndex >= 0 && line.text[characterIndex] !== "," && line.text[characterIndex] !== " ") { //Condizione da rafforzare
                    predicato += line.text[characterIndex];
                    --characterIndex;
                }
                const dictionary = terms_dd.get_field(fileName);
                const dic2 = dictionary?.get(reversePredicate(predicato));
                if (dic2) {
                    for (const suggest of dic2) {
                        if (suggest != "_")
                            completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                    }
                }
            }
            else {
                autocompleteDict["language-constants"].forEach((elem) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                for (const elem of dd.get_field(fileName)) {
                    addEntryInAutocompleteItems(completionItems, elem, vscode.CompletionItemKind.Field);
                }
            }
            return completionItems;
        }
    };
}
exports.getASPIntellisenseProvider = getASPIntellisenseProvider;
function reversePredicate(reversedPredicate) {
    return reversedPredicate.split("").reverse().join("").split('(')[0].trim();
}
exports.reversePredicate = reversePredicate;
function addEntryInAutocompleteItems(completionItems, elem, completionItemKind) {
    completionItems.push(new vscode.CompletionItem(elem.label, completionItemKind));
    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
    completionItems[completionItems.length - 1].detail = elem.detail;
    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
}
exports.addEntryInAutocompleteItems = addEntryInAutocompleteItems;
function getASPIntellisenseHoverProvider(context) {
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //Provides details on hover
        provideHover: function (document, position, token) {
            //Checks if the text the cursor is on is after a trigger character (# or &)
            let triggerCharacter;
            const line = document.lineAt(position);
            let characterIndex = position.character - 1;
            const searchedCharacters = /[a-zA-Z0-9_#&]/;
            while (characterIndex >= 0 && searchedCharacters.test(line.text[characterIndex])) {
                if (line.text[characterIndex] === '#' || line.text[characterIndex] === '&') {
                    triggerCharacter = line.text[characterIndex];
                    break;
                }
                --characterIndex;
            }
            //If the trigger character is found it finds the entire word after the character and provides hover details for that word if there exists a completion item for that word
            if (triggerCharacter) {
                const start = characterIndex;
                let end = position.character;
                while (end < line.text.length && searchedCharacters.test(line.text[end])) {
                    ++end;
                }
                const hoverWord = line.text.substring(start, end);
                if (hoverWord in autocompleteDict[triggerCharacter]) {
                    const hoverElement = autocompleteDict[triggerCharacter][hoverWord];
                    return new vscode.Hover([hoverElement.detail, hoverElement.documentation]);
                }
            }
        }
    };
}
exports.getASPIntellisenseHoverProvider = getASPIntellisenseHoverProvider;
function readDictionariesandMergeIt(context) {
    const languages_constants = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.CONSTANTS));
    const builtins = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.BUILTINS));
    const aggregates = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.AGGREGATES));
    const completeDictionary = Object.assign(aggregates, builtins, languages_constants);
    return completeDictionary;
}
exports.readDictionariesandMergeIt = readDictionariesandMergeIt;
function isASPorDLVorLP(filename) {
    return filename.endsWith(".asp") || filename.endsWith(".dlv") || filename.endsWith(".lp");
}
exports.isASPorDLVorLP = isASPorDLVorLP;
function buildPredicates(commaOccurrences, match, arrayPredicates) {
    if (commaOccurrences <= 0) {
        //ciao(X):-
        //expected : {'label':ciao(_),'snippet':ciao(${1}),'detail':"(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"}
        const matches2 = match.matchAll(consts_1.DYNAMIC_PREDICATE_REGEXS.AUX_REGEX);
        let label = "";
        let snippet = "";
        for (const match2 of matches2) {
            label = match2[1] + "(_)";
            snippet = match2[1] + "(${1})";
        }
        const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicate) " + label, "documentation": "**PREVIOUS PREDICATE**\n\n" + label + "\n\n---" };
        arrayPredicates.push(obj);
        return;
    }
    else {
        let parenthesis = "(_";
        let counter = 1;
        let snippetTag = "(${" + counter + "}";
        for (let i = 0; i < commaOccurrences; i++) {
            counter += 1;
            parenthesis = parenthesis + ",_";
            snippetTag = snippetTag + ",${" + counter + "}";
        }
        snippetTag += ")";
        parenthesis += ")";
        const matches2 = match.matchAll(consts_1.DYNAMIC_PREDICATE_REGEXS.AUX_REGEX);
        let label = "";
        let snippet = "";
        for (const match2 of matches2) {
            label = match2[1] + parenthesis;
            snippet = match2[1] + snippetTag;
        }
        const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicate) " + label, "documentation": "**PREVIOUS PREDICATE**\n\n" + label + "\n\n---" };
        arrayPredicates.push(obj);
    }
}
exports.buildPredicates = buildPredicates;
function __fillPredicates(fileContent, fileNameKey, dictionary) {
    const splittedFileContent = fileContent.split("\n");
    const arrayPredicates = [];
    for (let i = 0; i < splittedFileContent.length; i++) {
        if (splittedFileContent[i].startsWith('%')) {
            continue;
        }
        const matches = splittedFileContent[i].matchAll(consts_1.DYNAMIC_PREDICATE_REGEXS.FULL_REGEX);
        for (const match of matches) {
            let commaOccurrences = -1;
            if (match[1].includes(",")) {
                const m1 = match[1];
                if (m1) {
                    const m2 = m1.match(/,/g);
                    if (m2) {
                        commaOccurrences = m2.length;
                    }
                }
            }
            if (commaOccurrences < 0) {
                buildPredicates(commaOccurrences, match[1], arrayPredicates);
                continue;
            }
            let parenthesis = "(_";
            let counter = 1;
            let snippetTag = "(${" + counter + "}";
            for (let i = 0; i < commaOccurrences; i++) {
                counter += 1;
                parenthesis = parenthesis + ",_";
                snippetTag = snippetTag + ",${" + counter + "}";
            }
            buildPredicates(commaOccurrences, match[1], arrayPredicates);
        }
        //Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
        dictionary.add_field(fileNameKey, arrayPredicates);
    }
}
exports.__fillPredicates = __fillPredicates;
function fillDictionaryWithDynamicPredicates() {
    const dd = predicate_cache_1.DynamicPredicateDictionary.getInstance();
    // eslint-disable-next-line no-useless-escape
    vscode.workspace.onDidChangeTextDocument(document => {
        const fileNameKey = path.basename(document.document.fileName);
        if (isASPorDLVorLP(fileNameKey)) {
            const fileContent = document.document.getText();
            __fillPredicates(fileContent, fileNameKey, dd);
        }
    });
}
exports.fillDictionaryWithDynamicPredicates = fillDictionaryWithDynamicPredicates;
function sanitizeTerms(terms) {
    terms = terms.replaceAll(" ", "").replace(/\w+\(/, "").replace(").", "").replace(/\w+\(/, "").replace(")|", "").replace(/\w+\(/, "").replace("):-", "").replace("),", "");
    return terms;
}
exports.sanitizeTerms = sanitizeTerms;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;
function __fillTerms(fileContent, fileNameKey, dictionary) {
    const splittedFileContent = fileContent.split("\n");
    const predicatesMap = new Map;
    for (let i = 0; i < splittedFileContent.length; i++) {
        if (splittedFileContent[i].startsWith('%')) {
            continue;
        }
        const matches = splittedFileContent[i].match(consts_1.DYNAMIC_TERMS_REGEXS.FULL_REGEX);
        if (matches) {
            for (let i = 0; i < matches.length; i++) {
                const matches_predicate = matches[i].match(/\w+/);
                if (matches_predicate) {
                    const sanitized = sanitizeTerms(matches[i]);
                    if (sanitized) {
                        if (predicatesMap.has(matches_predicate[0])) {
                            let terms = sanitized.split(",");
                            const previousTerms = predicatesMap.get(matches_predicate[0]);
                            if (previousTerms !== undefined) {
                                terms = terms.concat(previousTerms);
                            }
                            predicatesMap.set(matches_predicate[0], terms.filter(onlyUnique));
                        }
                        else {
                            predicatesMap.set(matches_predicate[0], sanitized.split(",").filter(onlyUnique));
                        }
                    }
                }
            }
        }
    }
    dictionary.add_field(fileNameKey, predicatesMap);
}
exports.__fillTerms = __fillTerms;
function fillDictionaryWithDynamicTerms() {
    const dd = dynamic_terms_dictionary_1.DynamicTermsDictionary.getInstance();
    vscode.workspace.onDidChangeTextDocument(document => {
        const fileNameKey = path.basename(document.document.fileName);
        if (isASPorDLVorLP(fileNameKey)) {
            const fileContent = document.document.getText();
            __fillTerms(fileContent, fileNameKey, dd);
        }
    });
}
exports.fillDictionaryWithDynamicTerms = fillDictionaryWithDynamicTerms;
//# sourceMappingURL=intellisense.js.map