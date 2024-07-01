"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestName = void 0;
class TestName {
    content;
    static min_size = 1;
    static max_size = 100;
    static regex = /^[a-zA-Z0-9_-]+$/;
    constructor(content) {
        this.content = content;
        this.content = this.validSize(content);
        this.content = this.validContent(content);
    }
    validSize(content) {
        let raw_content = content;
        if (raw_content.length >= TestName.min_size && raw_content.length <= TestName.max_size) {
            return raw_content;
        }
        throw new Error(`The name of the test must be a string between ${TestName.min_size} and ${TestName.max_size}`);
    }
    validContent(content) {
        let raw_content = content;
        if (raw_content.match(TestName.regex)) {
            return raw_content;
        }
        throw new Error(`wrong test name format`);
    }
    stringify() {
        return `${this.content}`;
    }
}
exports.TestName = TestName;
//# sourceMappingURL=test_name.js.map