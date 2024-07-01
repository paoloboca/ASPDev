"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input_text = exports.tokenize_head_body = exports.tokenize = exports.checkSafe = exports.checkIsRule = exports.countElem = exports.check_comment_or_test = void 0;
const antlr4ts_1 = require("antlr4ts");
const ASPCore2Lexer_1 = require("../antlr_scripts/ASPCore2Lexer");
const utility_parsing_1 = require("./utility_parsing");
/*
Esamina un documento di testo per determinare se una determinata linea è all'interno di un commento o di un test.
Inizia con un flag check impostato su false e cerca varie stringhe di inizio e fine commento o test all'interno del documento.
Quando trova un inizio o una fine, imposta i flag e gli indici di posizione di conseguenza.
Se la linea specificata coincide con una linea che contiene un'inizio o una fine,
la funzione restituisce informazioni su questa situazione,
altrimenti restituisce le informazioni sull'ultimo blocco di commento o test trovato.
*/
function check_comment_or_test(doc, line) {
    let check = false;
    let index_start = -1;
    let index_end = -1;
    const startComment = '%/';
    const endComment = '/%';
    const startTest = '%**';
    const endTest = '**%';
    const single_comment = '%';
    let line_start = -1;
    let line_end = -1;
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        let single = false;
        const line2 = line;
        const lineOfText = doc.lineAt(lineIndex);
        if (lineOfText.text.includes(startComment) && !check) {
            index_start = lineOfText.text.indexOf(startComment);
            line_start = lineIndex;
            index_end = -1;
            check = true;
        }
        if (lineOfText.text.includes(endComment)) {
            index_end = lineOfText.text.indexOf(endComment);
            line_end = lineIndex;
            check = false;
        }
        if (lineOfText.text.includes(startTest) && !check) {
            index_end = -1;
            index_start = lineOfText.text.indexOf(startTest);
            line_start = lineIndex;
            check = true;
        }
        if (lineOfText.text.includes(endTest)) {
            index_end = lineOfText.text.indexOf(endTest);
            line_end = lineIndex;
            check = false;
        }
        if (lineOfText.text.includes(single_comment)
            && !check
            && !lineOfText.text.includes(startComment)
            && !lineOfText.text.includes(endComment)
            && !lineOfText.text.includes(startTest)
            && !lineOfText.text.includes(endTest)) {
            index_start = lineOfText.text.indexOf(single_comment);
            single = true;
            index_end = -1;
        }
        if (line === lineIndex) {
            let temp_check = check;
            if (single) {
                temp_check = true;
            }
            if ((lineOfText.text.includes(startComment) && !lineOfText.text.startsWith(startComment)) || (lineOfText.text.includes(startTest) && !lineOfText.text.startsWith(startTest))
                || (lineOfText.text.includes(endComment) && !lineOfText.text.endsWith(endComment)) || (lineOfText.text.includes(endTest) && !lineOfText.text.endsWith(endTest))) {
                temp_check = false;
            }
            return {
                'check': temp_check,
                'index_start': index_start,
                'index_end': index_end,
                'line_start': line_start,
                'line_end': line_end
            };
        }
    }
    return {
        'check': check,
        'line': line,
        'index_start': index_start,
        'index_end': index_end,
        'line_start': line_start,
        'line_end': line_end
    };
}
exports.check_comment_or_test = check_comment_or_test;
/*
Conta il numero di occorrenze di un token in un documento di testo, ignorando le occorrenze all'interno di commenti o test.
Utilizza la funzione check_comment_or_test per determinare se una data linea è all'interno di un commento o di un test e
quindi se deve ignorare il token su quella linea.
La funzione ricerca il token utilizzando un'espressione regolare per garantire che venga trovato solo come parola intera.
*/
function countElem(doc, token) {
    let count = 0;
    let found_at_line = -1;
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);
        const result = check_comment_or_test(doc, lineIndex);
        const text_line = lineOfText.text;
        const regex_for_token = new RegExp(`\\b${token}\\b`, "g");
        const count_iter = (text_line.match(regex_for_token) || []).length;
        const regex_for_builtins = new RegExp(`\\W*&\\s*${token}\\W+`, "g");
        const skip_match_builtins = (text_line.match(regex_for_builtins) || []).length;
        if (count_iter !== 0 && skip_match_builtins === 0) {
            const index_of_token = text_line.search(regex_for_token);
            if (result?.check === false) { // 
                found_at_line = lineIndex;
                count += count_iter;
            }
            else if (result?.check === true || result.index_end !== -1) {
                if (result.index_end === -1) {
                    if (index_of_token < result.index_start && lineIndex <= result.line_start && result.line_start !== -1) {
                        count += count_iter;
                        found_at_line = lineIndex;
                    }
                }
                else if ((index_of_token < result.index_start && result.line_start >= lineIndex)
                    || (index_of_token > result.index_end && (lineIndex >= result.line_end && result.line_end !== -1))) { // nel caso sia prima o dopo un blocco di commenti/test multiline
                    count += count_iter;
                    if (found_at_line < lineIndex) {
                        found_at_line = lineIndex;
                    }
                }
            }
        }
    }
    return { 'token': token, 'line': found_at_line, 'count': count };
}
exports.countElem = countElem;
/*
Controlla se una lista di costrutti rappresenta una regola ASP.
Si basa su una lista di tuple [string, number, number], dove il primo elemento rappresenta il testo del costrutto,
il secondo elemento rappresenta il tipo del token secondo la specifica del lexer,
e il terzo elemento rappresenta la posizione del costrutto nel testo.
*/
function checkIsRule(constructs) {
    let head = false;
    for (let i = 0; i < constructs.length; i++) {
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) {
            head = true;
        }
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS && head) {
            return true;
        }
    }
    return false;
}
exports.checkIsRule = checkIsRule;
/*
Controlla la safety di una regola ASP:
*/
function checkSafe(global_head, global_body, global_negative, global_expression, global_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals) {
    let safe = true;
    const failedConditions = [];
    const global_expr = [];
    for (const equation of local_expressions) {
        const variables = equation.match(/[A-Z]/g);
        if (variables) {
            global_expr.push(...variables);
        }
    }
    const local_expr = [];
    for (const equation of local_expressions) {
        const variables = equation.match(/[A-Z]/g);
        if (variables) {
            local_expr.push(...variables);
        }
    }
    //GLOBAL
    // Condizione 1: Se un elemento si trova nell'array global_head e non si trova in global body oppure in global_equal, safe violata
    for (const element of global_head) {
        if (!global_body.includes(element) && !global_equal.includes(element)) {
            safe = false;
            failedConditions.push("The variable in the head: (" + element + ") is not in a positive atom in the body, in a built-in with = or in the guard of an aggregate");
            break;
        }
    }
    // Condizione 2: Se un elemento si trova nell'array global_negative e non si trova in global body oppure in global_equal safe violata
    for (const element of global_negative) {
        if (!global_body.includes(element) && !global_equal.includes(element)) {
            safe = false;
            failedConditions.push("The variable in a negative atom: (" + element + "), is not found in a positive atom of the body,in a built-in with '=' or in the guard of an aggregate");
            break;
        }
    }
    // Condizione 3: Se un elemento si trova nell'array global_expr ed NON è l'unico a non trovarsi né in global_body né in global_equal,safe violata
    for (const element of global_expression) {
        const variables = element.split(/[\+\-\*\/\=]/);
        let cont = 0;
        for (const variable of variables) {
            //Distinzione tra guardia di aggregato e assegnamento
            const notFoundInbodyEqual = !global_body.includes(variable) && !global_equal.includes(variable);
            if (notFoundInbodyEqual) {
                cont++;
            }
        }
        if (cont > 1) {
            safe = false;
            failedConditions.push("A variable within the arithmetic expression: (" + element + ") is not the only unbound");
            break;
        }
    }
    //LOCAL
    // Condizione 4: Se un elemento si trova in local_head_aggregate e non si trova né in local_equals, né in local_positive né in local_negative safe violata
    for (const element of local_head_aggregate) {
        if (!local_equals.includes(element) && !local_positive.includes(element) && !local_negative.includes(element)) {
            safe = false;
            failedConditions.push("The top variable in the aggregate: (" + element + ") is not within the body of the aggregate");
            break;
        }
    }
    //Condizione 5: Se un elemento si trova in local_negative e non si trova in local_positive oppure in local_equal safe violata
    for (const element of local_negative) {
        if (element !== ",") {
            if (!local_positive.includes(element) && !local_equals.includes(element)) {
                safe = false;
                failedConditions.push("The negative local variable: (" + element + ") is not in a positive atom or assignment");
                break;
            }
        }
    }
    // Condizione 6: Se un elemento si trova nell'array local_expr ed NON è l'unico a non trovarsi né in local_body né in local_equal,safe violata
    for (const element of local_expressions) {
        const variables = element.split(/[\+\-\*\/\=]/);
        let cont = 0;
        for (const variable of variables) {
            const notFoundInbodyEqual = !local_positive.includes(variable) && !local_equals.includes(variable);
            if (notFoundInbodyEqual) {
                cont++;
            }
        }
        if (cont > 1) {
            safe = false;
            failedConditions.push("A local variable within the arithmetic expression : (" + element + ") is not the only unbound");
            break;
        }
    }
    return { safe, failedConditions };
}
exports.checkSafe = checkSafe;
/*
Converte una sequenza di token in una lista di tuple [string, number, number].
Ogni tupla rappresenta un token nella sequenza e contiene il testo del token,
il tipo del token e l'indice di riga del token nel testo originale
*/
function tokenize(tokens) {
    const result = [];
    for (let i = 0; i < tokens.getTokens().length; i++) {
        const text = tokens.get(i).text;
        const type = tokens.get(i).type;
        const index = tokens.get(i).line;
        result.push([text, type, index]);
    }
    return result;
}
exports.tokenize = tokenize;
/*
Analizza una lista di costrutti (rappresentati come tuple di testo, tipo e indice di riga) e divide i costrutti in testa e coda,
identificando anche simboli e negazioni per controllare la safety delle regole ASP.
*/
function tokenize_head_body(constructs, atoms, lineOfText) {
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
    let head = true;
    let skip = false;
    let aggregate = false;
    let equal = false;
    for (let i = 0; i < constructs.length; i++) {
        const s = constructs[i][1];
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS && !skip) {
            head = !head;
        }
        if (s === ASPCore2Lexer_1.ASPCore2Lexer.AGGR_COUNT ||
            s === ASPCore2Lexer_1.ASPCore2Lexer.AGGR_MAX || s === ASPCore2Lexer_1.ASPCore2Lexer.AGGR_MIN || s === ASPCore2Lexer_1.ASPCore2Lexer.AGGR_SUM) {
            aggregate = true;
        }
        if (s === ASPCore2Lexer_1.ASPCore2Lexer.EQUAL) {
            equal = true;
        }
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.SYMBOLIC_CONSTANT && !skip) {
            const result = atoms.find(atom => atom === constructs[i][0]);
            if (!result) {
                atoms.push(constructs[i][0]);
            }
        }
    }
    const parts = lineOfText.text.split(":-");
    const body = parts[1];
    const [positive, negative] = (0, utility_parsing_1.extract_global_pos_neg_variables)(body);
    global_body.push(...positive);
    global_negative.push(...negative);
    if (parts.length >= 2) {
        const head = parts[0];
        const head_var = (0, utility_parsing_1.extractPositiveVariables)(head);
        global_head.push(...head_var);
    }
    if (aggregate) {
        const [variablesInAggregates, variablesInPositiveAtoms, variablesInNegativeAtoms, variableExpr, local_equal] = (0, utility_parsing_1.extract_variables_from_aggregate)(body);
        local_head_aggregate.push(...variablesInAggregates);
        local_positive.push(...variablesInPositiveAtoms);
        local_negative.push(...variablesInNegativeAtoms);
        local_expressions.push(...variableExpr);
        local_equals.push(...local_equal);
    }
    if (equal) {
        const [global_variables_equal, global_variables_expression] = (0, utility_parsing_1.extract_variable_from_global_expression)(body);
        global_expression.push(...global_variables_expression);
        global_equal.push(...global_variables_equal);
    }
    global_head.filter(item => item.trim() !== "");
    global_body.filter(item => item.trim() !== "");
    global_negative.filter(item => item.trim() !== "");
    global_expression.filter(item => item.trim() !== "");
    global_equal.filter(item => item.trim() !== "");
    local_head_aggregate.filter(item => item.trim() !== "");
    local_negative.filter(item => item.trim() !== "");
    local_positive.filter(item => item.trim() !== "");
    local_expressions.filter(item => item.trim() !== "");
    local_equals.filter(item => item.trim() !== "");
    return [global_head, global_body, global_negative, global_expression, global_equal, local_head_aggregate, local_negative, local_positive, local_expressions, local_equals];
}
exports.tokenize_head_body = tokenize_head_body;
/*
Restituisce l'input corretto da passare al parser,analizza una singola linea di testo e restituisce un oggetto ANTLRInputStream,
che è l'input per il parser ANTLR, insieme a un valore booleano che indica
se la linea contiene un'inizio o una fine di un commento o di un test.
*/
function input_text(lineOfText) {
    if ((lineOfText.text.includes("%/") && !lineOfText.text.startsWith("%/")) || (lineOfText.text.includes("%**") && !lineOfText.text.startsWith("%**"))) {
        let splitText = undefined;
        if (lineOfText.text.includes("%/")) {
            splitText = lineOfText.text.split("%/");
        }
        else {
            splitText = lineOfText.text.split("%**");
        }
        return [new antlr4ts_1.ANTLRInputStream(splitText[0]), true];
    }
    if ((lineOfText.text.includes("/%") && !lineOfText.text.endsWith("/%")) || (lineOfText.text.includes("**%") && !lineOfText.text.endsWith("**%"))) {
        let splitText = undefined;
        if (lineOfText.text.includes("/%")) {
            splitText = lineOfText.text.split("/%");
        }
        else {
            splitText = lineOfText.text.split("**%");
        }
        return [new antlr4ts_1.ANTLRInputStream(splitText[1]), true];
    }
    return [new antlr4ts_1.ANTLRInputStream(lineOfText.text), false];
}
exports.input_text = input_text;
//# sourceMappingURL=parsing.js.map