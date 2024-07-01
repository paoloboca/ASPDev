"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.extractPositiveVariables = exports.extract_global_pos_neg_variables = exports.extract_variable_from_global_expression = exports.extract_variables_from_aggregate = void 0;
//Estrae le variabili locali all'interno dell'aggregato
function extract_variables_from_aggregate(testo) {
    const head_aggregate = [];
    const positive_atoms = [];
    const negative_atoms = [];
    const expressions = [];
    const local_equal = [];
    const textInBrackets = testo.match(/\{(.*?)\}/)?.[1] || '';
    const [head, body] = textInBrackets.split(':');
    head_aggregate.push(...head.split(','));
    const patternType1 = /(?:\b(?<!not\s+)\w+\()([^,\)]+(?:,[^,\)]+)*)?\)/g;
    const patternType2 = /\bnot\s+\w+\(([^,\)]+(?:,[^,\)]+)*)?\)/g;
    const patternType3 = /\b(?:[A-Za-z]+\d*|\d+)\b\s*(?:[+\-*\/=]\s*\b(?:[A-Za-z]+\d*|\d+)\b\s*)+/g;
    const regexAfterEqual = /(?<=\=\s*)\b(\w+)\b(?![\w\d\+\-\*\/])/g;
    const regexBeforeEqual = /\b(\w+)\b(?=\s*=\s*)(?<![\w\d\+\-\*\/]\s*\b\w+\b\s*)/g;
    const lowerCaseRegex = /^[a-z]+$/;
    const numberRegex = /^\d+$/;
    let match;
    while ((match = patternType1.exec(body)) !== null) {
        if (match[1]) {
            const variables = match[1].split(',').map(v => v.trim());
            const filteredVariables = variables.filter(variable => !lowerCaseRegex.test(variable) && !numberRegex.test(variable));
            positive_atoms.push(...filteredVariables);
        }
    }
    while ((match = patternType2.exec(body)) !== null) {
        if (match[1]) {
            const variables = match[1].split(',').map(v => v.trim());
            const filteredVariables = variables.filter(variable => !lowerCaseRegex.test(variable) && !numberRegex.test(variable));
            negative_atoms.push(...filteredVariables);
        }
    }
    while ((match = patternType3.exec(body)) !== null) {
        expressions.push(match[0].trim());
    }
    if (body.includes("=")) {
        while ((match = regexAfterEqual.exec(body)) !== null) {
            if (!local_equal.includes(match[1]) && !lowerCaseRegex.test(match[1]) && !numberRegex.test(match[1])) {
                local_equal.push(match[1]);
            }
        }
        while ((match = regexBeforeEqual.exec(body)) !== null) {
            if (!local_equal.includes(match[1]) && !lowerCaseRegex.test(match[1]) && !numberRegex.test(match[1])) {
                local_equal.push(match[1]);
            }
        }
    }
    const pos_atoms = positive_atoms.flatMap(item => item.split(","));
    const neg_atoms = negative_atoms.flatMap(item => item.split(","));
    return [head_aggregate, pos_atoms, neg_atoms, expressions, local_equal];
}
exports.extract_variables_from_aggregate = extract_variables_from_aggregate;
//Estrae le variabili globali presenti in un' espressione aritmetica o in assegnamento
function extract_variable_from_global_expression(input) {
    const variables = [];
    const expressions = [];
    if (!input.includes('{') && !input.includes('}')) {
        const equations = input.split(",");
        const regexExpression = /\b(?:[A-Za-z]+\d*|\d+)\b\s*(?:[+\-*\/=]\s*\b(?:[A-Za-z]+\d*|\d+)\b\s*)+/g;
        const regexAfterEqual = /(?<=\=\s*)\b(\w+)\b(?![\w\d\+\-\*\/])/g;
        const regexBeforeEqual = /\b(\w+)\b(?=\s*=\s*)(?<![\w\d\+\-\*\/]\s*\b\w+\b\s*)/g;
        equations.forEach(equation => {
            let match;
            if (equation.includes("=")) {
                // Cerca variabili che seguono un uguale senza operatori aritmetici immediatamente prima
                while ((match = regexAfterEqual.exec(equation)) !== null) {
                    if (!variables.includes(match[1]) && !isNumber(match[1])) {
                        variables.push(match[1]);
                    }
                }
                // Cerca variabili che precedono un uguale senza operatori aritmetici immediatamente dopo
                while ((match = regexBeforeEqual.exec(equation)) !== null) {
                    if (!variables.includes(match[1]) && !isNumber(match[1])) {
                        variables.push(match[1]);
                    }
                }
                while ((match = regexExpression.exec(equation)) !== null) {
                    expressions.push(match[0].trim());
                }
            }
        });
    }
    else {
        const regexVariableHash = /\b(\w+)\b\s*=\s*#/g;
        const regexCurlyEqualVariable = /}\s*=\s*\b(\w+)\b/g;
        let match;
        while ((match = regexVariableHash.exec(input)) !== null) {
            if (!isNumber(match[1]) && !variables.includes(match[1])) {
                variables.push(match[1]);
            }
        }
        while ((match = regexCurlyEqualVariable.exec(input)) !== null) {
            if (!isNumber(match[1]) && !variables.includes(match[1])) {
                variables.push(match[1]);
            }
        }
    }
    return [variables, expressions];
}
exports.extract_variable_from_global_expression = extract_variable_from_global_expression;
// Estrae le variabili globali positive e negative
function extract_global_pos_neg_variables(input) {
    let pos = [];
    let neg = [];
    if (input && typeof input === 'string') {
        const cleanedInput = input.replace(/\{[^}]*\}/g, '');
        const regex = /(?:not\s+)?[a-z]+\(([^\)]+)\)/gi;
        const lowerCaseRegex = /^[a-z]+$/; // RegEx per stringhe di lettere minuscole
        const numberRegex = /^\d+$/; // RegEx per numeri
        let match;
        while ((match = regex.exec(cleanedInput)) !== null) {
            const variables = match[1].split(',').map(v => v.trim());
            const filteredVariables = variables.filter(variable => !lowerCaseRegex.test(variable) && !numberRegex.test(variable));
            if (match[0].startsWith('not')) {
                neg.push(...filteredVariables);
            }
            else {
                pos.push(...filteredVariables);
            }
        }
    }
    return [pos, neg];
}
exports.extract_global_pos_neg_variables = extract_global_pos_neg_variables;
//Estrae le variabili in testa
function extractPositiveVariables(input) {
    const regex = /[a-z]+\(([^\)]+)\)/gi;
    let match;
    let pos = [];
    const lowerCaseRegex = /^[a-z]+$/; // RegEx per stringhe di lettere minuscole
    const numberRegex = /^\d+$/; // RegEx per numeri
    while ((match = regex.exec(input)) !== null) {
        const variables = match[1].split(',').map(v => v.trim());
        for (const variable of variables) {
            if (!lowerCaseRegex.test(variable) && !numberRegex.test(variable)) {
                pos.push(variable);
            }
        }
    }
    return pos;
}
exports.extractPositiveVariables = extractPositiveVariables;
// Funzione ausiliaria per verificare se una stringa è un numero
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}
exports.isNumber = isNumber;
//# sourceMappingURL=utility_parsing.js.map