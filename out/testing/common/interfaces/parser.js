"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    static get regex() {
        throw new Error(`method not implemented`);
    }
    static tranform(matches) {
        throw new Error(`method not implemented`);
    }
    static parse(raw_input) {
        let matches = raw_input.match(this.regex);
        if (matches) {
            return this.tranform(matches);
        }
        throw new Error(`Syntax error: could not parse '${raw_input}' with '${this.regex}'`);
    }
    stringify() {
        throw new Error(`method not implemented`);
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map