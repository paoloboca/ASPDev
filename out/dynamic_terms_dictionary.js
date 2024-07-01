"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicTermsDictionary = void 0;
class DynamicTermsDictionary {
    dictionary;
    static _instance;
    constructor() {
        this.dictionary = new Map;
    }
    static getInstance() {
        if (!DynamicTermsDictionary._instance) {
            DynamicTermsDictionary._instance = new DynamicTermsDictionary();
        }
        return DynamicTermsDictionary._instance;
    }
    add_field(key, values) {
        this.dictionary.set(key, values);
    }
    get_field(key) {
        return this.dictionary.get(key) || new Map();
    }
}
exports.DynamicTermsDictionary = DynamicTermsDictionary;
//# sourceMappingURL=dynamic_terms_dictionary.js.map