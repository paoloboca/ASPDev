"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestParser = void 0;
const file_handler_1 = require("../common/file_handler");
const test_wrapper_1 = require("./models/test_wrapper");
//
// TestParser prende una generica stringa e parserizza l'annotazione @test
//
class TestParser {
    static parse(raw_test) {
        return test_wrapper_1.TestWrapper.parse(raw_test);
    }
    static parse_test_file(path) {
        return TestParser.parse(((0, file_handler_1.readFile)(path)));
    }
}
exports.TestParser = TestParser;
//# sourceMappingURL=test_parser.js.map