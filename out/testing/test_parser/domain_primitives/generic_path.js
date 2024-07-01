"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPath = void 0;
class GenericPath {
    content;
    static min_size = 1;
    static max_size = 100;
    constructor(content) {
        this.content = content;
        this.content = this.validSize(content);
    }
    validSize(content) {
        let raw_content = content;
        if (raw_content.length >= GenericPath.min_size && raw_content.length <= GenericPath.max_size) {
            return raw_content;
        }
        throw new Error(`path must be a string between ${GenericPath.min_size} and ${GenericPath.max_size}`);
    }
    stringify() {
        return `${this.content}`;
    }
}
exports.GenericPath = GenericPath;
//# sourceMappingURL=generic_path.js.map