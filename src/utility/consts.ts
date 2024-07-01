const ROOT_DIR = "assets/";
const DLV_CODE_DIR = "code/dlv/";
const FULL_PATH = ROOT_DIR+DLV_CODE_DIR;
const COOKBOOK_EXTENSION_FILE = ".txt";


export const PATH_TO_JSON_DICTIONARY ={
    CONSTANTS: ROOT_DIR+"constants.json",
	AGGREGATES: ROOT_DIR+"aggregates.json",
	BUILTINS: ROOT_DIR+"builtins.json",
	TESTS:ROOT_DIR+"annotations_test.json"
};

export const DYNAMIC_PREDICATE_REGEXS = {
	FULL_REGEX: /(\w+\s*\(\s*"*\w+"*(?:\s*,\s*"*\w+"*\s*)*\s*\))\s*(?::-|\||\.|,)/g,
	AUX_REGEX: /(\w+)\s*\(/g

};

export const DYNAMIC_TERMS_REGEXS = {
	FULL_REGEX:	/\w+\s*\(\s*"*\w+"*(?:\s*,\s*"*\w+"*\s*)*\s*\)\s*(?::-|\||\.|,)/g
};



