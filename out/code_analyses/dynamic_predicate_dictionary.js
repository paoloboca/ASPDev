"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicPredicateDictionary = void 0;
class DynamicPredicateDictionary {
    dictionary;
    static _instance;
    constructor() {
        this.dictionary = new Map();
    }
    static getInstance() {
        if (!DynamicPredicateDictionary._instance) {
            DynamicPredicateDictionary._instance = new DynamicPredicateDictionary();
        }
        return DynamicPredicateDictionary._instance;
    }
    add_field(key, values) {
        const uniqueArray = values.filter((value, index, array) => index === array.findIndex((t) => (t.label === value.label)));
        this.dictionary.set(key, uniqueArray);
    }
    get_field(key) {
        return this.dictionary.get(key) || [];
    }
}
exports.DynamicPredicateDictionary = DynamicPredicateDictionary;
//# sourceMappingURL=dynamic_predicate_dictionary.js.map