"use strict";
// Generated from TEST.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.AssertListContext = exports.ReferenceContext = exports.ReferenceListContext = exports.InputFileContext = exports.InputFilesListContext = exports.ProgramFileContext = exports.ProgramFilesListContext = exports.RuleReferenceContext = exports.RuleReferenceListContext = exports.ProgramDefinitionContext = exports.TestDefinitionContext = exports.BlockDefinitionContext = exports.RuleDefinitionContext = exports.NameDefinitionContext = exports.AnnotationExpressionContext = exports.AnnotationListContext = exports.TESTParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class TESTParser extends Parser_1.Parser {
    static WS = 1;
    static STRINGS = 2;
    static NUMBER = 3;
    static DOT = 4;
    static DDOT = 5;
    static COMMA = 6;
    static HEAD_SEPARATOR = 7;
    static SEMICOLON = 8;
    static COLON = 9;
    static AT = 10;
    static CONS = 11;
    static WCONS = 12;
    static PLUS = 13;
    static DASH = 14;
    static TIMES = 15;
    static SLASH = 16;
    static BACK_SLASH = 17;
    static PARAM_OPEN = 18;
    static PARAM_CLOSE = 19;
    static SQUARE_OPEN = 20;
    static SQUARE_CLOSED = 21;
    static CURLY_OPEN = 22;
    static CURLY_CLOSE = 23;
    static QUERY_MARK = 24;
    static ANON_VAR = 25;
    static EQUAL = 26;
    static UNEQUAL = 27;
    static LESS = 28;
    static GREATER = 29;
    static LESS_OR_EQ = 30;
    static GREATER_OR_EQ = 31;
    static AMPERSAND = 32;
    static EXISTS = 33;
    static START_TEST = 34;
    static END_TEST = 35;
    static NAME = 36;
    static NAME_1 = 37;
    static RULE_AFTER_AT = 38;
    static LABEL = 39;
    static RULES = 40;
    static BLOCK = 41;
    static TEST = 42;
    static CONSTRAINT = 43;
    static SCOPE = 44;
    static PROGRAM_FILES = 45;
    static INPUT = 46;
    static INPUT_FILES = 47;
    static ASSERT = 48;
    static ATOMS = 49;
    static COST = 50;
    static LEVEL = 51;
    static PROGRAM = 52;
    static ADD_FILES = 53;
    static NUM_STR = 54;
    static ASSERT_NAS = 55;
    static ASSERT_TIA = 56;
    static ASSERT_TIAL = 57;
    static ASSERT_TIAM = 58;
    static ASSERT_TIE = 59;
    static ASSERT_FIA = 60;
    static ASSERT_FIAL = 61;
    static ASSERT_FIAM = 62;
    static ASSERT_FIE = 63;
    static ASSERT_C = 64;
    static ASSERT_CIE = 65;
    static ASSERT_CIAL = 66;
    static ASSERT_CIAM = 67;
    static ASSERT_BMC = 68;
    static RULE_annotationList = 0;
    static RULE_annotationExpression = 1;
    static RULE_nameDefinition = 2;
    static RULE_ruleDefinition = 3;
    static RULE_blockDefinition = 4;
    static RULE_testDefinition = 5;
    static RULE_programDefinition = 6;
    static RULE_ruleReferenceList = 7;
    static RULE_ruleReference = 8;
    static RULE_programFilesList = 9;
    static RULE_programFile = 10;
    static RULE_inputFilesList = 11;
    static RULE_inputFile = 12;
    static RULE_referenceList = 13;
    static RULE_reference = 14;
    static RULE_assertList = 15;
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "annotationList", "annotationExpression", "nameDefinition", "ruleDefinition",
        "blockDefinition", "testDefinition", "programDefinition", "ruleReferenceList",
        "ruleReference", "programFilesList", "programFile", "inputFilesList",
        "inputFile", "referenceList", "reference", "assertList",
    ];
    static _LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, "'.'", "'..'", "','", "'|'",
        "';'", "':'", "'@'", "':-'", "':~'", "'+'", "'-'", "'*'", "'/'", "'\\'",
        "'('", "')'", "'['", "']'", "'{'", "'}'", "'?'", "'_'", undefined, undefined,
        "'<'", "'>'", "'<='", "'>='", "'&'", "'\\'", "'%**'", "'**%'", "'name'",
        "'\"name\"'", "'rule'", "'labels'", "'rules'", "'block'", "'test'", "'constraint'",
        "'scope'", "'file'", "'input'", "'inputFiles'", "'\"assert\"'", "'atoms'",
        "'cost'", "'level'", "'program'", "'additionalFiles'", "'number'", "'noAnswerSet'",
        "'trueInAll'", "'trueInAtLeast'", "'trueInAtMost'", "'trueInExactly'",
        "'falseInAll'", "'falseInAtLeast'", "'falseInAtMost'", "'falseInExactly'",
        "'constraintForAll'", "'constraintInExactly'", "'constraintInAtLeast'",
        "'constraintInAtMost'", "'bestModelCost'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, "WS", "STRINGS", "NUMBER", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR",
        "SEMICOLON", "COLON", "AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES",
        "SLASH", "BACK_SLASH", "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED",
        "CURLY_OPEN", "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL",
        "LESS", "GREATER", "LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS",
        "START_TEST", "END_TEST", "NAME", "NAME_1", "RULE_AFTER_AT", "LABEL",
        "RULES", "BLOCK", "TEST", "CONSTRAINT", "SCOPE", "PROGRAM_FILES", "INPUT",
        "INPUT_FILES", "ASSERT", "ATOMS", "COST", "LEVEL", "PROGRAM", "ADD_FILES",
        "NUM_STR", "ASSERT_NAS", "ASSERT_TIA", "ASSERT_TIAL", "ASSERT_TIAM", "ASSERT_TIE",
        "ASSERT_FIA", "ASSERT_FIAL", "ASSERT_FIAM", "ASSERT_FIE", "ASSERT_C",
        "ASSERT_CIE", "ASSERT_CIAL", "ASSERT_CIAM", "ASSERT_BMC",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TESTParser._LITERAL_NAMES, TESTParser._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return TESTParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "TEST.g4"; }
    // @Override
    get ruleNames() { return TESTParser.ruleNames; }
    // @Override
    get serializedATN() { return TESTParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TESTParser._ATN, this);
    }
    // @RuleVersion(0)
    annotationList() {
        let _localctx = new AnnotationListContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TESTParser.RULE_annotationList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.annotationExpression();
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.AT || _la === TESTParser.START_TEST) {
                    {
                        this.state = 33;
                        this.annotationList();
                    }
                }
                this.state = 36;
                this.match(TESTParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationExpression() {
        let _localctx = new AnnotationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TESTParser.RULE_annotationExpression);
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 38;
                        this.ruleDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 39;
                        this.blockDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 40;
                        this.testDefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 41;
                        this.programDefinition();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 42;
                        this.nameDefinition();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nameDefinition() {
        let _localctx = new NameDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TESTParser.RULE_nameDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.match(TESTParser.START_TEST);
                this.state = 46;
                this.match(TESTParser.STRINGS);
                this.state = 47;
                this.match(TESTParser.END_TEST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ruleDefinition() {
        let _localctx = new RuleDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TESTParser.RULE_ruleDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(TESTParser.START_TEST);
                this.state = 50;
                this.match(TESTParser.AT);
                this.state = 51;
                this.match(TESTParser.RULE_AFTER_AT);
                this.state = 52;
                this.match(TESTParser.PARAM_OPEN);
                this.state = 53;
                this.match(TESTParser.NAME);
                this.state = 54;
                this.match(TESTParser.EQUAL);
                this.state = 55;
                this.match(TESTParser.STRINGS);
                this.state = 56;
                this.match(TESTParser.COMMA);
                this.state = 57;
                this.match(TESTParser.BLOCK);
                this.state = 58;
                this.match(TESTParser.EQUAL);
                this.state = 59;
                this.match(TESTParser.STRINGS);
                this.state = 60;
                this.match(TESTParser.PARAM_CLOSE);
                this.state = 61;
                this.match(TESTParser.END_TEST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockDefinition() {
        let _localctx = new BlockDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TESTParser.RULE_blockDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 63;
                this.match(TESTParser.START_TEST);
                this.state = 64;
                this.match(TESTParser.AT);
                this.state = 65;
                this.match(TESTParser.BLOCK);
                this.state = 66;
                this.match(TESTParser.PARAM_OPEN);
                this.state = 67;
                this.match(TESTParser.NAME);
                this.state = 68;
                this.match(TESTParser.EQUAL);
                this.state = 69;
                this.match(TESTParser.STRINGS);
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 70;
                        this.match(TESTParser.COMMA);
                        this.state = 71;
                        this.match(TESTParser.RULES);
                        this.state = 72;
                        this.match(TESTParser.EQUAL);
                        this.state = 73;
                        this.match(TESTParser.CURLY_OPEN);
                        this.state = 74;
                        this.ruleReferenceList();
                        this.state = 75;
                        this.match(TESTParser.CURLY_CLOSE);
                    }
                }
                this.state = 79;
                this.match(TESTParser.PARAM_CLOSE);
                this.state = 80;
                this.match(TESTParser.END_TEST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    testDefinition() {
        let _localctx = new TestDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TESTParser.RULE_testDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(TESTParser.START_TEST);
                this.state = 83;
                this.match(TESTParser.AT);
                this.state = 84;
                this.match(TESTParser.TEST);
                this.state = 85;
                this.match(TESTParser.CURLY_OPEN);
                this.state = 86;
                this.match(TESTParser.STRINGS);
                this.state = 87;
                this.match(TESTParser.COLON);
                this.state = 88;
                this.match(TESTParser.STRINGS);
                this.state = 89;
                this.match(TESTParser.COMMA);
                this.state = 90;
                this.match(TESTParser.STRINGS);
                this.state = 91;
                this.match(TESTParser.COLON);
                this.state = 92;
                this.match(TESTParser.SQUARE_OPEN);
                this.state = 93;
                this.referenceList();
                this.state = 94;
                this.match(TESTParser.SQUARE_CLOSED);
                this.state = 95;
                this.match(TESTParser.COMMA);
                this.state = 96;
                this.match(TESTParser.STRINGS);
                this.state = 97;
                this.match(TESTParser.COLON);
                this.state = 98;
                this.match(TESTParser.STRINGS);
                this.state = 99;
                this.match(TESTParser.COMMA);
                this.state = 100;
                this.match(TESTParser.STRINGS);
                this.state = 101;
                this.match(TESTParser.COLON);
                this.state = 102;
                this.match(TESTParser.SQUARE_OPEN);
                this.state = 103;
                this.assertList();
                this.state = 104;
                this.match(TESTParser.SQUARE_CLOSED);
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 105;
                        this.match(TESTParser.COMMA);
                        this.state = 106;
                        this.match(TESTParser.STRINGS);
                        this.state = 107;
                        this.match(TESTParser.COLON);
                        this.state = 108;
                        this.match(TESTParser.STRINGS);
                    }
                }
                this.state = 111;
                this.match(TESTParser.CURLY_CLOSE);
                this.state = 112;
                this.match(TESTParser.END_TEST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    programDefinition() {
        let _localctx = new ProgramDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TESTParser.RULE_programDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 114;
                this.match(TESTParser.AT);
                this.state = 115;
                this.match(TESTParser.PROGRAM);
                this.state = 116;
                this.match(TESTParser.PARAM_OPEN);
                this.state = 117;
                this.match(TESTParser.NAME);
                this.state = 118;
                this.match(TESTParser.EQUAL);
                this.state = 119;
                this.match(TESTParser.STRINGS);
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 120;
                        this.match(TESTParser.COMMA);
                        this.state = 121;
                        this.match(TESTParser.ADD_FILES);
                        this.state = 122;
                        this.match(TESTParser.EQUAL);
                        this.state = 123;
                        this.match(TESTParser.STRINGS);
                    }
                }
                this.state = 126;
                this.match(TESTParser.PARAM_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ruleReferenceList() {
        let _localctx = new RuleReferenceListContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TESTParser.RULE_ruleReferenceList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.ruleReference();
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 129;
                        this.match(TESTParser.COMMA);
                        this.state = 130;
                        this.ruleReferenceList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ruleReference() {
        let _localctx = new RuleReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TESTParser.RULE_ruleReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(TESTParser.STRINGS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    programFilesList() {
        let _localctx = new ProgramFilesListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TESTParser.RULE_programFilesList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.programFile();
                this.state = 138;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 136;
                            this.match(TESTParser.COMMA);
                            this.state = 137;
                            this.programFilesList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    programFile() {
        let _localctx = new ProgramFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TESTParser.RULE_programFile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(TESTParser.STRINGS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inputFilesList() {
        let _localctx = new InputFilesListContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TESTParser.RULE_inputFilesList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this.inputFile();
                this.state = 145;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 143;
                            this.match(TESTParser.COMMA);
                            this.state = 144;
                            this.inputFilesList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inputFile() {
        let _localctx = new InputFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TESTParser.RULE_inputFile);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(TESTParser.STRINGS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    referenceList() {
        let _localctx = new ReferenceListContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TESTParser.RULE_referenceList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.reference();
                this.state = 152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 150;
                        this.match(TESTParser.COMMA);
                        this.state = 151;
                        this.referenceList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reference() {
        let _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TESTParser.RULE_reference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(TESTParser.STRINGS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assertList() {
        let _localctx = new AssertListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TESTParser.RULE_assertList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.match(TESTParser.STRINGS);
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TESTParser.COMMA) {
                    {
                        this.state = 157;
                        this.match(TESTParser.COMMA);
                        this.state = 158;
                        this.assertList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static _serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\xA4\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x05" +
        "\x02%\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
        "\x03.\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06P\n\x06\x03" +
        "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x05\x07p\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x7F\n\b\x03\b" +
        "\x03\b\x03\t\x03\t\x03\t\x05\t\x86\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x05" +
        "\v\x8D\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\x94\n\r\x03\x0E\x03\x0E" +
        "\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x9B\n\x0F\x03\x10\x03\x10\x03\x11\x03" +
        "\x11\x03\x11\x05\x11\xA2\n\x11\x03\x11\x02\x02\x02\x12\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x02\x02\xA0\x02\"\x03\x02\x02\x02" +
        "\x04-\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b3\x03\x02\x02\x02\nA\x03\x02" +
        "\x02\x02\fT\x03\x02\x02\x02\x0Et\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02" +
        "\x12\x87\x03\x02\x02\x02\x14\x89\x03\x02\x02\x02\x16\x8E\x03\x02\x02\x02" +
        "\x18\x90\x03\x02\x02\x02\x1A\x95\x03\x02\x02\x02\x1C\x97\x03\x02\x02\x02" +
        "\x1E\x9C\x03\x02\x02\x02 \x9E\x03\x02\x02\x02\"$\x05\x04\x03\x02#%\x05" +
        "\x02\x02\x02$#\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x03\x02\x02\x02&\'" +
        "\x07\x02\x02\x03\'\x03\x03\x02\x02\x02(.\x05\b\x05\x02).\x05\n\x06\x02" +
        "*.\x05\f\x07\x02+.\x05\x0E\b\x02,.\x05\x06\x04\x02-(\x03\x02\x02\x02-" +
        ")\x03\x02\x02\x02-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02" +
        ".\x05\x03\x02\x02\x02/0\x07$\x02\x0201\x07\x04\x02\x0212\x07%\x02\x02" +
        "2\x07\x03\x02\x02\x0234\x07$\x02\x0245\x07\f\x02\x0256\x07(\x02\x0267" +
        "\x07\x14\x02\x0278\x07&\x02\x0289\x07\x1C\x02\x029:\x07\x04\x02\x02:;" +
        "\x07\b\x02\x02;<\x07+\x02\x02<=\x07\x1C\x02\x02=>\x07\x04\x02\x02>?\x07" +
        "\x15\x02\x02?@\x07%\x02\x02@\t\x03\x02\x02\x02AB\x07$\x02\x02BC\x07\f" +
        "\x02\x02CD\x07+\x02\x02DE\x07\x14\x02\x02EF\x07&\x02\x02FG\x07\x1C\x02" +
        "\x02GO\x07\x04\x02\x02HI\x07\b\x02\x02IJ\x07*\x02\x02JK\x07\x1C\x02\x02" +
        "KL\x07\x18\x02\x02LM\x05\x10\t\x02MN\x07\x19\x02\x02NP\x03\x02\x02\x02" +
        "OH\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x07\x15\x02\x02" +
        "RS\x07%\x02\x02S\v\x03\x02\x02\x02TU\x07$\x02\x02UV\x07\f\x02\x02VW\x07" +
        ",\x02\x02WX\x07\x18\x02\x02XY\x07\x04\x02\x02YZ\x07\v\x02\x02Z[\x07\x04" +
        "\x02\x02[\\\x07\b\x02\x02\\]\x07\x04\x02\x02]^\x07\v\x02\x02^_\x07\x16" +
        "\x02\x02_`\x05\x1C\x0F\x02`a\x07\x17\x02\x02ab\x07\b\x02\x02bc\x07\x04" +
        "\x02\x02cd\x07\v\x02\x02de\x07\x04\x02\x02ef\x07\b\x02\x02fg\x07\x04\x02" +
        "\x02gh\x07\v\x02\x02hi\x07\x16\x02\x02ij\x05 \x11\x02jo\x07\x17\x02\x02" +
        "kl\x07\b\x02\x02lm\x07\x04\x02\x02mn\x07\v\x02\x02np\x07\x04\x02\x02o" +
        "k\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x07\x19\x02\x02" +
        "rs\x07%\x02\x02s\r\x03\x02\x02\x02tu\x07\f\x02\x02uv\x076\x02\x02vw\x07" +
        "\x14\x02\x02wx\x07&\x02\x02xy\x07\x1C\x02\x02y~\x07\x04\x02\x02z{\x07" +
        "\b\x02\x02{|\x077\x02\x02|}\x07\x1C\x02\x02}\x7F\x07\x04\x02\x02~z\x03" +
        "\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x07" +
        "\x15\x02\x02\x81\x0F\x03\x02\x02\x02\x82\x85\x05\x12\n\x02\x83\x84\x07" +
        "\b\x02\x02\x84\x86\x05\x10\t\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02" +
        "\x02\x02\x86\x11\x03\x02\x02\x02\x87\x88\x07\x04\x02\x02\x88\x13\x03\x02" +
        "\x02\x02\x89\x8C\x05\x16\f\x02\x8A\x8B\x07\b\x02\x02\x8B\x8D\x05\x14\v" +
        "\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x15\x03\x02\x02" +
        "\x02\x8E\x8F\x07\x04\x02\x02\x8F\x17\x03\x02\x02\x02\x90\x93\x05\x1A\x0E" +
        "\x02\x91\x92\x07\b\x02\x02\x92\x94\x05\x18\r\x02\x93\x91\x03\x02\x02\x02" +
        "\x93\x94\x03\x02\x02\x02\x94\x19\x03\x02\x02\x02\x95\x96\x07\x04\x02\x02" +
        "\x96\x1B\x03\x02\x02\x02\x97\x9A\x05\x1E\x10\x02\x98\x99\x07\b\x02\x02" +
        "\x99\x9B\x05\x1C\x0F\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02" +
        "\x9B\x1D\x03\x02\x02\x02\x9C\x9D\x07\x04\x02\x02\x9D\x1F\x03\x02\x02\x02" +
        "\x9E\xA1\x07\x04\x02\x02\x9F\xA0\x07\b\x02\x02\xA0\xA2\x05 \x11\x02\xA1" +
        "\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2!\x03\x02\x02\x02\f$-" +
        "Oo~\x85\x8C\x93\x9A\xA1";
    static __ATN;
    static get _ATN() {
        if (!TESTParser.__ATN) {
            TESTParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TESTParser._serializedATN));
        }
        return TESTParser.__ATN;
    }
}
exports.TESTParser = TESTParser;
class AnnotationListContext extends ParserRuleContext_1.ParserRuleContext {
    annotationExpression() {
        return this.getRuleContext(0, AnnotationExpressionContext);
    }
    EOF() { return this.getToken(TESTParser.EOF, 0); }
    annotationList() {
        return this.tryGetRuleContext(0, AnnotationListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_annotationList; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationList) {
            listener.enterAnnotationList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationList) {
            listener.exitAnnotationList(this);
        }
    }
}
exports.AnnotationListContext = AnnotationListContext;
class AnnotationExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    ruleDefinition() {
        return this.tryGetRuleContext(0, RuleDefinitionContext);
    }
    blockDefinition() {
        return this.tryGetRuleContext(0, BlockDefinitionContext);
    }
    testDefinition() {
        return this.tryGetRuleContext(0, TestDefinitionContext);
    }
    programDefinition() {
        return this.tryGetRuleContext(0, ProgramDefinitionContext);
    }
    nameDefinition() {
        return this.tryGetRuleContext(0, NameDefinitionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_annotationExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationExpression) {
            listener.enterAnnotationExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationExpression) {
            listener.exitAnnotationExpression(this);
        }
    }
}
exports.AnnotationExpressionContext = AnnotationExpressionContext;
class NameDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    START_TEST() { return this.getToken(TESTParser.START_TEST, 0); }
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    END_TEST() { return this.getToken(TESTParser.END_TEST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_nameDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterNameDefinition) {
            listener.enterNameDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNameDefinition) {
            listener.exitNameDefinition(this);
        }
    }
}
exports.NameDefinitionContext = NameDefinitionContext;
class RuleDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    START_TEST() { return this.getToken(TESTParser.START_TEST, 0); }
    AT() { return this.getToken(TESTParser.AT, 0); }
    RULE_AFTER_AT() { return this.getToken(TESTParser.RULE_AFTER_AT, 0); }
    PARAM_OPEN() { return this.getToken(TESTParser.PARAM_OPEN, 0); }
    NAME() { return this.getToken(TESTParser.NAME, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.EQUAL);
        }
        else {
            return this.getToken(TESTParser.EQUAL, i);
        }
    }
    STRINGS(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.STRINGS);
        }
        else {
            return this.getToken(TESTParser.STRINGS, i);
        }
    }
    COMMA() { return this.getToken(TESTParser.COMMA, 0); }
    BLOCK() { return this.getToken(TESTParser.BLOCK, 0); }
    PARAM_CLOSE() { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
    END_TEST() { return this.getToken(TESTParser.END_TEST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_ruleDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterRuleDefinition) {
            listener.enterRuleDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRuleDefinition) {
            listener.exitRuleDefinition(this);
        }
    }
}
exports.RuleDefinitionContext = RuleDefinitionContext;
class BlockDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    START_TEST() { return this.getToken(TESTParser.START_TEST, 0); }
    AT() { return this.getToken(TESTParser.AT, 0); }
    BLOCK() { return this.getToken(TESTParser.BLOCK, 0); }
    PARAM_OPEN() { return this.getToken(TESTParser.PARAM_OPEN, 0); }
    NAME() { return this.getToken(TESTParser.NAME, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.EQUAL);
        }
        else {
            return this.getToken(TESTParser.EQUAL, i);
        }
    }
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    PARAM_CLOSE() { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
    END_TEST() { return this.getToken(TESTParser.END_TEST, 0); }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    RULES() { return this.tryGetToken(TESTParser.RULES, 0); }
    CURLY_OPEN() { return this.tryGetToken(TESTParser.CURLY_OPEN, 0); }
    ruleReferenceList() {
        return this.tryGetRuleContext(0, RuleReferenceListContext);
    }
    CURLY_CLOSE() { return this.tryGetToken(TESTParser.CURLY_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_blockDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockDefinition) {
            listener.enterBlockDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockDefinition) {
            listener.exitBlockDefinition(this);
        }
    }
}
exports.BlockDefinitionContext = BlockDefinitionContext;
class TestDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    START_TEST() { return this.getToken(TESTParser.START_TEST, 0); }
    AT() { return this.getToken(TESTParser.AT, 0); }
    TEST() { return this.getToken(TESTParser.TEST, 0); }
    CURLY_OPEN() { return this.getToken(TESTParser.CURLY_OPEN, 0); }
    STRINGS(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.STRINGS);
        }
        else {
            return this.getToken(TESTParser.STRINGS, i);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.COLON);
        }
        else {
            return this.getToken(TESTParser.COLON, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.COMMA);
        }
        else {
            return this.getToken(TESTParser.COMMA, i);
        }
    }
    SQUARE_OPEN(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.SQUARE_OPEN);
        }
        else {
            return this.getToken(TESTParser.SQUARE_OPEN, i);
        }
    }
    referenceList() {
        return this.getRuleContext(0, ReferenceListContext);
    }
    SQUARE_CLOSED(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.SQUARE_CLOSED);
        }
        else {
            return this.getToken(TESTParser.SQUARE_CLOSED, i);
        }
    }
    assertList() {
        return this.getRuleContext(0, AssertListContext);
    }
    CURLY_CLOSE() { return this.getToken(TESTParser.CURLY_CLOSE, 0); }
    END_TEST() { return this.getToken(TESTParser.END_TEST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_testDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterTestDefinition) {
            listener.enterTestDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTestDefinition) {
            listener.exitTestDefinition(this);
        }
    }
}
exports.TestDefinitionContext = TestDefinitionContext;
class ProgramDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.getToken(TESTParser.AT, 0); }
    PROGRAM() { return this.getToken(TESTParser.PROGRAM, 0); }
    PARAM_OPEN() { return this.getToken(TESTParser.PARAM_OPEN, 0); }
    NAME() { return this.getToken(TESTParser.NAME, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.EQUAL);
        }
        else {
            return this.getToken(TESTParser.EQUAL, i);
        }
    }
    STRINGS(i) {
        if (i === undefined) {
            return this.getTokens(TESTParser.STRINGS);
        }
        else {
            return this.getToken(TESTParser.STRINGS, i);
        }
    }
    PARAM_CLOSE() { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    ADD_FILES() { return this.tryGetToken(TESTParser.ADD_FILES, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_programDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgramDefinition) {
            listener.enterProgramDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgramDefinition) {
            listener.exitProgramDefinition(this);
        }
    }
}
exports.ProgramDefinitionContext = ProgramDefinitionContext;
class RuleReferenceListContext extends ParserRuleContext_1.ParserRuleContext {
    ruleReference() {
        return this.getRuleContext(0, RuleReferenceContext);
    }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    ruleReferenceList() {
        return this.tryGetRuleContext(0, RuleReferenceListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_ruleReferenceList; }
    // @Override
    enterRule(listener) {
        if (listener.enterRuleReferenceList) {
            listener.enterRuleReferenceList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRuleReferenceList) {
            listener.exitRuleReferenceList(this);
        }
    }
}
exports.RuleReferenceListContext = RuleReferenceListContext;
class RuleReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_ruleReference; }
    // @Override
    enterRule(listener) {
        if (listener.enterRuleReference) {
            listener.enterRuleReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRuleReference) {
            listener.exitRuleReference(this);
        }
    }
}
exports.RuleReferenceContext = RuleReferenceContext;
class ProgramFilesListContext extends ParserRuleContext_1.ParserRuleContext {
    programFile() {
        return this.getRuleContext(0, ProgramFileContext);
    }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    programFilesList() {
        return this.tryGetRuleContext(0, ProgramFilesListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_programFilesList; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgramFilesList) {
            listener.enterProgramFilesList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgramFilesList) {
            listener.exitProgramFilesList(this);
        }
    }
}
exports.ProgramFilesListContext = ProgramFilesListContext;
class ProgramFileContext extends ParserRuleContext_1.ParserRuleContext {
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_programFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgramFile) {
            listener.enterProgramFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgramFile) {
            listener.exitProgramFile(this);
        }
    }
}
exports.ProgramFileContext = ProgramFileContext;
class InputFilesListContext extends ParserRuleContext_1.ParserRuleContext {
    inputFile() {
        return this.getRuleContext(0, InputFileContext);
    }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    inputFilesList() {
        return this.tryGetRuleContext(0, InputFilesListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_inputFilesList; }
    // @Override
    enterRule(listener) {
        if (listener.enterInputFilesList) {
            listener.enterInputFilesList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInputFilesList) {
            listener.exitInputFilesList(this);
        }
    }
}
exports.InputFilesListContext = InputFilesListContext;
class InputFileContext extends ParserRuleContext_1.ParserRuleContext {
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_inputFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterInputFile) {
            listener.enterInputFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInputFile) {
            listener.exitInputFile(this);
        }
    }
}
exports.InputFileContext = InputFileContext;
class ReferenceListContext extends ParserRuleContext_1.ParserRuleContext {
    reference() {
        return this.getRuleContext(0, ReferenceContext);
    }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    referenceList() {
        return this.tryGetRuleContext(0, ReferenceListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_referenceList; }
    // @Override
    enterRule(listener) {
        if (listener.enterReferenceList) {
            listener.enterReferenceList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReferenceList) {
            listener.exitReferenceList(this);
        }
    }
}
exports.ReferenceListContext = ReferenceListContext;
class ReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_reference; }
    // @Override
    enterRule(listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    }
}
exports.ReferenceContext = ReferenceContext;
class AssertListContext extends ParserRuleContext_1.ParserRuleContext {
    STRINGS() { return this.getToken(TESTParser.STRINGS, 0); }
    COMMA() { return this.tryGetToken(TESTParser.COMMA, 0); }
    assertList() {
        return this.tryGetRuleContext(0, AssertListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TESTParser.RULE_assertList; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssertList) {
            listener.enterAssertList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssertList) {
            listener.exitAssertList(this);
        }
    }
}
exports.AssertListContext = AssertListContext;
//# sourceMappingURL=TESTParser.js.map