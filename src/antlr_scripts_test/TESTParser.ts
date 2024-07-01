// Generated from TEST.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TESTListener } from "./TESTListener";

export class TESTParser extends Parser {
	public static readonly WS = 1;
	public static readonly STRINGS = 2;
	public static readonly NUMBER = 3;
	public static readonly DOT = 4;
	public static readonly DDOT = 5;
	public static readonly COMMA = 6;
	public static readonly HEAD_SEPARATOR = 7;
	public static readonly SEMICOLON = 8;
	public static readonly COLON = 9;
	public static readonly AT = 10;
	public static readonly CONS = 11;
	public static readonly WCONS = 12;
	public static readonly PLUS = 13;
	public static readonly DASH = 14;
	public static readonly TIMES = 15;
	public static readonly SLASH = 16;
	public static readonly BACK_SLASH = 17;
	public static readonly PARAM_OPEN = 18;
	public static readonly PARAM_CLOSE = 19;
	public static readonly SQUARE_OPEN = 20;
	public static readonly SQUARE_CLOSED = 21;
	public static readonly CURLY_OPEN = 22;
	public static readonly CURLY_CLOSE = 23;
	public static readonly QUERY_MARK = 24;
	public static readonly ANON_VAR = 25;
	public static readonly EQUAL = 26;
	public static readonly UNEQUAL = 27;
	public static readonly LESS = 28;
	public static readonly GREATER = 29;
	public static readonly LESS_OR_EQ = 30;
	public static readonly GREATER_OR_EQ = 31;
	public static readonly AMPERSAND = 32;
	public static readonly EXISTS = 33;
	public static readonly START_TEST = 34;
	public static readonly END_TEST = 35;
	public static readonly NAME = 36;
	public static readonly NAME_1 = 37;
	public static readonly RULE_AFTER_AT = 38;
	public static readonly LABEL = 39;
	public static readonly RULES = 40;
	public static readonly BLOCK = 41;
	public static readonly TEST = 42;
	public static readonly CONSTRAINT = 43;
	public static readonly SCOPE = 44;
	public static readonly PROGRAM_FILES = 45;
	public static readonly INPUT = 46;
	public static readonly INPUT_FILES = 47;
	public static readonly ASSERT = 48;
	public static readonly ATOMS = 49;
	public static readonly COST = 50;
	public static readonly LEVEL = 51;
	public static readonly PROGRAM = 52;
	public static readonly ADD_FILES = 53;
	public static readonly NUM_STR = 54;
	public static readonly ASSERT_NAS = 55;
	public static readonly ASSERT_TIA = 56;
	public static readonly ASSERT_TIAL = 57;
	public static readonly ASSERT_TIAM = 58;
	public static readonly ASSERT_TIE = 59;
	public static readonly ASSERT_FIA = 60;
	public static readonly ASSERT_FIAL = 61;
	public static readonly ASSERT_FIAM = 62;
	public static readonly ASSERT_FIE = 63;
	public static readonly ASSERT_C = 64;
	public static readonly ASSERT_CIE = 65;
	public static readonly ASSERT_CIAL = 66;
	public static readonly ASSERT_CIAM = 67;
	public static readonly ASSERT_BMC = 68;
	public static readonly RULE_annotationList = 0;
	public static readonly RULE_annotationExpression = 1;
	public static readonly RULE_nameDefinition = 2;
	public static readonly RULE_ruleDefinition = 3;
	public static readonly RULE_blockDefinition = 4;
	public static readonly RULE_testDefinition = 5;
	public static readonly RULE_programDefinition = 6;
	public static readonly RULE_ruleReferenceList = 7;
	public static readonly RULE_ruleReference = 8;
	public static readonly RULE_programFilesList = 9;
	public static readonly RULE_programFile = 10;
	public static readonly RULE_inputFilesList = 11;
	public static readonly RULE_inputFile = 12;
	public static readonly RULE_referenceList = 13;
	public static readonly RULE_reference = 14;
	public static readonly RULE_assertList = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"annotationList", "annotationExpression", "nameDefinition", "ruleDefinition", 
		"blockDefinition", "testDefinition", "programDefinition", "ruleReferenceList", 
		"ruleReference", "programFilesList", "programFile", "inputFilesList", 
		"inputFile", "referenceList", "reference", "assertList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
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
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TESTParser._LITERAL_NAMES, TESTParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TESTParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TEST.g4"; }

