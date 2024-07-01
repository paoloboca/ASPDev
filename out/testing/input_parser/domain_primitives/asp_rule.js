"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspRule = void 0;
class AspRule {
    content;
    static regex = /[a-zA-Z(,) |:.-]+/m;
    constructor(content) {
        this.content = content;
        this.content = this.valid(content);
    }
    valid(content) {
        let raw_content = content;
        if (raw_content.match(AspRule.regex)) {
            return raw_content;
        }
        throw new Error(`wrong rule format`);
    }
    stringify() {
        return `${this.content}`;
    }
}
exports.AspRule = AspRule;
//# sourceMappingURL=asp_rule.js.map