// Generated from c:/Users/paolo/Desktop/ASPlugin-2.0/asplugin/src/antlr_scripts_test/TEST.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TESTParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, STRINGS=2, NUMBER=3, DOT=4, DDOT=5, COMMA=6, HEAD_SEPARATOR=7, SEMICOLON=8, 
		COLON=9, AT=10, CONS=11, WCONS=12, PLUS=13, DASH=14, TIMES=15, SLASH=16, 
		BACK_SLASH=17, PARAM_OPEN=18, PARAM_CLOSE=19, SQUARE_OPEN=20, SQUARE_CLOSED=21, 
		CURLY_OPEN=22, CURLY_CLOSE=23, QUERY_MARK=24, ANON_VAR=25, EQUAL=26, UNEQUAL=27, 
		LESS=28, GREATER=29, LESS_OR_EQ=30, GREATER_OR_EQ=31, AMPERSAND=32, EXISTS=33, 
		START_TEST=34, END_TEST=35, NAME=36, NAME_1=37, RULE_AFTER_AT=38, LABEL=39, 
		RULES=40, BLOCK=41, TEST=42, CONSTRAINT=43, SCOPE=44, PROGRAM_FILES=45, 
		INPUT=46, INPUT_FILES=47, ASSERT=48, ATOMS=49, COST=50, LEVEL=51, PROGRAM=52, 
		ADD_FILES=53, NUM_STR=54, ASSERT_NAS=55, ASSERT_TIA=56, ASSERT_TIAL=57, 
		ASSERT_TIAM=58, ASSERT_TIE=59, ASSERT_FIA=60, ASSERT_FIAL=61, ASSERT_FIAM=62, 
		ASSERT_FIE=63, ASSERT_C=64, ASSERT_CIE=65, ASSERT_CIAL=66, ASSERT_CIAM=67, 
		ASSERT_BMC=68;
	public static final int
		RULE_annotationList = 0, RULE_annotationExpression = 1, RULE_nameDefinition = 2, 
		RULE_ruleDefinition = 3, RULE_blockDefinition = 4, RULE_testDefinition = 5, 
		RULE_programDefinition = 6, RULE_ruleReferenceList = 7, RULE_ruleReference = 8, 
		RULE_programFilesList = 9, RULE_programFile = 10, RULE_inputFilesList = 11, 
		RULE_inputFile = 12, RULE_referenceList = 13, RULE_reference = 14, RULE_assertList = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"annotationList", "annotationExpression", "nameDefinition", "ruleDefinition", 
			"blockDefinition", "testDefinition", "programDefinition", "ruleReferenceList", 
			"ruleReference", "programFilesList", "programFile", "inputFilesList", 
			"inputFile", "referenceList", "reference", "assertList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'.'", "'..'", "','", "'|'", "';'", "':'", "'@'", 
			"':-'", "':~'", "'+'", "'-'", "'*'", "'/'", "'\\'", "'('", "')'", "'['", 
			"']'", "'{'", "'}'", "'?'", "'_'", null, null, "'<'", "'>'", "'<='", 
			"'>='", "'&'", "'\\E'", "'%**'", "'**%'", "'name'", "'\"name\"'", "'rule'", 
			"'labels'", "'rules'", "'block'", "'test'", "'constraint'", "'scope'", 
			"'file'", "'input'", "'inputFiles'", "'\"assert\"'", "'atoms'", "'cost'", 
			"'level'", "'program'", "'additionalFiles'", "'number'", "'noAnswerSet'", 
			"'trueInAll'", "'trueInAtLeast'", "'trueInAtMost'", "'trueInExactly'", 
			"'falseInAll'", "'falseInAtLeast'", "'falseInAtMost'", "'falseInExactly'", 
			"'constraintForAll'", "'constraintInExactly'", "'constraintInAtLeast'", 
			"'constraintInAtMost'", "'bestModelCost'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "STRINGS", "NUMBER", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", 
			"SEMICOLON", "COLON", "AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES", 
			"SLASH", "BACK_SLASH", "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", 
			"CURLY_OPEN", "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", 
			"LESS", "GREATER", "LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS", 
			"START_TEST", "END_TEST", "NAME", "NAME_1", "RULE_AFTER_AT", "LABEL", 
			"RULES", "BLOCK", "TEST", "CONSTRAINT", "SCOPE", "PROGRAM_FILES", "INPUT", 
			"INPUT_FILES", "ASSERT", "ATOMS", "COST", "LEVEL", "PROGRAM", "ADD_FILES", 
			"NUM_STR", "ASSERT_NAS", "ASSERT_TIA", "ASSERT_TIAL", "ASSERT_TIAM", 
			"ASSERT_TIE", "ASSERT_FIA", "ASSERT_FIAL", "ASSERT_FIAM", "ASSERT_FIE", 
			"ASSERT_C", "ASSERT_CIE", "ASSERT_CIAL", "ASSERT_CIAM", "ASSERT_BMC"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TEST.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TESTParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AnnotationListContext extends ParserRuleContext {
		public AnnotationExpressionContext annotationExpression() {
			return getRuleContext(AnnotationExpressionContext.class,0);
		}
		public TerminalNode EOF() { return getToken(TESTParser.EOF, 0); }
		public AnnotationListContext annotationList() {
			return getRuleContext(AnnotationListContext.class,0);
		}
		public AnnotationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationList; }
	}

	public final AnnotationListContext annotationList() throws RecognitionException {
		AnnotationListContext _localctx = new AnnotationListContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_annotationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			annotationExpression();
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT || _la==START_TEST) {
				{
				setState(33);
				annotationList();
				}
			}

			setState(36);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AnnotationExpressionContext extends ParserRuleContext {
		public RuleDefinitionContext ruleDefinition() {
			return getRuleContext(RuleDefinitionContext.class,0);
		}
		public BlockDefinitionContext blockDefinition() {
			return getRuleContext(BlockDefinitionContext.class,0);
		}
		public TestDefinitionContext testDefinition() {
			return getRuleContext(TestDefinitionContext.class,0);
		}
		public ProgramDefinitionContext programDefinition() {
			return getRuleContext(ProgramDefinitionContext.class,0);
		}
		public NameDefinitionContext nameDefinition() {
			return getRuleContext(NameDefinitionContext.class,0);
		}
		public AnnotationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationExpression; }
	}

	public final AnnotationExpressionContext annotationExpression() throws RecognitionException {
		AnnotationExpressionContext _localctx = new AnnotationExpressionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_annotationExpression);
		try {
			setState(43);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				ruleDefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				blockDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				testDefinition();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				programDefinition();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				nameDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameDefinitionContext extends ParserRuleContext {
		public TerminalNode START_TEST() { return getToken(TESTParser.START_TEST, 0); }
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public TerminalNode END_TEST() { return getToken(TESTParser.END_TEST, 0); }
		public NameDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameDefinition; }
	}

	public final NameDefinitionContext nameDefinition() throws RecognitionException {
		NameDefinitionContext _localctx = new NameDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_nameDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(START_TEST);
			setState(46);
			match(STRINGS);
			setState(47);
			match(END_TEST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RuleDefinitionContext extends ParserRuleContext {
		public TerminalNode START_TEST() { return getToken(TESTParser.START_TEST, 0); }
		public TerminalNode AT() { return getToken(TESTParser.AT, 0); }
		public TerminalNode RULE_AFTER_AT() { return getToken(TESTParser.RULE_AFTER_AT, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(TESTParser.PARAM_OPEN, 0); }
		public TerminalNode NAME() { return getToken(TESTParser.NAME, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(TESTParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(TESTParser.EQUAL, i);
		}
		public List<TerminalNode> STRINGS() { return getTokens(TESTParser.STRINGS); }
		public TerminalNode STRINGS(int i) {
			return getToken(TESTParser.STRINGS, i);
		}
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public TerminalNode BLOCK() { return getToken(TESTParser.BLOCK, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(TESTParser.PARAM_CLOSE, 0); }
		public TerminalNode END_TEST() { return getToken(TESTParser.END_TEST, 0); }
		public RuleDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleDefinition; }
	}

	public final RuleDefinitionContext ruleDefinition() throws RecognitionException {
		RuleDefinitionContext _localctx = new RuleDefinitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ruleDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(START_TEST);
			setState(50);
			match(AT);
			setState(51);
			match(RULE_AFTER_AT);
			setState(52);
			match(PARAM_OPEN);
			setState(53);
			match(NAME);
			setState(54);
			match(EQUAL);
			setState(55);
			match(STRINGS);
			setState(56);
			match(COMMA);
			setState(57);
			match(BLOCK);
			setState(58);
			match(EQUAL);
			setState(59);
			match(STRINGS);
			setState(60);
			match(PARAM_CLOSE);
			setState(61);
			match(END_TEST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockDefinitionContext extends ParserRuleContext {
		public TerminalNode START_TEST() { return getToken(TESTParser.START_TEST, 0); }
		public TerminalNode AT() { return getToken(TESTParser.AT, 0); }
		public TerminalNode BLOCK() { return getToken(TESTParser.BLOCK, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(TESTParser.PARAM_OPEN, 0); }
		public TerminalNode NAME() { return getToken(TESTParser.NAME, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(TESTParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(TESTParser.EQUAL, i);
		}
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(TESTParser.PARAM_CLOSE, 0); }
		public TerminalNode END_TEST() { return getToken(TESTParser.END_TEST, 0); }
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public TerminalNode RULES() { return getToken(TESTParser.RULES, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(TESTParser.CURLY_OPEN, 0); }
		public RuleReferenceListContext ruleReferenceList() {
			return getRuleContext(RuleReferenceListContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(TESTParser.CURLY_CLOSE, 0); }
		public BlockDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockDefinition; }
	}

	public final BlockDefinitionContext blockDefinition() throws RecognitionException {
		BlockDefinitionContext _localctx = new BlockDefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_blockDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(START_TEST);
			setState(64);
			match(AT);
			setState(65);
			match(BLOCK);
			setState(66);
			match(PARAM_OPEN);
			setState(67);
			match(NAME);
			setState(68);
			match(EQUAL);
			setState(69);
			match(STRINGS);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(70);
				match(COMMA);
				setState(71);
				match(RULES);
				setState(72);
				match(EQUAL);
				setState(73);
				match(CURLY_OPEN);
				setState(74);
				ruleReferenceList();
				setState(75);
				match(CURLY_CLOSE);
				}
			}

			setState(79);
			match(PARAM_CLOSE);
			setState(80);
			match(END_TEST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TestDefinitionContext extends ParserRuleContext {
		public TerminalNode START_TEST() { return getToken(TESTParser.START_TEST, 0); }
		public TerminalNode AT() { return getToken(TESTParser.AT, 0); }
		public TerminalNode TEST() { return getToken(TESTParser.TEST, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(TESTParser.CURLY_OPEN, 0); }
		public List<TerminalNode> STRINGS() { return getTokens(TESTParser.STRINGS); }
		public TerminalNode STRINGS(int i) {
			return getToken(TESTParser.STRINGS, i);
		}
		public List<TerminalNode> COLON() { return getTokens(TESTParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(TESTParser.COLON, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TESTParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TESTParser.COMMA, i);
		}
		public List<TerminalNode> SQUARE_OPEN() { return getTokens(TESTParser.SQUARE_OPEN); }
		public TerminalNode SQUARE_OPEN(int i) {
			return getToken(TESTParser.SQUARE_OPEN, i);
		}
		public ReferenceListContext referenceList() {
			return getRuleContext(ReferenceListContext.class,0);
		}
		public List<TerminalNode> SQUARE_CLOSED() { return getTokens(TESTParser.SQUARE_CLOSED); }
		public TerminalNode SQUARE_CLOSED(int i) {
			return getToken(TESTParser.SQUARE_CLOSED, i);
		}
		public AssertListContext assertList() {
			return getRuleContext(AssertListContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(TESTParser.CURLY_CLOSE, 0); }
		public TerminalNode END_TEST() { return getToken(TESTParser.END_TEST, 0); }
		public TestDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_testDefinition; }
	}

	public final TestDefinitionContext testDefinition() throws RecognitionException {
		TestDefinitionContext _localctx = new TestDefinitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_testDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(START_TEST);
			setState(83);
			match(AT);
			setState(84);
			match(TEST);
			setState(85);
			match(CURLY_OPEN);
			setState(86);
			match(STRINGS);
			setState(87);
			match(COLON);
			setState(88);
			match(STRINGS);
			setState(89);
			match(COMMA);
			setState(90);
			match(STRINGS);
			setState(91);
			match(COLON);
			setState(92);
			match(SQUARE_OPEN);
			setState(93);
			referenceList();
			setState(94);
			match(SQUARE_CLOSED);
			setState(95);
			match(COMMA);
			setState(96);
			match(STRINGS);
			setState(97);
			match(COLON);
			setState(98);
			match(STRINGS);
			setState(99);
			match(COMMA);
			setState(100);
			match(STRINGS);
			setState(101);
			match(COLON);
			setState(102);
			match(SQUARE_OPEN);
			setState(103);
			assertList();
			setState(104);
			match(SQUARE_CLOSED);
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(105);
				match(COMMA);
				setState(106);
				match(STRINGS);
				setState(107);
				match(COLON);
				setState(108);
				match(STRINGS);
				}
			}

			setState(111);
			match(CURLY_CLOSE);
			setState(112);
			match(END_TEST);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramDefinitionContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(TESTParser.AT, 0); }
		public TerminalNode PROGRAM() { return getToken(TESTParser.PROGRAM, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(TESTParser.PARAM_OPEN, 0); }
		public TerminalNode NAME() { return getToken(TESTParser.NAME, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(TESTParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(TESTParser.EQUAL, i);
		}
		public List<TerminalNode> STRINGS() { return getTokens(TESTParser.STRINGS); }
		public TerminalNode STRINGS(int i) {
			return getToken(TESTParser.STRINGS, i);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(TESTParser.PARAM_CLOSE, 0); }
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public TerminalNode ADD_FILES() { return getToken(TESTParser.ADD_FILES, 0); }
		public ProgramDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programDefinition; }
	}

	public final ProgramDefinitionContext programDefinition() throws RecognitionException {
		ProgramDefinitionContext _localctx = new ProgramDefinitionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_programDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(AT);
			setState(115);
			match(PROGRAM);
			setState(116);
			match(PARAM_OPEN);
			setState(117);
			match(NAME);
			setState(118);
			match(EQUAL);
			setState(119);
			match(STRINGS);
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(120);
				match(COMMA);
				setState(121);
				match(ADD_FILES);
				setState(122);
				match(EQUAL);
				setState(123);
				match(STRINGS);
				}
			}

			setState(126);
			match(PARAM_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RuleReferenceListContext extends ParserRuleContext {
		public RuleReferenceContext ruleReference() {
			return getRuleContext(RuleReferenceContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public RuleReferenceListContext ruleReferenceList() {
			return getRuleContext(RuleReferenceListContext.class,0);
		}
		public RuleReferenceListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleReferenceList; }
	}

	public final RuleReferenceListContext ruleReferenceList() throws RecognitionException {
		RuleReferenceListContext _localctx = new RuleReferenceListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ruleReferenceList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			ruleReference();
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(129);
				match(COMMA);
				setState(130);
				ruleReferenceList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RuleReferenceContext extends ParserRuleContext {
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public RuleReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleReference; }
	}

	public final RuleReferenceContext ruleReference() throws RecognitionException {
		RuleReferenceContext _localctx = new RuleReferenceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ruleReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(STRINGS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramFilesListContext extends ParserRuleContext {
		public ProgramFileContext programFile() {
			return getRuleContext(ProgramFileContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public ProgramFilesListContext programFilesList() {
			return getRuleContext(ProgramFilesListContext.class,0);
		}
		public ProgramFilesListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programFilesList; }
	}

	public final ProgramFilesListContext programFilesList() throws RecognitionException {
		ProgramFilesListContext _localctx = new ProgramFilesListContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_programFilesList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			programFile();
			setState(138);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(136);
				match(COMMA);
				setState(137);
				programFilesList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramFileContext extends ParserRuleContext {
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public ProgramFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programFile; }
	}

	public final ProgramFileContext programFile() throws RecognitionException {
		ProgramFileContext _localctx = new ProgramFileContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_programFile);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(STRINGS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InputFilesListContext extends ParserRuleContext {
		public InputFileContext inputFile() {
			return getRuleContext(InputFileContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public InputFilesListContext inputFilesList() {
			return getRuleContext(InputFilesListContext.class,0);
		}
		public InputFilesListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inputFilesList; }
	}

	public final InputFilesListContext inputFilesList() throws RecognitionException {
		InputFilesListContext _localctx = new InputFilesListContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_inputFilesList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			inputFile();
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(143);
				match(COMMA);
				setState(144);
				inputFilesList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InputFileContext extends ParserRuleContext {
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public InputFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inputFile; }
	}

	public final InputFileContext inputFile() throws RecognitionException {
		InputFileContext _localctx = new InputFileContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_inputFile);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(STRINGS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReferenceListContext extends ParserRuleContext {
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public ReferenceListContext referenceList() {
			return getRuleContext(ReferenceListContext.class,0);
		}
		public ReferenceListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceList; }
	}

	public final ReferenceListContext referenceList() throws RecognitionException {
		ReferenceListContext _localctx = new ReferenceListContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_referenceList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			reference();
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(150);
				match(COMMA);
				setState(151);
				referenceList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReferenceContext extends ParserRuleContext {
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_reference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(STRINGS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssertListContext extends ParserRuleContext {
		public TerminalNode STRINGS() { return getToken(TESTParser.STRINGS, 0); }
		public TerminalNode COMMA() { return getToken(TESTParser.COMMA, 0); }
		public AssertListContext assertList() {
			return getRuleContext(AssertListContext.class,0);
		}
		public AssertListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assertList; }
	}

	public final AssertListContext assertList() throws RecognitionException {
		AssertListContext _localctx = new AssertListContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_assertList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(STRINGS);
			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(157);
				match(COMMA);
				setState(158);
				assertList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001D\u00a2\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0001\u0000\u0001\u0000\u0003\u0000#\b\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		",\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004N\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"n\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0003\u0006}\b\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u0084\b\u0007\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0003\t\u008b\b\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u0092\b\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0003\r\u0099\b\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00a0\b\u000f\u0001\u000f\u0000"+
		"\u0000\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e\u0000\u0000\u009e\u0000 \u0001\u0000\u0000\u0000"+
		"\u0002+\u0001\u0000\u0000\u0000\u0004-\u0001\u0000\u0000\u0000\u00061"+
		"\u0001\u0000\u0000\u0000\b?\u0001\u0000\u0000\u0000\nR\u0001\u0000\u0000"+
		"\u0000\fr\u0001\u0000\u0000\u0000\u000e\u0080\u0001\u0000\u0000\u0000"+
		"\u0010\u0085\u0001\u0000\u0000\u0000\u0012\u0087\u0001\u0000\u0000\u0000"+
		"\u0014\u008c\u0001\u0000\u0000\u0000\u0016\u008e\u0001\u0000\u0000\u0000"+
		"\u0018\u0093\u0001\u0000\u0000\u0000\u001a\u0095\u0001\u0000\u0000\u0000"+
		"\u001c\u009a\u0001\u0000\u0000\u0000\u001e\u009c\u0001\u0000\u0000\u0000"+
		" \"\u0003\u0002\u0001\u0000!#\u0003\u0000\u0000\u0000\"!\u0001\u0000\u0000"+
		"\u0000\"#\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$%\u0005\u0000"+
		"\u0000\u0001%\u0001\u0001\u0000\u0000\u0000&,\u0003\u0006\u0003\u0000"+
		"\',\u0003\b\u0004\u0000(,\u0003\n\u0005\u0000),\u0003\f\u0006\u0000*,"+
		"\u0003\u0004\u0002\u0000+&\u0001\u0000\u0000\u0000+\'\u0001\u0000\u0000"+
		"\u0000+(\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000+*\u0001\u0000"+
		"\u0000\u0000,\u0003\u0001\u0000\u0000\u0000-.\u0005\"\u0000\u0000./\u0005"+
		"\u0002\u0000\u0000/0\u0005#\u0000\u00000\u0005\u0001\u0000\u0000\u0000"+
		"12\u0005\"\u0000\u000023\u0005\n\u0000\u000034\u0005&\u0000\u000045\u0005"+
		"\u0012\u0000\u000056\u0005$\u0000\u000067\u0005\u001a\u0000\u000078\u0005"+
		"\u0002\u0000\u000089\u0005\u0006\u0000\u00009:\u0005)\u0000\u0000:;\u0005"+
		"\u001a\u0000\u0000;<\u0005\u0002\u0000\u0000<=\u0005\u0013\u0000\u0000"+
		"=>\u0005#\u0000\u0000>\u0007\u0001\u0000\u0000\u0000?@\u0005\"\u0000\u0000"+
		"@A\u0005\n\u0000\u0000AB\u0005)\u0000\u0000BC\u0005\u0012\u0000\u0000"+
		"CD\u0005$\u0000\u0000DE\u0005\u001a\u0000\u0000EM\u0005\u0002\u0000\u0000"+
		"FG\u0005\u0006\u0000\u0000GH\u0005(\u0000\u0000HI\u0005\u001a\u0000\u0000"+
		"IJ\u0005\u0016\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005\u0017\u0000"+
		"\u0000LN\u0001\u0000\u0000\u0000MF\u0001\u0000\u0000\u0000MN\u0001\u0000"+
		"\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0005\u0013\u0000\u0000PQ\u0005"+
		"#\u0000\u0000Q\t\u0001\u0000\u0000\u0000RS\u0005\"\u0000\u0000ST\u0005"+
		"\n\u0000\u0000TU\u0005*\u0000\u0000UV\u0005\u0016\u0000\u0000VW\u0005"+
		"\u0002\u0000\u0000WX\u0005\t\u0000\u0000XY\u0005\u0002\u0000\u0000YZ\u0005"+
		"\u0006\u0000\u0000Z[\u0005\u0002\u0000\u0000[\\\u0005\t\u0000\u0000\\"+
		"]\u0005\u0014\u0000\u0000]^\u0003\u001a\r\u0000^_\u0005\u0015\u0000\u0000"+
		"_`\u0005\u0006\u0000\u0000`a\u0005\u0002\u0000\u0000ab\u0005\t\u0000\u0000"+
		"bc\u0005\u0002\u0000\u0000cd\u0005\u0006\u0000\u0000de\u0005\u0002\u0000"+
		"\u0000ef\u0005\t\u0000\u0000fg\u0005\u0014\u0000\u0000gh\u0003\u001e\u000f"+
		"\u0000hm\u0005\u0015\u0000\u0000ij\u0005\u0006\u0000\u0000jk\u0005\u0002"+
		"\u0000\u0000kl\u0005\t\u0000\u0000ln\u0005\u0002\u0000\u0000mi\u0001\u0000"+
		"\u0000\u0000mn\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000op\u0005"+
		"\u0017\u0000\u0000pq\u0005#\u0000\u0000q\u000b\u0001\u0000\u0000\u0000"+
		"rs\u0005\n\u0000\u0000st\u00054\u0000\u0000tu\u0005\u0012\u0000\u0000"+
		"uv\u0005$\u0000\u0000vw\u0005\u001a\u0000\u0000w|\u0005\u0002\u0000\u0000"+
		"xy\u0005\u0006\u0000\u0000yz\u00055\u0000\u0000z{\u0005\u001a\u0000\u0000"+
		"{}\u0005\u0002\u0000\u0000|x\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000"+
		"\u0000}~\u0001\u0000\u0000\u0000~\u007f\u0005\u0013\u0000\u0000\u007f"+
		"\r\u0001\u0000\u0000\u0000\u0080\u0083\u0003\u0010\b\u0000\u0081\u0082"+
		"\u0005\u0006\u0000\u0000\u0082\u0084\u0003\u000e\u0007\u0000\u0083\u0081"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u000f"+
		"\u0001\u0000\u0000\u0000\u0085\u0086\u0005\u0002\u0000\u0000\u0086\u0011"+
		"\u0001\u0000\u0000\u0000\u0087\u008a\u0003\u0014\n\u0000\u0088\u0089\u0005"+
		"\u0006\u0000\u0000\u0089\u008b\u0003\u0012\t\u0000\u008a\u0088\u0001\u0000"+
		"\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u0013\u0001\u0000"+
		"\u0000\u0000\u008c\u008d\u0005\u0002\u0000\u0000\u008d\u0015\u0001\u0000"+
		"\u0000\u0000\u008e\u0091\u0003\u0018\f\u0000\u008f\u0090\u0005\u0006\u0000"+
		"\u0000\u0090\u0092\u0003\u0016\u000b\u0000\u0091\u008f\u0001\u0000\u0000"+
		"\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u0017\u0001\u0000\u0000"+
		"\u0000\u0093\u0094\u0005\u0002\u0000\u0000\u0094\u0019\u0001\u0000\u0000"+
		"\u0000\u0095\u0098\u0003\u001c\u000e\u0000\u0096\u0097\u0005\u0006\u0000"+
		"\u0000\u0097\u0099\u0003\u001a\r\u0000\u0098\u0096\u0001\u0000\u0000\u0000"+
		"\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u001b\u0001\u0000\u0000\u0000"+
		"\u009a\u009b\u0005\u0002\u0000\u0000\u009b\u001d\u0001\u0000\u0000\u0000"+
		"\u009c\u009f\u0005\u0002\u0000\u0000\u009d\u009e\u0005\u0006\u0000\u0000"+
		"\u009e\u00a0\u0003\u001e\u000f\u0000\u009f\u009d\u0001\u0000\u0000\u0000"+
		"\u009f\u00a0\u0001\u0000\u0000\u0000\u00a0\u001f\u0001\u0000\u0000\u0000"+
		"\n\"+Mm|\u0083\u008a\u0091\u0098\u009f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}