	// @Override
	public get ruleNames(): string[] { return TESTParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TESTParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TESTParser._ATN, this);
	}
	// @RuleVersion(0)
	public annotationList(): AnnotationListContext {
		let _localctx: AnnotationListContext = new AnnotationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TESTParser.RULE_annotationList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationExpression(): AnnotationExpressionContext {
		let _localctx: AnnotationExpressionContext = new AnnotationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TESTParser.RULE_annotationExpression);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameDefinition(): NameDefinitionContext {
		let _localctx: NameDefinitionContext = new NameDefinitionContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleDefinition(): RuleDefinitionContext {
		let _localctx: RuleDefinitionContext = new RuleDefinitionContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockDefinition(): BlockDefinitionContext {
		let _localctx: BlockDefinitionContext = new BlockDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TESTParser.RULE_blockDefinition);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testDefinition(): TestDefinitionContext {
		let _localctx: TestDefinitionContext = new TestDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TESTParser.RULE_testDefinition);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programDefinition(): ProgramDefinitionContext {
		let _localctx: ProgramDefinitionContext = new ProgramDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TESTParser.RULE_programDefinition);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleReferenceList(): RuleReferenceListContext {
		let _localctx: RuleReferenceListContext = new RuleReferenceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TESTParser.RULE_ruleReferenceList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleReference(): RuleReferenceContext {
		let _localctx: RuleReferenceContext = new RuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TESTParser.RULE_ruleReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(TESTParser.STRINGS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programFilesList(): ProgramFilesListContext {
		let _localctx: ProgramFilesListContext = new ProgramFilesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TESTParser.RULE_programFilesList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.programFile();
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programFile(): ProgramFileContext {
		let _localctx: ProgramFileContext = new ProgramFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TESTParser.RULE_programFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(TESTParser.STRINGS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputFilesList(): InputFilesListContext {
		let _localctx: InputFilesListContext = new InputFilesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TESTParser.RULE_inputFilesList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.inputFile();
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputFile(): InputFileContext {
		let _localctx: InputFileContext = new InputFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TESTParser.RULE_inputFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(TESTParser.STRINGS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceList(): ReferenceListContext {
		let _localctx: ReferenceListContext = new ReferenceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TESTParser.RULE_referenceList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TESTParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(TESTParser.STRINGS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertList(): AssertListContext {
		let _localctx: AssertListContext = new AssertListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TESTParser.RULE_assertList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\xA4\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TESTParser.__ATN) {
			TESTParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TESTParser._serializedATN));
		}

		return TESTParser.__ATN;
	}

}

export class AnnotationListContext extends ParserRuleContext {
	public annotationExpression(): AnnotationExpressionContext {
		return this.getRuleContext(0, AnnotationExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(TESTParser.EOF, 0); }
	public annotationList(): AnnotationListContext | undefined {
		return this.tryGetRuleContext(0, AnnotationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_annotationList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterAnnotationList) {
			listener.enterAnnotationList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitAnnotationList) {
			listener.exitAnnotationList(this);
		}
	}
}


export class AnnotationExpressionContext extends ParserRuleContext {
	public ruleDefinition(): RuleDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RuleDefinitionContext);
	}
	public blockDefinition(): BlockDefinitionContext | undefined {
		return this.tryGetRuleContext(0, BlockDefinitionContext);
	}
	public testDefinition(): TestDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TestDefinitionContext);
	}
	public programDefinition(): ProgramDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ProgramDefinitionContext);
	}
	public nameDefinition(): NameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NameDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_annotationExpression; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterAnnotationExpression) {
			listener.enterAnnotationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitAnnotationExpression) {
			listener.exitAnnotationExpression(this);
		}
	}
}


export class NameDefinitionContext extends ParserRuleContext {
	public START_TEST(): TerminalNode { return this.getToken(TESTParser.START_TEST, 0); }
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	public END_TEST(): TerminalNode { return this.getToken(TESTParser.END_TEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_nameDefinition; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterNameDefinition) {
			listener.enterNameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitNameDefinition) {
			listener.exitNameDefinition(this);
		}
	}
}


export class RuleDefinitionContext extends ParserRuleContext {
	public START_TEST(): TerminalNode { return this.getToken(TESTParser.START_TEST, 0); }
	public AT(): TerminalNode { return this.getToken(TESTParser.AT, 0); }
	public RULE_AFTER_AT(): TerminalNode { return this.getToken(TESTParser.RULE_AFTER_AT, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(TESTParser.PARAM_OPEN, 0); }
	public NAME(): TerminalNode { return this.getToken(TESTParser.NAME, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.EQUAL);
		} else {
			return this.getToken(TESTParser.EQUAL, i);
		}
	}
	public STRINGS(): TerminalNode[];
	public STRINGS(i: number): TerminalNode;
	public STRINGS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.STRINGS);
		} else {
			return this.getToken(TESTParser.STRINGS, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(TESTParser.COMMA, 0); }
	public BLOCK(): TerminalNode { return this.getToken(TESTParser.BLOCK, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
	public END_TEST(): TerminalNode { return this.getToken(TESTParser.END_TEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_ruleDefinition; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterRuleDefinition) {
			listener.enterRuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitRuleDefinition) {
			listener.exitRuleDefinition(this);
		}
	}
}


export class BlockDefinitionContext extends ParserRuleContext {
	public START_TEST(): TerminalNode { return this.getToken(TESTParser.START_TEST, 0); }
	public AT(): TerminalNode { return this.getToken(TESTParser.AT, 0); }
	public BLOCK(): TerminalNode { return this.getToken(TESTParser.BLOCK, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(TESTParser.PARAM_OPEN, 0); }
	public NAME(): TerminalNode { return this.getToken(TESTParser.NAME, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.EQUAL);
		} else {
			return this.getToken(TESTParser.EQUAL, i);
		}
	}
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
	public END_TEST(): TerminalNode { return this.getToken(TESTParser.END_TEST, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public RULES(): TerminalNode | undefined { return this.tryGetToken(TESTParser.RULES, 0); }
	public CURLY_OPEN(): TerminalNode | undefined { return this.tryGetToken(TESTParser.CURLY_OPEN, 0); }
	public ruleReferenceList(): RuleReferenceListContext | undefined {
		return this.tryGetRuleContext(0, RuleReferenceListContext);
	}
	public CURLY_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TESTParser.CURLY_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_blockDefinition; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterBlockDefinition) {
			listener.enterBlockDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitBlockDefinition) {
			listener.exitBlockDefinition(this);
		}
	}
}


export class TestDefinitionContext extends ParserRuleContext {
	public START_TEST(): TerminalNode { return this.getToken(TESTParser.START_TEST, 0); }
	public AT(): TerminalNode { return this.getToken(TESTParser.AT, 0); }
	public TEST(): TerminalNode { return this.getToken(TESTParser.TEST, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(TESTParser.CURLY_OPEN, 0); }
	public STRINGS(): TerminalNode[];
	public STRINGS(i: number): TerminalNode;
	public STRINGS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.STRINGS);
		} else {
			return this.getToken(TESTParser.STRINGS, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.COLON);
		} else {
			return this.getToken(TESTParser.COLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.COMMA);
		} else {
			return this.getToken(TESTParser.COMMA, i);
		}
	}
	public SQUARE_OPEN(): TerminalNode[];
	public SQUARE_OPEN(i: number): TerminalNode;
	public SQUARE_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.SQUARE_OPEN);
		} else {
			return this.getToken(TESTParser.SQUARE_OPEN, i);
		}
	}
	public referenceList(): ReferenceListContext {
		return this.getRuleContext(0, ReferenceListContext);
	}
	public SQUARE_CLOSED(): TerminalNode[];
	public SQUARE_CLOSED(i: number): TerminalNode;
	public SQUARE_CLOSED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.SQUARE_CLOSED);
		} else {
			return this.getToken(TESTParser.SQUARE_CLOSED, i);
		}
	}
	public assertList(): AssertListContext {
		return this.getRuleContext(0, AssertListContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(TESTParser.CURLY_CLOSE, 0); }
	public END_TEST(): TerminalNode { return this.getToken(TESTParser.END_TEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_testDefinition; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterTestDefinition) {
			listener.enterTestDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitTestDefinition) {
			listener.exitTestDefinition(this);
		}
	}
}


