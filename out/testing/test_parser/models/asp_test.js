"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspTest = void 0;
const input_parser_1 = require("../../input_parser/input_parser");
class AspTest {
    name;
    scope;
    input;
    assert;
    path;
    inputFile;
    constructor(name, scope, input, assert, path) {
        this.name = name;
        this.scope = scope;
        this.input = input;
        this.assert = assert;
        this.path = path;
        this.inputFile = input_parser_1.InputParser.parse_input_file(this.path.stringify());
    }
    static extractRules(scope, input, path) {
        let rules = [];
        scope.forEach(label => {
            let partial_rules = input.annotations.get(label);
            if (partial_rules === undefined) {
                throw new Error(`The label ${label.stringify()} is not used in the file ${path.stringify()}`);
            }
            rules.push(...partial_rules);
        });
        return rules;
    }
    rules() {
        if (this.inputFile === undefined) {
            throw new Error(`You must parse the test file if you want to use this method`);
        }
        return AspTest.extractRules(this.scope, this.inputFile, this.path);
    }
}
exports.AspTest = AspTest;
//# sourceMappingURL=asp_test.js.map