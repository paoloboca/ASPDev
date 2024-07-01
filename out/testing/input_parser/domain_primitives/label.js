"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
class Label {
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
        if (raw_content.length >= Label.min_size && raw_content.length <= Label.max_size) {
            return raw_content;
        }
        throw new Error(`The label must be a string between ${Label.min_size} and ${Label.max_size}`);
    }
    validContent(content) {
        let raw_content = content;
        if (raw_content.match(Label.regex)) {
            return raw_content;
        }
        throw new Error(`wrong label format`);
    }
    stringify() {
        return `${this.content}`;
    }
}
exports.Label = Label;
//# sourceMappingURL=label.js.map