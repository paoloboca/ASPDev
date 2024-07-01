"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputParser = void 0;
const file_handler_1 = require("../common/file_handler");
const input_1 = require("./models/input");
//
// InputParser prende un input asp generico e ne parserizza le annotazioni @rule e @block
//
class InputParser {
    static parse(raw_input) {
        return input_1.Input.parse(raw_input);
    }
    static parse_input_file(path) {
        return InputParser.parse((0, file_handler_1.readFile)(path));
    }
}
exports.InputParser = InputParser;
//# sourceMappingURL=input_parser.js.map