"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsCache = void 0;
class TermsCache {
    /*
    Questa classe fornisce un'interfaccia per gestire un dizionario di termini dinamici
    */
    dictionary;
    static _instance;
    constructor() {
        this.dictionary = new Map;
    }
    static getInstance() {
        if (!TermsCache._instance) {
            TermsCache._instance = new TermsCache();
        }
        return TermsCache._instance;
    }
    add_field(key, values) {
        this.dictionary.set(key, values);
    }
    get_field(key) {
        return this.dictionary.get(key) || new Map();
    }
}
exports.TermsCache = TermsCache;
//# sourceMappingURL=terms_cache.js.map