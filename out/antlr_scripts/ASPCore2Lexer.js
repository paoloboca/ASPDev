"use strict";
// Generated from ASPCore2.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASPCore2Lexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class ASPCore2Lexer extends Lexer_1.Lexer {
    static NAF = 1;
    static SYMBOLIC_CONSTANT = 2;
    static VARIABLE = 3;
    static STRING = 4;
    static NUMBER = 5;
    static WS = 6;
    static START_COMMENT = 7;
    static END_COMMENT = 8;
    static COMMENT = 9;
    static DOT = 10;
    static DDOT = 11;
    static COMMA = 12;
    static HEAD_SEPARATOR = 13;
    static SEMICOLON = 14;
    static COLON = 15;
    static AT = 16;
    static CONS = 17;
    static WCONS = 18;
    static PLUS = 19;
    static DASH = 20;
    static TIMES = 21;
    static SLASH = 22;
    static BACK_SLASH = 23;
    static PARAM_OPEN = 24;
    static PARAM_CLOSE = 25;
    static SQUARE_OPEN = 26;
    static SQUARE_CLOSED = 27;
    static CURLY_OPEN = 28;
    static CURLY_CLOSE = 29;
    static QUERY_MARK = 30;
    static ANON_VAR = 31;
    static EQUAL = 32;
    static UNEQUAL = 33;
    static LESS = 34;
    static GREATER = 35;
    static LESS_OR_EQ = 36;
    static GREATER_OR_EQ = 37;
    static AMPERSAND = 38;
    static EXISTS = 39;
    static AGGR_COUNT = 40;
    static AGGR_MAX = 41;
    static AGGR_MIN = 42;
    static AGGR_SUM = 43;
    static ANNOTATION_GLOBAL_WASP_PROPAGATOR = 44;
    static DIRECTIVE_NAME = 45;
    static DIRECTIVE_VALUE = 46;
    static ANNOTATION_RULE_ALIGN_SUBSTITUTIONS = 47;
    static ANNOTATION_RULE_LOOK_AHEAD = 48;
    static ANNOTATION_RULE_PROJECTION = 49;
    static ANNOTATION_RULE_REWRITING_ARITH = 50;
    static ANNOTATION_RULE_ORDERING = 51;
    static ANNOTATION_ORDERING_VALUE = 52;
    static ANNOTATION_RULE_ATOM_INDEXED = 53;
    static ANNOTATION_ATOM_INDEXED_ATOM = 54;
    static ANNOTATION_ATOM_INDEXED_ARGUMENTS = 55;
    static ANNOTATION_RULE_PARTIAL_ORDER = 56;
    static ANNOTATION_PARTIAL_ORDER_BEFORE = 57;
    static ANNOTATION_PARTIAL_ORDER_AFTER = 58;
    static ANNOTATION_EXTATOM_PREDICATE = 59;
    static ANNOTATION_EXTATOM_TYPE = 60;
    static ANNOTATION_EXTATOM_TYPE_QCONST = 61;
    static ANNOTATION_EXTATOM_TYPE_CONST = 62;
    static ANNOTATION_EXTATOM_TYPE_U_INT = 63;
    static ANNOTATION_EXTATOM_TYPE_UR_INT = 64;
    static ANNOTATION_EXTATOM_TYPE_UT_INT = 65;
    static ANNOTATION_EXTATOM_TYPE_R_INT = 66;
    static ANNOTATION_EXTATOM_TYPE_T_INT = 67;
    static ANNOTATION_GLOBAL_ORDERING = 68;
    static ANNOTATION_GLOBAL_ATOM_INDEXED = 69;
    static ANNOTATION_GLOBAL_PARTIAL_ORDER = 70;
    static ANNOTATION_GLOBAL_EXTATOM_CONVERSION = 71;
    static ANNOTATION_RULE_TO_DECOMPOSE = 72;
    static ANNOTATION_RULE_TO_NOT_DECOMPOSE = 73;
    static ANNOTATION_GLOBAL_WASP_HEURISTIC = 74;
    static ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE = 75;
    static ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS = 76;
    // tslint:disable:no-trailing-whitespace
    static channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    static modeNames = [
        "DEFAULT_MODE",
    ];
    static ruleNames = [
        "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER", "WS", "START_COMMENT",
        "END_COMMENT", "COMMENT", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", "SEMICOLON",
        "COLON", "AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES", "SLASH", "BACK_SLASH",
        "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", "CURLY_OPEN",
        "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", "LESS", "GREATER",
        "LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS", "AGGR_COUNT", "AGGR_MAX",
        "AGGR_MIN", "AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR", "DIRECTIVE_NAME",
        "DIRECTIVE_VALUE", "ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", "ANNOTATION_RULE_LOOK_AHEAD",
        "ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH", "ANNOTATION_RULE_ORDERING",
        "ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED", "ANNOTATION_ATOM_INDEXED_ATOM",
        "ANNOTATION_ATOM_INDEXED_ARGUMENTS", "ANNOTATION_RULE_PARTIAL_ORDER",
        "ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", "ANNOTATION_EXTATOM_PREDICATE",
        "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", "ANNOTATION_EXTATOM_TYPE_CONST",
        "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", "ANNOTATION_EXTATOM_TYPE_UT_INT",
        "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", "ANNOTATION_GLOBAL_ORDERING",
        "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", "ANNOTATION_GLOBAL_EXTATOM_CONVERSION",
        "ANNOTATION_RULE_TO_DECOMPOSE", "ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC",
        "ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS",
    ];
    static _LITERAL_NAMES = [
        undefined, "'not'", undefined, undefined, undefined, undefined, undefined,
        "'%/'", "'/%'", "'%'", "'.'", "'..'", "','", "'|'", "';'", "':'", "'@'",
        "':-'", "':~'", "'+'", "'-'", "'*'", "'/'", "'\\'", "'('", "')'", "'['",
        "']'", "'{'", "'}'", "'?'", "'_'", undefined, undefined, "'<'", "'>'",
        "'<='", "'>='", "'&'", "'\\'", "'#count'", "'#max'", "'#min'", "'#sum'",
        "'#propagator'", "'#([A-Za-z_]*)'", "'.*'", "'%@rule_align_substitutions'",
        "'%@rule_look_ahead'", "'%@rule_projection'", "'%@rule_rewriting_arith'",
        "'%@rule_ordering'", "'@value'", "'%@rule_atom_indexed'", "'@atom'", "'@arguments'",
        "'%@rule_partial_order'", "'@before'", "'@after'", "'@predicate'", "'@type'",
        "'@Q_CONST'", "'@CONST'", "'@U_INT'", "'@UR_INT'", "'@UT_INT'", "'@R_INT'",
        "'@T_INT'", "'%@global_ordering'", "'%@global_atom_indexed'", "'%@global_partial_order'",
        "'%@global_external_predicate_conversion'", "'%@rule_to_decompose'", "'%@rule_to_not_decompose'",
        "'%@global_heuristic'", "'@file'", "'@elements'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER",
        "WS", "START_COMMENT", "END_COMMENT", "COMMENT", "DOT", "DDOT", "COMMA",
        "HEAD_SEPARATOR", "SEMICOLON", "COLON", "AT", "CONS", "WCONS", "PLUS",
        "DASH", "TIMES", "SLASH", "BACK_SLASH", "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN",
        "SQUARE_CLOSED", "CURLY_OPEN", "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR",
        "EQUAL", "UNEQUAL", "LESS", "GREATER", "LESS_OR_EQ", "GREATER_OR_EQ",
        "AMPERSAND", "EXISTS", "AGGR_COUNT", "AGGR_MAX", "AGGR_MIN", "AGGR_SUM",
        "ANNOTATION_GLOBAL_WASP_PROPAGATOR", "DIRECTIVE_NAME", "DIRECTIVE_VALUE",
        "ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", "ANNOTATION_RULE_LOOK_AHEAD", "ANNOTATION_RULE_PROJECTION",
        "ANNOTATION_RULE_REWRITING_ARITH", "ANNOTATION_RULE_ORDERING", "ANNOTATION_ORDERING_VALUE",
        "ANNOTATION_RULE_ATOM_INDEXED", "ANNOTATION_ATOM_INDEXED_ATOM", "ANNOTATION_ATOM_INDEXED_ARGUMENTS",
        "ANNOTATION_RULE_PARTIAL_ORDER", "ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER",
        "ANNOTATION_EXTATOM_PREDICATE", "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST",
        "ANNOTATION_EXTATOM_TYPE_CONST", "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT",
        "ANNOTATION_EXTATOM_TYPE_UT_INT", "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT",
        "ANNOTATION_GLOBAL_ORDERING", "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER",
        "ANNOTATION_GLOBAL_EXTATOM_CONVERSION", "ANNOTATION_RULE_TO_DECOMPOSE",
        "ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC",
        "ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ASPCore2Lexer._LITERAL_NAMES, ASPCore2Lexer._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return ASPCore2Lexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(ASPCore2Lexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "ASPCore2.g4"; }
    // @Override
    get ruleNames() { return ASPCore2Lexer.ruleNames; }
    // @Override
    get serializedATN() { return ASPCore2Lexer._serializedATN; }
    // @Override
    get channelNames() { return ASPCore2Lexer.channelNames; }
    // @Override
    get modeNames() { return ASPCore2Lexer.modeNames; }
    static _serializedATNSegments = 2;
    static _serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02N\u02F9\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\xA2\n\x03\f\x03\x0E\x03\xA5" +
        "\v\x03\x03\x04\x03\x04\x07\x04\xA9\n\x04\f\x04\x0E\x04\xAC\v\x04\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x07\x05\xB2\n\x05\f\x05\x0E\x05\xB5\v\x05\x03" +
        "\x05\x03\x05\x03\x06\x06\x06\xBA\n\x06\r\x06\x0E\x06\xBB\x03\x07\x06\x07" +
        "\xBF\n\x07\r\x07\x0E\x07\xC0\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03" +
        "\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E" +
        "\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
        "\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
        "\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
        "\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
        "\x03\x1F\x03 \x03 \x03!\x03!\x03!\x05!\xFF\n!\x03\"\x03\"\x03\"\x03\"" +
        "\x05\"\u0105\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03" +
        "\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
        "*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
        "0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
        "0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x031\x03" +
        "1\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x03" +
        "1\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
        "2\x032\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x033\x033\x03" +
        "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
        "3\x033\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x035\x035\x035\x035\x035\x035\x035\x036\x036\x036\x03" +
        "6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
        "6\x036\x036\x037\x037\x037\x037\x037\x037\x038\x038\x038\x038\x038\x03" +
        "8\x038\x038\x038\x038\x038\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
        "9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
        "<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03" +
        "=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03" +
        "?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03" +
        "A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
        "C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
        "E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
        "E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
        "F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03" +
        "L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03\xB3" +
        "\x02\x02N\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
        "\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
        "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
        "\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
        "\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
        "O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02" +
        "4g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02" +
        "@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02" +
        "H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x03\x02\x07\x03" +
        "\x02c|\x06\x022;C\\aac|\x03\x02C\\\x03\x022;\x04\x02\v\f\"\"\x02\u0300" +
        "\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
        "\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
        "\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
        "\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
        "\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
        "!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03" +
        "\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02" +
        "\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x02" +
        "5\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02" +
        "\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02" +
        "\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03" +
        "\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02" +
        "\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02" +
        "W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02" +
        "\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02" +
        "\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03" +
        "\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02" +
        "\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02" +
        "y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03" +
        "\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03" +
        "\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03" +
        "\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03" +
        "\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03" +
        "\x02\x02\x02\x02\x99\x03\x02\x02\x02\x03\x9B\x03\x02\x02\x02\x05\x9F\x03" +
        "\x02\x02\x02\x07\xA6\x03\x02\x02\x02\t\xAD\x03\x02\x02\x02\v\xB9\x03\x02" +
        "\x02\x02\r\xBE\x03\x02\x02\x02\x0F\xC4\x03\x02\x02\x02\x11\xC7\x03\x02" +
        "\x02\x02\x13\xCA\x03\x02\x02\x02\x15\xCC\x03\x02\x02\x02\x17\xCE\x03\x02" +
        "\x02\x02\x19\xD1\x03\x02\x02\x02\x1B\xD3\x03\x02\x02\x02\x1D\xD5\x03\x02" +
        "\x02\x02\x1F\xD7\x03\x02\x02\x02!\xD9\x03\x02\x02\x02#\xDB\x03\x02\x02" +
        "\x02%\xDE\x03\x02\x02\x02\'\xE1\x03\x02\x02\x02)\xE3\x03\x02\x02\x02+" +
        "\xE5\x03\x02\x02\x02-\xE7\x03\x02\x02\x02/\xE9\x03\x02\x02\x021\xEB\x03" +
        "\x02\x02\x023\xED\x03\x02\x02\x025\xEF\x03\x02\x02\x027\xF1\x03\x02\x02" +
        "\x029\xF3\x03\x02\x02\x02;\xF5\x03\x02\x02\x02=\xF7\x03\x02\x02\x02?\xF9" +
        "\x03\x02\x02\x02A\xFE\x03\x02\x02\x02C\u0104\x03\x02\x02\x02E\u0106\x03" +
        "\x02\x02\x02G\u0108\x03\x02\x02\x02I\u010A\x03\x02\x02\x02K\u010D\x03" +
        "\x02\x02\x02M\u0110\x03\x02\x02\x02O\u0112\x03\x02\x02\x02Q\u0115\x03" +
        "\x02\x02\x02S\u011C\x03\x02\x02\x02U\u0121\x03\x02\x02\x02W\u0126\x03" +
        "\x02\x02\x02Y\u012B\x03\x02\x02\x02[\u0137\x03\x02\x02\x02]\u0145\x03" +
        "\x02\x02\x02_\u0148\x03\x02\x02\x02a\u0163\x03\x02\x02\x02c\u0175\x03" +
        "\x02\x02\x02e\u0187\x03\x02\x02\x02g\u019E\x03\x02\x02\x02i\u01AE\x03" +
        "\x02\x02\x02k\u01B5\x03\x02\x02\x02m\u01C9\x03\x02\x02\x02o\u01CF\x03" +
        "\x02\x02\x02q\u01DA\x03\x02\x02\x02s\u01EF\x03\x02\x02\x02u\u01F7\x03" +
        "\x02\x02\x02w\u01FE\x03\x02\x02\x02y\u0209\x03\x02\x02\x02{\u020F\x03" +
        "\x02\x02\x02}\u0218\x03\x02\x02\x02\x7F\u021F\x03\x02\x02\x02\x81\u0226" +
        "\x03\x02\x02\x02\x83\u022E\x03\x02\x02\x02\x85\u0236\x03\x02\x02\x02\x87" +
        "\u023D\x03\x02\x02\x02\x89\u0244\x03\x02\x02\x02\x8B\u0256\x03\x02\x02" +
        "\x02\x8D\u026C\x03\x02\x02\x02\x8F\u0283\x03\x02\x02\x02\x91\u02AA\x03" +
        "\x02\x02\x02\x93\u02BE\x03\x02\x02\x02\x95\u02D6\x03\x02\x02\x02\x97\u02E9" +
        "\x03\x02\x02\x02\x99\u02EF\x03\x02\x02\x02\x9B\x9C\x07p\x02\x02\x9C\x9D" +
        "\x07q\x02\x02\x9D\x9E\x07v\x02\x02\x9E\x04\x03\x02\x02\x02\x9F\xA3\t\x02" +
        "\x02\x02\xA0\xA2\t\x03\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02" +
        "\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x06\x03\x02" +
        "\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6\xAA\t\x04\x02\x02\xA7\xA9\t\x03\x02" +
        "\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02" +
        "\x02\xAA\xAB\x03\x02\x02\x02\xAB\b\x03\x02\x02\x02\xAC\xAA\x03\x02\x02" +
        "\x02\xAD\xB3\x07$\x02\x02\xAE\xAF\x07^\x02\x02\xAF\xB2\x07$\x02\x02\xB0" +
        "\xB2\v\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2" +
        "\xB5\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4" +
        "\xB6\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\x07$\x02\x02\xB7" +
        "\n\x03\x02\x02\x02\xB8\xBA\t\x05\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB" +
        "\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\f" +
        "\x03\x02\x02\x02\xBD\xBF\t\x06\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC0" +
        "\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2" +
        "\x03\x02\x02\x02\xC2\xC3\b\x07\x02\x02\xC3\x0E\x03\x02\x02\x02\xC4\xC5" +
        "\x07\'\x02\x02\xC5\xC6\x071\x02\x02\xC6\x10\x03\x02\x02\x02\xC7\xC8\x07" +
        "1\x02\x02\xC8\xC9\x07\'\x02\x02\xC9\x12\x03\x02\x02\x02\xCA\xCB\x07\'" +
        "\x02\x02\xCB\x14\x03\x02\x02\x02\xCC\xCD\x070\x02\x02\xCD\x16\x03\x02" +
        "\x02\x02\xCE\xCF\x070\x02\x02\xCF\xD0\x070\x02\x02\xD0\x18\x03\x02\x02" +
        "\x02\xD1\xD2\x07.\x02\x02\xD2\x1A\x03\x02\x02\x02\xD3\xD4\x07~\x02\x02" +
        "\xD4\x1C\x03\x02\x02\x02\xD5\xD6\x07=\x02\x02\xD6\x1E\x03\x02\x02\x02" +
        "\xD7\xD8\x07<\x02\x02\xD8 \x03\x02\x02\x02\xD9\xDA\x07B\x02\x02\xDA\"" +
        "\x03\x02\x02\x02\xDB\xDC\x07<\x02\x02\xDC\xDD\x07/\x02\x02\xDD$\x03\x02" +
        "\x02\x02\xDE\xDF\x07<\x02\x02\xDF\xE0\x07\x80\x02\x02\xE0&\x03\x02\x02" +
        "\x02\xE1\xE2\x07-\x02\x02\xE2(\x03\x02\x02\x02\xE3\xE4\x07/\x02\x02\xE4" +
        "*\x03\x02\x02\x02\xE5\xE6\x07,\x02\x02\xE6,\x03\x02\x02\x02\xE7\xE8\x07" +
        "1\x02\x02\xE8.\x03\x02\x02\x02\xE9\xEA\x07^\x02\x02\xEA0\x03\x02\x02\x02" +
        "\xEB\xEC\x07*\x02\x02\xEC2\x03\x02\x02\x02\xED\xEE\x07+\x02\x02\xEE4\x03" +
        "\x02\x02\x02\xEF\xF0\x07]\x02\x02\xF06\x03\x02\x02\x02\xF1\xF2\x07_\x02" +
        "\x02\xF28\x03\x02\x02\x02\xF3\xF4\x07}\x02\x02\xF4:\x03\x02\x02\x02\xF5" +
        "\xF6\x07\x7F\x02\x02\xF6<\x03\x02\x02\x02\xF7\xF8\x07A\x02\x02\xF8>\x03" +
        "\x02\x02\x02\xF9\xFA\x07a\x02\x02\xFA@\x03\x02\x02\x02\xFB\xFF\x07?\x02" +
        "\x02\xFC\xFD\x07?\x02\x02\xFD\xFF\x07?\x02\x02\xFE\xFB\x03\x02\x02\x02" +
        "\xFE\xFC\x03\x02\x02\x02\xFFB\x03\x02\x02\x02\u0100\u0101\x07>\x02\x02" +
        "\u0101\u0105\x07@\x02\x02\u0102\u0103\x07#\x02\x02\u0103\u0105\x07?\x02" +
        "\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105D\x03" +
        "\x02\x02\x02\u0106\u0107\x07>\x02\x02\u0107F\x03\x02\x02\x02\u0108\u0109" +
        "\x07@\x02\x02\u0109H\x03\x02\x02\x02\u010A\u010B\x07>\x02\x02\u010B\u010C" +
        "\x07?\x02\x02\u010CJ\x03\x02\x02\x02\u010D\u010E\x07@\x02\x02\u010E\u010F" +
        "\x07?\x02\x02\u010FL\x03\x02\x02\x02\u0110\u0111\x07(\x02\x02\u0111N\x03" +
        "\x02\x02\x02\u0112\u0113\x07^\x02\x02\u0113\u0114\x07G\x02\x02\u0114P" +
        "\x03\x02\x02\x02\u0115\u0116\x07%\x02\x02\u0116\u0117\x07e\x02\x02\u0117" +
        "\u0118\x07q\x02\x02\u0118\u0119\x07w\x02\x02\u0119\u011A\x07p\x02\x02" +
        "\u011A\u011B\x07v\x02\x02\u011BR\x03\x02\x02\x02\u011C\u011D\x07%\x02" +
        "\x02\u011D\u011E\x07o\x02\x02\u011E\u011F\x07c\x02\x02\u011F\u0120\x07" +
        "z\x02\x02\u0120T\x03\x02\x02\x02\u0121\u0122\x07%\x02\x02\u0122\u0123" +
        "\x07o\x02\x02\u0123\u0124\x07k\x02\x02\u0124\u0125\x07p\x02\x02\u0125" +
        "V\x03\x02\x02\x02\u0126\u0127\x07%\x02\x02\u0127\u0128\x07u\x02\x02\u0128" +
        "\u0129\x07w\x02\x02\u0129\u012A\x07o\x02\x02\u012AX\x03\x02\x02\x02\u012B" +
        "\u012C\x07%\x02\x02\u012C\u012D\x07r\x02\x02\u012D\u012E\x07t\x02\x02" +
        "\u012E\u012F\x07q\x02\x02\u012F\u0130\x07r\x02\x02\u0130\u0131\x07c\x02" +
        "\x02\u0131\u0132\x07i\x02\x02\u0132\u0133\x07c\x02\x02\u0133\u0134\x07" +
        "v\x02\x02\u0134\u0135\x07q\x02\x02\u0135\u0136\x07t\x02\x02\u0136Z\x03" +
        "\x02\x02\x02\u0137\u0138\x07%\x02\x02\u0138\u0139\x07*\x02\x02\u0139\u013A" +
        "\x07]\x02\x02\u013A\u013B\x07C\x02\x02\u013B\u013C\x07/\x02\x02\u013C" +
        "\u013D\x07\\\x02\x02\u013D\u013E\x07c\x02\x02\u013E\u013F\x07/\x02\x02" +
        "\u013F\u0140\x07|\x02\x02\u0140\u0141\x07a\x02\x02\u0141\u0142\x07_\x02" +
        "\x02\u0142\u0143\x07,\x02\x02\u0143\u0144\x07+\x02\x02\u0144\\\x03\x02" +
        "\x02\x02\u0145\u0146\x070\x02\x02\u0146\u0147\x07,\x02\x02\u0147^\x03" +
        "\x02\x02\x02\u0148\u0149\x07\'\x02\x02\u0149\u014A\x07B\x02\x02\u014A" +
        "\u014B\x07t\x02\x02\u014B\u014C\x07w\x02\x02\u014C\u014D\x07n\x02\x02" +
        "\u014D\u014E\x07g\x02\x02\u014E\u014F\x07a\x02\x02\u014F\u0150\x07c\x02" +
        "\x02\u0150\u0151\x07n\x02\x02\u0151\u0152\x07k\x02\x02\u0152\u0153\x07" +
        "i\x02\x02\u0153\u0154\x07p\x02\x02\u0154\u0155\x07a\x02\x02\u0155\u0156" +
        "\x07u\x02\x02\u0156\u0157\x07w\x02\x02\u0157\u0158\x07d\x02\x02\u0158" +
        "\u0159\x07u\x02\x02\u0159\u015A\x07v\x02\x02\u015A\u015B\x07k\x02\x02" +
        "\u015B\u015C\x07v\x02\x02\u015C\u015D\x07w\x02\x02\u015D\u015E\x07v\x02" +
        "\x02\u015E\u015F\x07k\x02\x02\u015F\u0160\x07q\x02\x02\u0160\u0161\x07" +
        "p\x02\x02\u0161\u0162\x07u\x02\x02\u0162`\x03\x02\x02\x02\u0163\u0164" +
        "\x07\'\x02\x02\u0164\u0165\x07B\x02\x02\u0165\u0166\x07t\x02\x02\u0166" +
        "\u0167\x07w\x02\x02\u0167\u0168\x07n\x02\x02\u0168\u0169\x07g\x02\x02" +
        "\u0169\u016A\x07a\x02\x02\u016A\u016B\x07n\x02\x02\u016B\u016C\x07q\x02" +
        "\x02\u016C\u016D\x07q\x02\x02\u016D\u016E\x07m\x02\x02\u016E\u016F\x07" +
        "a\x02\x02\u016F\u0170\x07c\x02\x02\u0170\u0171\x07j\x02\x02\u0171\u0172" +
        "\x07g\x02\x02\u0172\u0173\x07c\x02\x02\u0173\u0174\x07f\x02\x02\u0174" +
        "b\x03\x02\x02\x02\u0175\u0176\x07\'\x02\x02\u0176\u0177\x07B\x02\x02\u0177" +
        "\u0178\x07t\x02\x02\u0178\u0179\x07w\x02\x02\u0179\u017A\x07n\x02\x02" +
        "\u017A\u017B\x07g\x02\x02\u017B\u017C\x07a\x02\x02\u017C\u017D\x07r\x02" +
        "\x02\u017D\u017E\x07t\x02\x02\u017E\u017F\x07q\x02\x02\u017F\u0180\x07" +
        "l\x02\x02\u0180\u0181\x07g\x02\x02\u0181\u0182\x07e\x02\x02\u0182\u0183" +
        "\x07v\x02\x02\u0183\u0184\x07k\x02\x02\u0184\u0185\x07q\x02\x02\u0185" +
        "\u0186\x07p\x02\x02\u0186d\x03\x02\x02\x02\u0187\u0188\x07\'\x02\x02\u0188" +
        "\u0189\x07B\x02\x02\u0189\u018A\x07t\x02\x02\u018A\u018B\x07w\x02\x02" +
        "\u018B\u018C\x07n\x02\x02\u018C\u018D\x07g\x02\x02\u018D\u018E\x07a\x02" +
        "\x02\u018E\u018F\x07t\x02\x02\u018F\u0190\x07g\x02\x02\u0190\u0191\x07" +
        "y\x02\x02\u0191\u0192\x07t\x02\x02\u0192\u0193\x07k\x02\x02\u0193\u0194" +
        "\x07v\x02\x02\u0194\u0195\x07k\x02\x02\u0195\u0196\x07p\x02\x02\u0196" +
        "\u0197\x07i\x02\x02\u0197\u0198\x07a\x02\x02\u0198\u0199\x07c\x02\x02" +
        "\u0199\u019A\x07t\x02\x02\u019A\u019B\x07k\x02\x02\u019B\u019C\x07v\x02" +
        "\x02\u019C\u019D\x07j\x02\x02\u019Df\x03\x02\x02\x02\u019E\u019F\x07\'" +
        "\x02\x02\u019F\u01A0\x07B\x02\x02\u01A0\u01A1\x07t\x02\x02\u01A1\u01A2" +
        "\x07w\x02\x02\u01A2\u01A3\x07n\x02\x02\u01A3\u01A4\x07g\x02\x02\u01A4" +
        "\u01A5\x07a\x02\x02\u01A5\u01A6\x07q\x02\x02\u01A6\u01A7\x07t\x02\x02" +
        "\u01A7\u01A8\x07f\x02\x02\u01A8\u01A9\x07g\x02\x02\u01A9\u01AA\x07t\x02" +
        "\x02\u01AA\u01AB\x07k\x02\x02\u01AB\u01AC\x07p\x02\x02\u01AC\u01AD\x07" +
        "i\x02\x02\u01ADh\x03\x02\x02\x02\u01AE\u01AF\x07B\x02\x02\u01AF\u01B0" +
        "\x07x\x02\x02\u01B0\u01B1\x07c\x02\x02\u01B1\u01B2\x07n\x02\x02\u01B2" +
        "\u01B3\x07w\x02\x02\u01B3\u01B4\x07g\x02\x02\u01B4j\x03\x02\x02\x02\u01B5" +
        "\u01B6\x07\'\x02\x02\u01B6\u01B7\x07B\x02\x02\u01B7\u01B8\x07t\x02\x02" +
        "\u01B8\u01B9\x07w\x02\x02\u01B9\u01BA\x07n\x02\x02\u01BA\u01BB\x07g\x02" +
        "\x02\u01BB\u01BC\x07a\x02\x02\u01BC\u01BD\x07c\x02\x02\u01BD\u01BE\x07" +
        "v\x02\x02\u01BE\u01BF\x07q\x02\x02\u01BF\u01C0\x07o\x02\x02\u01C0\u01C1" +
        "\x07a\x02\x02\u01C1\u01C2\x07k\x02\x02\u01C2\u01C3\x07p\x02\x02\u01C3" +
        "\u01C4\x07f\x02\x02\u01C4\u01C5\x07g\x02\x02\u01C5\u01C6\x07z\x02\x02" +
        "\u01C6\u01C7\x07g\x02\x02\u01C7\u01C8\x07f\x02\x02\u01C8l\x03\x02\x02" +
        "\x02\u01C9\u01CA\x07B\x02\x02\u01CA\u01CB\x07c\x02\x02\u01CB\u01CC\x07" +
        "v\x02\x02\u01CC\u01CD\x07q\x02\x02\u01CD\u01CE\x07o\x02\x02\u01CEn\x03" +
        "\x02\x02\x02\u01CF\u01D0\x07B\x02\x02\u01D0\u01D1\x07c\x02\x02\u01D1\u01D2" +
        "\x07t\x02\x02\u01D2\u01D3\x07i\x02\x02\u01D3\u01D4\x07w\x02\x02\u01D4" +
        "\u01D5\x07o\x02\x02\u01D5\u01D6\x07g\x02\x02\u01D6\u01D7\x07p\x02\x02" +
        "\u01D7\u01D8\x07v\x02\x02\u01D8\u01D9\x07u\x02\x02\u01D9p\x03\x02\x02" +
        "\x02\u01DA\u01DB\x07\'\x02\x02\u01DB\u01DC\x07B\x02\x02\u01DC\u01DD\x07" +
        "t\x02\x02\u01DD\u01DE\x07w\x02\x02\u01DE\u01DF\x07n\x02\x02\u01DF\u01E0" +
        "\x07g\x02\x02\u01E0\u01E1\x07a\x02\x02\u01E1\u01E2\x07r\x02\x02\u01E2" +
        "\u01E3\x07c\x02\x02\u01E3\u01E4\x07t\x02\x02\u01E4\u01E5\x07v\x02\x02" +
        "\u01E5\u01E6\x07k\x02\x02\u01E6\u01E7\x07c\x02\x02\u01E7\u01E8\x07n\x02" +
        "\x02\u01E8\u01E9\x07a\x02\x02\u01E9\u01EA\x07q\x02\x02\u01EA\u01EB\x07" +
        "t\x02\x02\u01EB\u01EC\x07f\x02\x02\u01EC\u01ED\x07g\x02\x02\u01ED\u01EE" +
        "\x07t\x02\x02\u01EEr\x03\x02\x02\x02\u01EF\u01F0\x07B\x02\x02\u01F0\u01F1" +
        "\x07d\x02\x02\u01F1\u01F2\x07g\x02\x02\u01F2\u01F3\x07h\x02\x02\u01F3" +
        "\u01F4\x07q\x02\x02\u01F4\u01F5\x07t\x02\x02\u01F5\u01F6\x07g\x02\x02" +
        "\u01F6t\x03\x02\x02\x02\u01F7\u01F8\x07B\x02\x02\u01F8\u01F9\x07c\x02" +
        "\x02\u01F9\u01FA\x07h\x02\x02\u01FA\u01FB\x07v\x02\x02\u01FB\u01FC\x07" +
        "g\x02\x02\u01FC\u01FD\x07t\x02\x02\u01FDv\x03\x02\x02\x02\u01FE\u01FF" +
        "\x07B\x02\x02\u01FF\u0200\x07r\x02\x02\u0200\u0201\x07t\x02\x02\u0201" +
        "\u0202\x07g\x02\x02\u0202\u0203\x07f\x02\x02\u0203\u0204\x07k\x02\x02" +
        "\u0204\u0205\x07e\x02\x02\u0205\u0206\x07c\x02\x02\u0206\u0207\x07v\x02" +
        "\x02\u0207\u0208\x07g\x02\x02\u0208x\x03\x02\x02\x02\u0209\u020A\x07B" +
        "\x02\x02\u020A\u020B\x07v\x02\x02\u020B\u020C\x07{\x02\x02\u020C\u020D" +
        "\x07r\x02\x02\u020D\u020E\x07g\x02\x02\u020Ez\x03\x02\x02\x02";
    static _serializedATNSegment1 = "\u020F\u0210\x07B\x02\x02\u0210\u0211\x07S\x02\x02\u0211\u0212\x07a\x02" +
        "\x02\u0212\u0213\x07E\x02\x02\u0213\u0214\x07Q\x02\x02\u0214\u0215\x07" +
        "P\x02\x02\u0215\u0216\x07U\x02\x02\u0216\u0217\x07V\x02\x02\u0217|\x03" +
        "\x02\x02\x02\u0218\u0219\x07B\x02\x02\u0219\u021A\x07E\x02\x02\u021A\u021B" +
        "\x07Q\x02\x02\u021B\u021C\x07P\x02\x02\u021C\u021D\x07U\x02\x02\u021D" +
        "\u021E\x07V\x02\x02\u021E~\x03\x02\x02\x02\u021F\u0220\x07B\x02\x02\u0220" +
        "\u0221\x07W\x02\x02\u0221\u0222\x07a\x02\x02\u0222\u0223\x07K\x02\x02" +
        "\u0223\u0224\x07P\x02\x02\u0224\u0225\x07V\x02\x02\u0225\x80\x03\x02\x02" +
        "\x02\u0226\u0227\x07B\x02\x02\u0227\u0228\x07W\x02\x02\u0228\u0229\x07" +
        "T\x02\x02\u0229\u022A\x07a\x02\x02\u022A\u022B\x07K\x02\x02\u022B\u022C" +
        "\x07P\x02\x02\u022C\u022D\x07V\x02\x02\u022D\x82\x03\x02\x02\x02\u022E" +
        "\u022F\x07B\x02\x02\u022F\u0230\x07W\x02\x02\u0230\u0231\x07V\x02\x02" +
        "\u0231\u0232\x07a\x02\x02\u0232\u0233\x07K\x02\x02\u0233\u0234\x07P\x02" +
        "\x02\u0234\u0235\x07V\x02\x02\u0235\x84\x03\x02\x02\x02\u0236\u0237\x07" +
        "B\x02\x02\u0237\u0238\x07T\x02\x02\u0238\u0239\x07a\x02\x02\u0239\u023A" +
        "\x07K\x02\x02\u023A\u023B\x07P\x02\x02\u023B\u023C\x07V\x02\x02\u023C" +
        "\x86\x03\x02\x02\x02\u023D\u023E\x07B\x02\x02\u023E\u023F\x07V\x02\x02" +
        "\u023F\u0240\x07a\x02\x02\u0240\u0241\x07K\x02\x02\u0241\u0242\x07P\x02" +
        "\x02\u0242\u0243\x07V\x02\x02\u0243\x88\x03\x02\x02\x02\u0244\u0245\x07" +
        "\'\x02\x02\u0245\u0246\x07B\x02\x02\u0246\u0247\x07i\x02\x02\u0247\u0248" +
        "\x07n\x02\x02\u0248\u0249\x07q\x02\x02\u0249\u024A\x07d\x02\x02\u024A" +
        "\u024B\x07c\x02\x02\u024B\u024C\x07n\x02\x02\u024C\u024D\x07a\x02\x02" +
        "\u024D\u024E\x07q\x02\x02\u024E\u024F\x07t\x02\x02\u024F\u0250\x07f\x02" +
        "\x02\u0250\u0251\x07g\x02\x02\u0251\u0252\x07t\x02\x02\u0252\u0253\x07" +
        "k\x02\x02\u0253\u0254\x07p\x02\x02\u0254\u0255\x07i\x02\x02\u0255\x8A" +
        "\x03\x02\x02\x02\u0256\u0257\x07\'\x02\x02\u0257\u0258\x07B\x02\x02\u0258" +
        "\u0259\x07i\x02\x02\u0259\u025A\x07n\x02\x02\u025A\u025B\x07q\x02\x02" +
        "\u025B\u025C\x07d\x02\x02\u025C\u025D\x07c\x02\x02\u025D\u025E\x07n\x02" +
        "\x02\u025E\u025F\x07a\x02\x02\u025F\u0260\x07c\x02\x02\u0260\u0261\x07" +
        "v\x02\x02\u0261\u0262\x07q\x02\x02\u0262\u0263\x07o\x02\x02\u0263\u0264" +
        "\x07a\x02\x02\u0264\u0265\x07k\x02\x02\u0265\u0266\x07p\x02\x02\u0266" +
        "\u0267\x07f\x02\x02\u0267\u0268\x07g\x02\x02\u0268\u0269\x07z\x02\x02" +
        "\u0269\u026A\x07g\x02\x02\u026A\u026B\x07f\x02\x02\u026B\x8C\x03\x02\x02" +
        "\x02\u026C\u026D\x07\'\x02\x02\u026D\u026E\x07B\x02\x02\u026E\u026F\x07" +
        "i\x02\x02\u026F\u0270\x07n\x02\x02\u0270\u0271\x07q\x02\x02\u0271\u0272" +
        "\x07d\x02\x02\u0272\u0273\x07c\x02\x02\u0273\u0274\x07n\x02\x02\u0274" +
        "\u0275\x07a\x02\x02\u0275\u0276\x07r\x02\x02\u0276\u0277\x07c\x02\x02" +
        "\u0277\u0278\x07t\x02\x02\u0278\u0279\x07v\x02\x02\u0279\u027A\x07k\x02" +
        "\x02\u027A\u027B\x07c\x02\x02\u027B\u027C\x07n\x02\x02\u027C\u027D\x07" +
        "a\x02\x02\u027D\u027E\x07q\x02\x02\u027E\u027F\x07t\x02\x02\u027F\u0280" +
        "\x07f\x02\x02\u0280\u0281\x07g\x02\x02\u0281\u0282\x07t\x02\x02\u0282" +
        "\x8E\x03\x02\x02\x02\u0283\u0284\x07\'\x02\x02\u0284\u0285\x07B\x02\x02" +
        "\u0285\u0286\x07i\x02\x02\u0286\u0287\x07n\x02\x02\u0287\u0288\x07q\x02" +
        "\x02\u0288\u0289\x07d\x02\x02\u0289\u028A\x07c\x02\x02\u028A\u028B\x07" +
        "n\x02\x02\u028B\u028C\x07a\x02\x02\u028C\u028D\x07g\x02\x02\u028D\u028E" +
        "\x07z\x02\x02\u028E\u028F\x07v\x02\x02\u028F\u0290\x07g\x02\x02\u0290" +
        "\u0291\x07t\x02\x02\u0291\u0292\x07p\x02\x02\u0292\u0293\x07c\x02\x02" +
        "\u0293\u0294\x07n\x02\x02\u0294\u0295\x07a\x02\x02\u0295\u0296\x07r\x02" +
        "\x02\u0296\u0297\x07t\x02\x02\u0297\u0298\x07g\x02\x02\u0298\u0299\x07" +
        "f\x02\x02\u0299\u029A\x07k\x02\x02\u029A\u029B\x07e\x02\x02\u029B\u029C" +
        "\x07c\x02\x02\u029C\u029D\x07v\x02\x02\u029D\u029E\x07g\x02\x02\u029E" +
        "\u029F\x07a\x02\x02\u029F\u02A0\x07e\x02\x02\u02A0\u02A1\x07q\x02\x02" +
        "\u02A1\u02A2\x07p\x02\x02\u02A2\u02A3\x07x\x02\x02\u02A3\u02A4\x07g\x02" +
        "\x02\u02A4\u02A5\x07t\x02\x02\u02A5\u02A6\x07u\x02\x02\u02A6\u02A7\x07" +
        "k\x02\x02\u02A7\u02A8\x07q\x02\x02\u02A8\u02A9\x07p\x02\x02\u02A9\x90" +
        "\x03\x02\x02\x02\u02AA\u02AB\x07\'\x02\x02\u02AB\u02AC\x07B\x02\x02\u02AC" +
        "\u02AD\x07t\x02\x02\u02AD\u02AE\x07w\x02\x02\u02AE\u02AF\x07n\x02\x02" +
        "\u02AF\u02B0\x07g\x02\x02\u02B0\u02B1\x07a\x02\x02\u02B1\u02B2\x07v\x02" +
        "\x02\u02B2\u02B3\x07q\x02\x02\u02B3\u02B4\x07a\x02\x02\u02B4\u02B5\x07" +
        "f\x02\x02\u02B5\u02B6\x07g\x02\x02\u02B6\u02B7\x07e\x02\x02\u02B7\u02B8" +
        "\x07q\x02\x02\u02B8\u02B9\x07o\x02\x02\u02B9\u02BA\x07r\x02\x02\u02BA" +
        "\u02BB\x07q\x02\x02\u02BB\u02BC\x07u\x02\x02\u02BC\u02BD\x07g\x02\x02" +
        "\u02BD\x92\x03\x02\x02\x02\u02BE\u02BF\x07\'\x02\x02\u02BF\u02C0\x07B" +
        "\x02\x02\u02C0\u02C1\x07t\x02\x02\u02C1\u02C2\x07w\x02\x02\u02C2\u02C3" +
        "\x07n\x02\x02\u02C3\u02C4\x07g\x02\x02\u02C4\u02C5\x07a\x02\x02\u02C5" +
        "\u02C6\x07v\x02\x02\u02C6\u02C7\x07q\x02\x02\u02C7\u02C8\x07a\x02\x02" +
        "\u02C8\u02C9\x07p\x02\x02\u02C9\u02CA\x07q\x02\x02\u02CA\u02CB\x07v\x02" +
        "\x02\u02CB\u02CC\x07a\x02\x02\u02CC\u02CD\x07f\x02\x02\u02CD\u02CE\x07" +
        "g\x02\x02\u02CE\u02CF\x07e\x02\x02\u02CF\u02D0\x07q\x02\x02\u02D0\u02D1" +
        "\x07o\x02\x02\u02D1\u02D2\x07r\x02\x02\u02D2\u02D3\x07q\x02\x02\u02D3" +
        "\u02D4\x07u\x02\x02\u02D4\u02D5\x07g\x02\x02\u02D5\x94\x03\x02\x02\x02" +
        "\u02D6\u02D7\x07\'\x02\x02\u02D7\u02D8\x07B\x02\x02\u02D8\u02D9\x07i\x02" +
        "\x02\u02D9\u02DA\x07n\x02\x02\u02DA\u02DB\x07q\x02\x02\u02DB\u02DC\x07" +
        "d\x02\x02\u02DC\u02DD\x07c\x02\x02\u02DD\u02DE\x07n\x02\x02\u02DE\u02DF" +
        "\x07a\x02\x02\u02DF\u02E0\x07j\x02\x02\u02E0\u02E1\x07g\x02\x02\u02E1" +
        "\u02E2\x07w\x02\x02\u02E2\u02E3\x07t\x02\x02\u02E3\u02E4\x07k\x02\x02" +
        "\u02E4\u02E5\x07u\x02\x02\u02E5\u02E6\x07v\x02\x02\u02E6\u02E7\x07k\x02" +
        "\x02\u02E7\u02E8\x07e\x02\x02\u02E8\x96\x03\x02\x02\x02\u02E9\u02EA\x07" +
        "B\x02\x02\u02EA\u02EB\x07h\x02\x02\u02EB\u02EC\x07k\x02\x02\u02EC\u02ED" +
        "\x07n\x02\x02\u02ED\u02EE\x07g\x02\x02\u02EE\x98\x03\x02\x02\x02\u02EF" +
        "\u02F0\x07B\x02\x02\u02F0\u02F1\x07g\x02\x02\u02F1\u02F2\x07n\x02\x02" +
        "\u02F2\u02F3\x07g\x02\x02\u02F3\u02F4\x07o\x02\x02\u02F4\u02F5\x07g\x02" +
        "\x02\u02F5\u02F6\x07p\x02\x02\u02F6\u02F7\x07v\x02\x02\u02F7\u02F8\x07" +
        "u\x02\x02\u02F8\x9A\x03\x02\x02\x02\v\x02\xA3\xAA\xB1\xB3\xBB\xC0\xFE" +
        "\u0104\x03\b\x02\x02";
    static _serializedATN = Utils.join([
        ASPCore2Lexer._serializedATNSegment0,
        ASPCore2Lexer._serializedATNSegment1,
    ], "");
    static __ATN;
    static get _ATN() {
        if (!ASPCore2Lexer.__ATN) {
            ASPCore2Lexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ASPCore2Lexer._serializedATN));
        }
        return ASPCore2Lexer.__ATN;
    }
}
exports.ASPCore2Lexer = ASPCore2Lexer;
//# sourceMappingURL=ASPCore2Lexer.js.map