export class ProgramDefinitionContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(TESTParser.AT, 0); }
	public PROGRAM(): TerminalNode { return this.getToken(TESTParser.PROGRAM, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(TESTParser.PARAM_OPEN, 0); }
	public NAME(): TerminalNode { return this.getToken(TESTParser.NAME, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.EQUAL);
		} else {
			return this.getToken(TESTParser.EQUAL, i);
		}
	}
	public STRINGS(): TerminalNode[];
	public STRINGS(i: number): TerminalNode;
	public STRINGS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TESTParser.STRINGS);
		} else {
			return this.getToken(TESTParser.STRINGS, i);
		}
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(TESTParser.PARAM_CLOSE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public ADD_FILES(): TerminalNode | undefined { return this.tryGetToken(TESTParser.ADD_FILES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_programDefinition; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterProgramDefinition) {
			listener.enterProgramDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitProgramDefinition) {
			listener.exitProgramDefinition(this);
		}
	}
}


export class RuleReferenceListContext extends ParserRuleContext {
	public ruleReference(): RuleReferenceContext {
		return this.getRuleContext(0, RuleReferenceContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public ruleReferenceList(): RuleReferenceListContext | undefined {
		return this.tryGetRuleContext(0, RuleReferenceListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_ruleReferenceList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterRuleReferenceList) {
			listener.enterRuleReferenceList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitRuleReferenceList) {
			listener.exitRuleReferenceList(this);
		}
	}
}


export class RuleReferenceContext extends ParserRuleContext {
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_ruleReference; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterRuleReference) {
			listener.enterRuleReference(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitRuleReference) {
			listener.exitRuleReference(this);
		}
	}
}


export class ProgramFilesListContext extends ParserRuleContext {
	public programFile(): ProgramFileContext {
		return this.getRuleContext(0, ProgramFileContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public programFilesList(): ProgramFilesListContext | undefined {
		return this.tryGetRuleContext(0, ProgramFilesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_programFilesList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterProgramFilesList) {
			listener.enterProgramFilesList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitProgramFilesList) {
			listener.exitProgramFilesList(this);
		}
	}
}


export class ProgramFileContext extends ParserRuleContext {
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_programFile; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterProgramFile) {
			listener.enterProgramFile(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitProgramFile) {
			listener.exitProgramFile(this);
		}
	}
}


export class InputFilesListContext extends ParserRuleContext {
	public inputFile(): InputFileContext {
		return this.getRuleContext(0, InputFileContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public inputFilesList(): InputFilesListContext | undefined {
		return this.tryGetRuleContext(0, InputFilesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_inputFilesList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterInputFilesList) {
			listener.enterInputFilesList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitInputFilesList) {
			listener.exitInputFilesList(this);
		}
	}
}


export class InputFileContext extends ParserRuleContext {
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_inputFile; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterInputFile) {
			listener.enterInputFile(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitInputFile) {
			listener.exitInputFile(this);
		}
	}
}


export class ReferenceListContext extends ParserRuleContext {
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public referenceList(): ReferenceListContext | undefined {
		return this.tryGetRuleContext(0, ReferenceListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_referenceList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterReferenceList) {
			listener.enterReferenceList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitReferenceList) {
			listener.exitReferenceList(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_reference; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class AssertListContext extends ParserRuleContext {
	public STRINGS(): TerminalNode { return this.getToken(TESTParser.STRINGS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(TESTParser.COMMA, 0); }
	public assertList(): AssertListContext | undefined {
		return this.tryGetRuleContext(0, AssertListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TESTParser.RULE_assertList; }
	// @Override
	public enterRule(listener: TESTListener): void {
		if (listener.enterAssertList) {
			listener.enterAssertList(this);
		}
	}
	// @Override
	public exitRule(listener: TESTListener): void {
		if (listener.exitAssertList) {
			listener.exitAssertList(this);
		}
	}
}


