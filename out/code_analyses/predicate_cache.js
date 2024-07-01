"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateCache = void 0;
/*
Questa classe fornisce un'interfaccia per gestire un dizionario di predicati dinamici,
dove ogni predicato è associato a un elenco di valori per il completamento automatico.
*/
class PredicateCache {
    dictionary;
    static _instance;
    constructor() {
        this.dictionary = new Map();
    }
    static getInstance() {
        if (!PredicateCache._instance) {
            PredicateCache._instance = new PredicateCache();
        }
        return PredicateCache._instance;
    }
    add_field(key, values) {
        const uniqueArray = values.filter((value, index, array) => index === array.findIndex((t) => (t.label === value.label)));
        this.dictionary.set(key, uniqueArray);
    }
    get_field(key) {
        return this.dictionary.get(key) || [];
    }
}
exports.PredicateCache = PredicateCache;
//# sourceMappingURL=predicate_cache.js.map