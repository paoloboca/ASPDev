"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DYNAMIC_TERMS_REGEXS = exports.DYNAMIC_PREDICATE_REGEXS = exports.PATH_TO_JSON_DICTIONARY = void 0;
const ROOT_DIR = "assets/";
const DLV_CODE_DIR = "code/dlv/";
const FULL_PATH = ROOT_DIR + DLV_CODE_DIR;
const COOKBOOK_EXTENSION_FILE = ".txt";
exports.PATH_TO_JSON_DICTIONARY = {
    CONSTANTS: ROOT_DIR + "constants.json",
    AGGREGATES: ROOT_DIR + "aggregates.json",
    BUILTINS: ROOT_DIR + "builtins.json",
    TESTS: ROOT_DIR + "annotations_test.json"
};
exports.DYNAMIC_PREDICATE_REGEXS = {
    FULL_REGEX: /(\w+\s*\(\s*"*\w+"*(?:\s*,\s*"*\w+"*\s*)*\s*\))\s*(?::-|\||\.|,)/g,
    AUX_REGEX: /(\w+)\s*\(/g
};
exports.DYNAMIC_TERMS_REGEXS = {
    FULL_REGEX: /\w+\s*\(\s*"*\w+"*(?:\s*,\s*"*\w+"*\s*)*\s*\)\s*(?::-|\||\.|,)/g
};
//# sourceMappingURL=consts.js.map