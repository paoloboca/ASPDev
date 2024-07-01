"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DlvOutputParser = void 0;
const file_handler_1 = require("../common/file_handler");
const output_1 = require("./models/output");
//
// DlvOutputParser prende un output dlv e ne parserizza le annotazioni @rule e @block
//
class DlvOutputParser {
    static parse(raw_output) {
        return output_1.Output.parse(raw_output);
    }
    static parse_output_file(path) {
        return DlvOutputParser.parse((0, file_handler_1.readFile)(path));
    }
}
exports.DlvOutputParser = DlvOutputParser;
//# sourceMappingURL=dlv_output_parser.js.map