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
exports.fillDictionaryWithDynamicPredicates = exports.__fillTerms = exports.onlyUnique = exports.sanitizeTerms = exports.__fillPredicates = exports.buildPredicates = exports.isASPorDLVorLP = exports.readDictionariesandMergeIt = exports.getASPHoverProvider = exports.addEntryInAutocompleteItems = exports.reversePredicate = exports.getASPIntellisenseProvider = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const dictionarizer_1 = require("../utility/dictionarizer");
const predicate_cache_1 = require("./predicate_cache");
const terms_cache_1 = require("./terms_cache");
const consts_1 = require("../utility/consts");
const utility_parsing_1 = require("../code_analyses/utility_parsing");
/*
Questa funzione fornisce un provider di completamento per l'autocompletamento nel linguaggio ASP. Legge i dizionari di completamento,
determina il contesto dell'autocompletamento in base al carattere di attivazione,
e fornisce gli elementi di completamento appropriati in base al contesto e al testo nel documento.
*/
function getASPIntellisenseProvider(context) {
    const dd = predicate_cache_1.PredicateCache.getInstance();
    const terms_dd = terms_cache_1.TermsCache.getInstance();
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        provideCompletionItems: function (document, position, token, context) {
            const completionItems = [];
            const activeTextEditor = vscode.window.activeTextEditor;
            let fileName = '';
            if (activeTextEditor) {
                fileName = path.basename(activeTextEditor.document.fileName);
            }
            let triggerCharacter;
            let aftertriggerCharacter;
            const line = document.lineAt(position);
            let characterIndex = position.character - 1;
            const searchedCharacters = /[ (,a-zA-Z0-9_#&:-@=[]/;
            while (characterIndex >= 0 && searchedCharacters.test(line.text[characterIndex])) {
                if ([',', '(', '#', '&', ' ', ')', '@', '=', '['].includes(line.text[characterIndex])) {
                    triggerCharacter = line.text[characterIndex];
                    aftertriggerCharacter = line.text[characterIndex + 1];
                    break;
                }
                --characterIndex;
            }
            if (triggerCharacter == '#' || triggerCharacter == '&' || triggerCharacter == '@') {
                for (const elem of Object.values(autocompleteDict[triggerCharacter])) {
                    addEntryInAutocompleteItems(completionItems, elem, vscode.CompletionItemKind.Method);
                }
            }
            else if (triggerCharacter == ' ') {
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
            else if (triggerCharacter == '=' || triggerCharacter == '[') {
                const text = document.getText();
                const lineText = document.lineAt(position.line).text;
                if (/@rule/.test(text)) {
                    const blockPattern = /%\*\*\s*@block\s*\(\s*name\s*=\s*("\w+")\s*\)\s*\*\*%/g;
                    const blockMatches = text.match(blockPattern);
                    let match;
                    let blockNames = [];
                    while ((match = blockPattern.exec(text)) !== null) {
                        blockNames.push(match[1]);
                    }
                    const rulePattern = /%\*\*\s*@rule\s*\(\s*name=\s*("\w+")\s*,\s*block\s*="\w+"\)\s*\*\*%/g;
                    const ruleMatches = text.match(rulePattern);
                    let match2;
                    let ruleNames = [];
                    while ((match2 = rulePattern.exec(text)) !== null) {
                        ruleNames.push(match2[1]);
                    }
                    let rname = makeUnique(ruleNames);
                    const textBeforeTrigger = lineText.substring(0, position.character - 1).trim();
                    if (textBeforeTrigger.endsWith('block')) {
                        if (blockNames.length > 0) {
                            for (const suggest of blockNames) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Field));
                            }
                        }
                        else {
                            completionItems.push(new vscode.CompletionItem("Add block instruction", vscode.CompletionItemKind.Issue));
                        }
                    }
                    else if (textBeforeTrigger.includes('scope')) {
                        if (blockNames.length > 0) {
                            for (const suggest of blockNames) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Field));
                            }
                        }
                        else {
                            completionItems.push(new vscode.CompletionItem("Add block instruction", vscode.CompletionItemKind.Issue));
                        }
                        if (rname.length > 0) {
                            for (const suggest of rname) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Field));
                            }
                        }
                        else {
                            completionItems.push(new vscode.CompletionItem("Add rule instruction", vscode.CompletionItemKind.Issue));
                        }
                    }
                }
                else {
                    const fileMatch = text.match(/"file"\s*:\s*"([^"]+)"/);
                    if (fileMatch) {
                        const filePath = fileMatch[1];
                        const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(path.dirname(document.uri.fsPath), filePath);
                        try {
                            const fileContent = fs.readFileSync(absolutePath, 'utf-8');
                            const blockPattern = /%\*\*\s*@block\s*\(\s*name=\s*("\w+")\s*\)\s*\*\*%/g;
                            const blockMatches = fileContent.match(blockPattern);
                            let match;
                            let blockNames = [];
                            while ((match = blockPattern.exec(fileContent)) !== null) {
                                blockNames.push(match[1]);
                            }
                            const rulePattern = /%\*\*\s*@rule\s*\(\s*name=\s*("\w+")\s*,\s*block\s*="\w+"\)\s*\*\*%/g;
                            const ruleMatches = text.match(rulePattern);
                            let match2;
                            let ruleNames = [];
                            while ((match2 = rulePattern.exec(text)) !== null) {
                                ruleNames.push(match2[1]);
                            }
                            let rname = makeUnique(ruleNames);
                            const textBeforeTrigger = lineText.substring(0, position.character - 1).trim();
                            if (textBeforeTrigger.includes('scope')) {
                                if (blockNames.length > 0) {
                                    for (const suggest of blockNames) {
                                        if (suggest != "_")
                                            completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Field));
                                    }
                                }
                                else {
                                    completionItems.push(new vscode.CompletionItem("Add block instruction", vscode.CompletionItemKind.Issue));
                                }
                                if (rname.length > 0) {
                                    for (const suggest of rname) {
                                        if (suggest != "_")
                                            completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Field));
                                    }
                                }
                                else {
                                    completionItems.push(new vscode.CompletionItem("Add rule instruction", vscode.CompletionItemKind.Issue));
                                }
                            }
                        }
                        catch (error) {
                            vscode.window.showErrorMessage("Reading file error");
                        }
                    }
                    else {
                        vscode.window.showErrorMessage("Missing file property");
                    }
                }
            }
            else if (triggerCharacter == '(' || (triggerCharacter == ',' && aftertriggerCharacter == ')')) {
                const [global_head, global_body, global_negative, global_expression, global_before_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals] = __fillTerms(line);
                const indexOfHead = line.text.indexOf(':-');
                if (indexOfHead !== -1 && characterIndex < indexOfHead) {
                    let suggestions = [];
                    if (global_body.length > 0) {
                        suggestions = suggestions.concat(global_body);
                    }
                    if (global_before_equal.length > 0) {
                        suggestions = suggestions.concat(global_before_equal);
                    }
                    suggestions = suggestions.concat(global_head);
                    for (const suggest of suggestions) {
                        if (suggest != "_")
                            completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                    }
                    const suggest = 'Add new head variable';
                    const item = new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Issue);
                    item.label = suggest;
                    item.insertText = '';
                    item.filterText = suggest;
                    completionItems.push(item);
                }
                if (indexOfHead !== -1 && characterIndex > indexOfHead) {
                    const substringWithoutHead = line.text.substring(indexOfHead + 2, line.text.length);
                    let newIndex = characterIndex - indexOfHead;
                    const check = checkAggregate(substringWithoutHead, newIndex);
                    if (!check) {
                        let check_n = checkNegation(substringWithoutHead, newIndex);
                        if (!check_n) {
                            let suggestions = [];
                            if (global_before_equal.length > 0) {
                                suggestions = suggestions.concat(global_before_equal);
                            }
                            if (global_head.length > 0) {
                                suggestions = suggestions.concat(global_head);
                            }
                            if (global_body.length > 0) {
                                suggestions = suggestions.concat(global_body);
                            }
                            for (const suggest of suggestions) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                            const suggest = 'Add new global variable';
                            const item = new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Issue);
                            item.label = suggest;
                            item.insertText = '';
                            item.filterText = suggest;
                            completionItems.push(item);
                        }
                        else {
                            for (const suggest of global_body) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                            for (const suggest of global_before_equal) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                        }
                    }
                    else if (check) {
                        let check_n = checkNegation(substringWithoutHead, newIndex);
                        if (!check_n) {
                            let suggestions = [];
                            if (local_head_aggregate.length > 0) {
                                suggestions = suggestions.concat(local_head_aggregate);
                            }
                            if (local_positive.length > 0) {
                                suggestions = suggestions.concat(local_positive);
                            }
                            if (local_equals.length > 0) {
                                suggestions = suggestions.concat(local_equals);
                            }
                            for (const suggest of suggestions) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                            const suggest = 'Add new local variable';
                            const item = new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Issue);
                            item.label = suggest;
                            item.insertText = '';
                            item.filterText = suggest;
                            completionItems.push(item);
                        }
                        else {
                            for (const suggest of local_head_aggregate) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                            for (const suggest of local_positive) {
                                if (suggest != "_")
                                    completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                            }
                        }
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
/*
Questa funzione accetta una stringa che rappresenta un predicato invertito nel formato ASP.
Inverte la stringa, la divide per la parentesi aperta e rimuove gli eventuali spazi vuoti,
restituendo il predicato ripristinato al suo stato originale.
*/
function reversePredicate(reversedPredicate) {
    return reversedPredicate.split("").reverse().join("").split('(')[0].trim();
}
exports.reversePredicate = reversePredicate;
/*
Questa funzione aggiunge un elemento di completamento alla lista completionItems, utilizzando le informazioni fornite come etichetta,
snippet, dettaglio e documentazione per personalizzare l'elemento di completamento.
*/
function addEntryInAutocompleteItems(completionItems, elem, completionItemKind) {
    completionItems.push(new vscode.CompletionItem(elem.label, completionItemKind));
    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
    completionItems[completionItems.length - 1].detail = elem.detail;
    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
}
exports.addEntryInAutocompleteItems = addEntryInAutocompleteItems;
/*
Questa funzione fornisce un provider di suggerimenti "on hover". Quando un utente posiziona il cursore su una parola e aspetta,
questa funzione controlla il contesto circostante e restituisce informazioni aggiuntive sotto forma di hover
se la parola corrente corrisponde a un'entrata nel dizionario di autocompletamento per il carattere di attivazione corrispondente.
*/
function getASPHoverProvider(context) {
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        provideHover: function (document, position, token) {
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
exports.getASPHoverProvider = getASPHoverProvider;
/*
Questa funzione si occupa di leggere tre diversi dizionari da file JSON e di unirli in un unico oggetto JavaScript,
che fungerà da dizionario completo.
*/
function readDictionariesandMergeIt(context) {
    const languages_constants = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.CONSTANTS));
    const builtins = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.BUILTINS));
    const aggregates = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.AGGREGATES));
    const annotation_test = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath(consts_1.PATH_TO_JSON_DICTIONARY.TESTS));
    const completeDictionary = Object.assign(aggregates, builtins, languages_constants, annotation_test);
    return completeDictionary;
}
exports.readDictionariesandMergeIt = readDictionariesandMergeIt;
/*
Questa funzione prende in input una stringa filename, che rappresenta il nome di un file,
e restituisce un valore booleano che indica se il file è di tipo ".asp", ".dlv", o ".lp".
*/
function isASPorDLVorLP(filename) {
    return filename.endsWith(".asp") || filename.endsWith(".dlv") || filename.endsWith(".lp");
}
exports.isASPorDLVorLP = isASPorDLVorLP;
/*
Questa funzione costruisce predicati basati su un input dato e li aggiunge a un array di completamento automatico.
Se il predicato non contiene virgole, viene creato un predicato con una variabile non inizializzata.
Se il predicato contiene virgole, vengono aggiunte variabili non inizializzate in base al numero di virgole.
I predicati costruiti vengono quindi aggiunti all'array di completamento automatico.
La funzione non restituisce nulla, ma modifica direttamente l'array di completamento automatico passato per riferimento.
example(X):-
expected : {'label':example(_),'snippet':example(${1}),'detail':"(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"}
*/
function buildPredicates(commaOccurrences, match, arrayPredicates) {
    if (commaOccurrences <= 0) {
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
/*
Questa funzione analizza il contenuto di un file riga per riga, identificando i predicati presenti e costruendoli.
Per poi aggiungerli al dizionario di completamento automatico.
*/
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
        dictionary.add_field(fileNameKey, arrayPredicates);
    }
}
exports.__fillPredicates = __fillPredicates;
/*
Questa funzione sanitizeTerms si occupa di pulire e rimuovere eventuali caratteri
non desiderati da una stringa di termini.
*/
function sanitizeTerms(terms) {
    terms = terms.replaceAll(" ", "").replace(/\w+\(/, "").replace(").", "").replace(/\w+\(/, "").replace(")|", "").replace(/\w+\(/, "").replace("):-", "").replace("),", "");
    return terms;
}
exports.sanitizeTerms = sanitizeTerms;
/*
Questa funzione viene utilizzata come callback per filtrare gli elementi univoci in un array di stringhe.
*/
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;
/*
Questa funzione analizza il contenuto di un file, individua i predicati e i relativi termini associati,
e costruisce un dizionario di cache per i termini.
*/
function __fillTerms(line) {
    const global_head = [];
    const global_body = [];
    const global_negative = [];
    const global_expression = [];
    const global_equal = [];
    const local_head_aggregate = [];
    const local_positive = [];
    const local_negative = [];
    const local_expressions = [];
    const local_equals = [];
    if (!startsWithPercentage(line.text)) {
        const parts = line.text.split(":-");
        const body = parts[1];
        const [positive, negative] = (0, utility_parsing_1.extract_global_pos_neg_variables)(body);
        global_body.push(...Array.from(new Set(positive)));
        global_negative.push(...Array.from(new Set(negative)));
        if (parts.length >= 2) {
            const head = parts[0];
            const head_var = (0, utility_parsing_1.extractPositiveVariables)(head);
            global_head.push(...Array.from(new Set(head_var)));
        }
        if (containsBraces(line.text)) {
            const [variablesInAggregates, variablesInPositiveAtoms, variablesInNegativeAtoms, variableExpr, local_equal] = (0, utility_parsing_1.extract_variables_from_aggregate)(body);
            local_head_aggregate.push(...Array.from(new Set(variablesInAggregates)));
            local_positive.push(...Array.from(new Set(variablesInPositiveAtoms)));
            local_negative.push(...Array.from(new Set(variablesInNegativeAtoms)));
            local_expressions.push(...Array.from(new Set(variableExpr)));
            local_equals.push(...Array.from(new Set(local_equal)));
        }
        if (containsEqualSign(line.text)) {
            const [global_variables_equal, global_variables_expression] = (0, utility_parsing_1.extract_variable_from_global_expression)(body);
            global_expression.push(...Array.from(new Set(global_variables_expression)));
            global_equal.push(...Array.from(new Set(global_variables_equal)));
        }
    }
    return [global_head, global_body, global_negative, global_expression, global_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals];
}
exports.__fillTerms = __fillTerms;
/*
Questa funzione si occupa di popolare dinamicamente un dizionario con i predicati estratti dai documenti
di testo all'interno dell'ambiente di sviluppo.
*/
function fillDictionaryWithDynamicPredicates() {
    const dd = predicate_cache_1.PredicateCache.getInstance();
    vscode.workspace.onDidChangeTextDocument(document => {
        const fileNameKey = path.basename(document.document.fileName);
        if (isASPorDLVorLP(fileNameKey)) {
            const fileContent = document.document.getText();
            __fillPredicates(fileContent, fileNameKey, dd);
        }
    });
}
exports.fillDictionaryWithDynamicPredicates = fillDictionaryWithDynamicPredicates;
function startsWithPercentage(text) {
    return text.trim().startsWith('%');
}
function containsBraces(text) {
    return /\{.*\}/.test(text);
}
function containsEqualSign(text) {
    return text.includes("=");
}
function checkAggregate(str, index) {
    for (let i = index - 1; i >= 0; i--) {
        if (str[i] === '{') {
            return true;
        }
        else if (str[i] === '}') {
            return false;
        }
        else if (str[i] === ':' && i > 0 && str[i - 1] === '-') {
            return false;
        }
    }
    return false;
}
function checkNegation(str, index) {
    let openParenIndex = -1;
    for (let i = index - 1; i >= 0; i--) {
        if (str[i] === '(') {
            openParenIndex = i;
            break;
        }
    }
    if (openParenIndex === -1) {
        return false;
    }
    let endIndex = openParenIndex - 1;
    while (endIndex >= 0 && /\w/.test(str[endIndex])) {
        endIndex--;
    }
    let startIndex = endIndex + 1;
    let foundString = str.substring(startIndex, openParenIndex);
    endIndex = startIndex - 1;
    while (endIndex >= 0 && /\s/.test(str[endIndex])) {
        endIndex--;
    }
    if (endIndex >= 0 && str[endIndex] === ',') {
        return false;
    }
    startIndex = endIndex;
    while (startIndex >= 0 && /\w/.test(str[startIndex])) {
        startIndex--;
    }
    let previousString = str.substring(startIndex + 1, endIndex + 1);
    if (previousString === "not") {
        return true;
    }
    return false;
}
function makeUnique(array) {
    return Array.from(new Set(array));
}
//# sourceMappingURL=autocompletion.js.map