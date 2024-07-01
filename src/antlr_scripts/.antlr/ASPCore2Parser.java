// Generated from c:/Users/paolo/Desktop/ASPlugin-2.0/asplugin/src/antlr_scripts/ASPCore2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ASPCore2Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NAF=1, SYMBOLIC_CONSTANT=2, VARIABLE=3, STRING=4, NUMBER=5, WS=6, START_COMMENT=7, 
		END_COMMENT=8, COMMENT=9, DOT=10, DDOT=11, COMMA=12, HEAD_SEPARATOR=13, 
		SEMICOLON=14, COLON=15, AT=16, CONS=17, WCONS=18, PLUS=19, DASH=20, TIMES=21, 
		SLASH=22, BACK_SLASH=23, PARAM_OPEN=24, PARAM_CLOSE=25, SQUARE_OPEN=26, 
		SQUARE_CLOSED=27, CURLY_OPEN=28, CURLY_CLOSE=29, QUERY_MARK=30, ANON_VAR=31, 
		EQUAL=32, UNEQUAL=33, LESS=34, GREATER=35, LESS_OR_EQ=36, GREATER_OR_EQ=37, 
		AMPERSAND=38, EXISTS=39, AGGR_COUNT=40, AGGR_MAX=41, AGGR_MIN=42, AGGR_SUM=43, 
		ANNOTATION_GLOBAL_WASP_PROPAGATOR=44, DIRECTIVE_NAME=45, DIRECTIVE_VALUE=46, 
		ANNOTATION_RULE_ALIGN_SUBSTITUTIONS=47, ANNOTATION_RULE_LOOK_AHEAD=48, 
		ANNOTATION_RULE_PROJECTION=49, ANNOTATION_RULE_REWRITING_ARITH=50, ANNOTATION_RULE_ORDERING=51, 
		ANNOTATION_ORDERING_VALUE=52, ANNOTATION_RULE_ATOM_INDEXED=53, ANNOTATION_ATOM_INDEXED_ATOM=54, 
		ANNOTATION_ATOM_INDEXED_ARGUMENTS=55, ANNOTATION_RULE_PARTIAL_ORDER=56, 
		ANNOTATION_PARTIAL_ORDER_BEFORE=57, ANNOTATION_PARTIAL_ORDER_AFTER=58, 
		ANNOTATION_EXTATOM_PREDICATE=59, ANNOTATION_EXTATOM_TYPE=60, ANNOTATION_EXTATOM_TYPE_QCONST=61, 
		ANNOTATION_EXTATOM_TYPE_CONST=62, ANNOTATION_EXTATOM_TYPE_U_INT=63, ANNOTATION_EXTATOM_TYPE_UR_INT=64, 
		ANNOTATION_EXTATOM_TYPE_UT_INT=65, ANNOTATION_EXTATOM_TYPE_R_INT=66, ANNOTATION_EXTATOM_TYPE_T_INT=67, 
		ANNOTATION_GLOBAL_ORDERING=68, ANNOTATION_GLOBAL_ATOM_INDEXED=69, ANNOTATION_GLOBAL_PARTIAL_ORDER=70, 
		ANNOTATION_GLOBAL_EXTATOM_CONVERSION=71, ANNOTATION_RULE_TO_DECOMPOSE=72, 
		ANNOTATION_RULE_TO_NOT_DECOMPOSE=73, ANNOTATION_GLOBAL_WASP_HEURISTIC=74, 
		ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE=75, ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS=76;
	public static final int
		RULE_program = 0, RULE_rule_ = 1, RULE_simple_rule = 2, RULE_head = 3, 
		RULE_body = 4, RULE_weight_at_levels = 5, RULE_levels_and_terms = 6, RULE_disjunction = 7, 
		RULE_conjunction = 8, RULE_choice_atom = 9, RULE_lower_guard = 10, RULE_upper_guard = 11, 
		RULE_choice_elements = 12, RULE_choice_element = 13, RULE_choice_element_atom = 14, 
		RULE_choice_elements_literals = 15, RULE_naf_literals = 16, RULE_naf_literal = 17, 
		RULE_naf_literal_aggregate = 18, RULE_existential_atom = 19, RULE_classic_literal = 20, 
		RULE_atom = 21, RULE_extAtom = 22, RULE_extSemicol = 23, RULE_terms = 24, 
		RULE_basic_terms = 25, RULE_builtin_atom = 26, RULE_compareop = 27, RULE_binop = 28, 
		RULE_arithop1 = 29, RULE_arithop2 = 30, RULE_term_ = 31, RULE_term__ = 32, 
		RULE_term = 33, RULE_expr = 34, RULE_factor = 35, RULE_basic_term = 36, 
		RULE_ground_term = 37, RULE_variable_term = 38, RULE_functional_term = 39, 
		RULE_vars = 40, RULE_identifier = 41, RULE_directive = 42, RULE_query = 43, 
		RULE_lower_guard_compare_aggregate = 44, RULE_upper_guard_compare_aggregate = 45, 
		RULE_compare_aggregate = 46, RULE_lower_guard_leftward_left_aggregate = 47, 
		RULE_leftward_left_aggregate = 48, RULE_left_aggregate = 49, RULE_lower_guard_rightward_left_aggregate = 50, 
		RULE_rightward_left_aggregate = 51, RULE_upper_guard_leftward_right_aggregate = 52, 
		RULE_upper_guard_rightward_right_aggregate = 53, RULE_right_aggregate = 54, 
		RULE_aggregate_atom = 55, RULE_leftwardop = 56, RULE_rightwardop = 57, 
		RULE_aggregate = 58, RULE_aggregate_elements = 59, RULE_aggregate_element = 60, 
		RULE_aggregate_function = 61, RULE_annotation_global = 62, RULE_annotations_rule = 63, 
		RULE_annotation_rule = 64, RULE_annotation_rule_to_decompose = 65, RULE_annotation_rule_to_not_decompose = 66, 
		RULE_annotation_rule_ordering = 67, RULE_annotation_global_ordering = 68, 
		RULE_annotation_global_extatom_conversion = 69, RULE_annotation_extpredicate = 70, 
		RULE_extatom_conv_types = 71, RULE_extatom_conv_type = 72, RULE_rule_ordering_type = 73, 
		RULE_global_ordering_type = 74, RULE_annotation_rule_atom_indexed = 75, 
		RULE_annotation_global_atom_indexed = 76, RULE_rule_indexing_arguments = 77, 
		RULE_rule_naf_literal_annotation = 78, RULE_global_indexing_arguments = 79, 
		RULE_global_naf_literal_annotation = 80, RULE_rule_atom_annotation_before = 81, 
		RULE_global_atom_annotation_before = 82, RULE_rule_atom_annotation_after = 83, 
		RULE_global_atom_annotation_after = 84, RULE_rule_atoms_annotation_before = 85, 
		RULE_global_atoms_annotation_before = 86, RULE_rule_atoms_annotation_after = 87, 
		RULE_global_atoms_annotation_after = 88, RULE_annotation_rule_partial_order_begin = 89, 
		RULE_annotation_global_partial_order_begin = 90, RULE_annotation_rule_partial_order = 91, 
		RULE_annotation_global_partial_order = 92, RULE_annotation_rule_projection = 93, 
		RULE_annotation_rule_projection_value = 94, RULE_annotation_rule_rewriting_arith = 95, 
		RULE_annotation_rule_align_substitutions = 96, RULE_annotation_rule_look_ahead = 97, 
		RULE_annotation_global_wasp_propagator = 98, RULE_annotation_global_wasp_propagator_begin = 99, 
		RULE_annotation_global_wasp_heuristic = 100, RULE_annotation_global_wasp_heuristic_begin = 101, 
		RULE_heuristic_python_file = 102, RULE_aggregate_element_heuristic = 103, 
		RULE_aggregate_elements_heuristic = 104;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "rule_", "simple_rule", "head", "body", "weight_at_levels", 
			"levels_and_terms", "disjunction", "conjunction", "choice_atom", "lower_guard", 
			"upper_guard", "choice_elements", "choice_element", "choice_element_atom", 
			"choice_elements_literals", "naf_literals", "naf_literal", "naf_literal_aggregate", 
			"existential_atom", "classic_literal", "atom", "extAtom", "extSemicol", 
			"terms", "basic_terms", "builtin_atom", "compareop", "binop", "arithop1", 
			"arithop2", "term_", "term__", "term", "expr", "factor", "basic_term", 
			"ground_term", "variable_term", "functional_term", "vars", "identifier", 
			"directive", "query", "lower_guard_compare_aggregate", "upper_guard_compare_aggregate", 
			"compare_aggregate", "lower_guard_leftward_left_aggregate", "leftward_left_aggregate", 
			"left_aggregate", "lower_guard_rightward_left_aggregate", "rightward_left_aggregate", 
			"upper_guard_leftward_right_aggregate", "upper_guard_rightward_right_aggregate", 
			"right_aggregate", "aggregate_atom", "leftwardop", "rightwardop", "aggregate", 
			"aggregate_elements", "aggregate_element", "aggregate_function", "annotation_global", 
			"annotations_rule", "annotation_rule", "annotation_rule_to_decompose", 
			"annotation_rule_to_not_decompose", "annotation_rule_ordering", "annotation_global_ordering", 
			"annotation_global_extatom_conversion", "annotation_extpredicate", "extatom_conv_types", 
			"extatom_conv_type", "rule_ordering_type", "global_ordering_type", "annotation_rule_atom_indexed", 
			"annotation_global_atom_indexed", "rule_indexing_arguments", "rule_naf_literal_annotation", 
			"global_indexing_arguments", "global_naf_literal_annotation", "rule_atom_annotation_before", 
			"global_atom_annotation_before", "rule_atom_annotation_after", "global_atom_annotation_after", 
			"rule_atoms_annotation_before", "global_atoms_annotation_before", "rule_atoms_annotation_after", 
			"global_atoms_annotation_after", "annotation_rule_partial_order_begin", 
			"annotation_global_partial_order_begin", "annotation_rule_partial_order", 
			"annotation_global_partial_order", "annotation_rule_projection", "annotation_rule_projection_value", 
			"annotation_rule_rewriting_arith", "annotation_rule_align_substitutions", 
			"annotation_rule_look_ahead", "annotation_global_wasp_propagator", "annotation_global_wasp_propagator_begin", 
			"annotation_global_wasp_heuristic", "annotation_global_wasp_heuristic_begin", 
			"heuristic_python_file", "aggregate_element_heuristic", "aggregate_elements_heuristic"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'not'", null, null, null, null, null, "'%/'", "'/%'", "'%'", "'.'", 
			"'..'", "','", "'|'", "';'", "':'", "'@'", "':-'", "':~'", "'+'", "'-'", 
			"'*'", "'/'", "'\\'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'?'", 
			"'_'", null, null, "'<'", "'>'", "'<='", "'>='", "'&'", "'\\E'", "'#count'", 
			"'#max'", "'#min'", "'#sum'", "'#propagator'", "'#([A-Za-z_]*)'", "'.*'", 
			"'%@rule_align_substitutions'", "'%@rule_look_ahead'", "'%@rule_projection'", 
			"'%@rule_rewriting_arith'", "'%@rule_ordering'", "'@value'", "'%@rule_atom_indexed'", 
			"'@atom'", "'@arguments'", "'%@rule_partial_order'", "'@before'", "'@after'", 
			"'@predicate'", "'@type'", "'@Q_CONST'", "'@CONST'", "'@U_INT'", "'@UR_INT'", 
			"'@UT_INT'", "'@R_INT'", "'@T_INT'", "'%@global_ordering'", "'%@global_atom_indexed'", 
			"'%@global_partial_order'", "'%@global_external_predicate_conversion'", 
			"'%@rule_to_decompose'", "'%@rule_to_not_decompose'", "'%@global_heuristic'", 
			"'@file'", "'@elements'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER", "WS", 
			"START_COMMENT", "END_COMMENT", "COMMENT", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", 
			"SEMICOLON", "COLON", "AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES", 
			"SLASH", "BACK_SLASH", "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", 
			"CURLY_OPEN", "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", 
			"LESS", "GREATER", "LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS", 
			"AGGR_COUNT", "AGGR_MAX", "AGGR_MIN", "AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR", 
			"DIRECTIVE_NAME", "DIRECTIVE_VALUE", "ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", 
			"ANNOTATION_RULE_LOOK_AHEAD", "ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH", 
			"ANNOTATION_RULE_ORDERING", "ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED", 
			"ANNOTATION_ATOM_INDEXED_ATOM", "ANNOTATION_ATOM_INDEXED_ARGUMENTS", 
			"ANNOTATION_RULE_PARTIAL_ORDER", "ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", 
			"ANNOTATION_EXTATOM_PREDICATE", "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", 
			"ANNOTATION_EXTATOM_TYPE_CONST", "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", 
			"ANNOTATION_EXTATOM_TYPE_UT_INT", "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", 
			"ANNOTATION_GLOBAL_ORDERING", "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", 
			"ANNOTATION_GLOBAL_EXTATOM_CONVERSION", "ANNOTATION_RULE_TO_DECOMPOSE", 
			"ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC", 
			"ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS"
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
	public String getGrammarFileName() { return "ASPCore2.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ASPCore2Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public List<Rule_Context> rule_() {
			return getRuleContexts(Rule_Context.class);
		}
		public Rule_Context rule_(int i) {
			return getRuleContext(Rule_Context.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 85480984179769404L) != 0) || ((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & 127L) != 0)) {
				{
				{
				setState(210);
				rule_();
				}
				}
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
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
	public static class Rule_Context extends ParserRuleContext {
		public Simple_ruleContext simple_rule() {
			return getRuleContext(Simple_ruleContext.class,0);
		}
		public Annotations_ruleContext annotations_rule() {
			return getRuleContext(Annotations_ruleContext.class,0);
		}
		public Annotation_globalContext annotation_global() {
			return getRuleContext(Annotation_globalContext.class,0);
		}
		public DirectiveContext directive() {
			return getRuleContext(DirectiveContext.class,0);
		}
		public Rule_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_; }
	}

	public final Rule_Context rule_() throws RecognitionException {
		Rule_Context _localctx = new Rule_Context(_ctx, getState());
		enterRule(_localctx, 2, RULE_rule_);
		try {
			setState(222);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
			case NUMBER:
			case CONS:
			case WCONS:
			case DASH:
			case PARAM_OPEN:
			case CURLY_OPEN:
			case ANON_VAR:
			case EXISTS:
				enterOuterAlt(_localctx, 1);
				{
				setState(216);
				simple_rule();
				}
				break;
			case ANNOTATION_RULE_ALIGN_SUBSTITUTIONS:
			case ANNOTATION_RULE_LOOK_AHEAD:
			case ANNOTATION_RULE_PROJECTION:
			case ANNOTATION_RULE_REWRITING_ARITH:
			case ANNOTATION_RULE_ORDERING:
			case ANNOTATION_RULE_ATOM_INDEXED:
			case ANNOTATION_RULE_PARTIAL_ORDER:
			case ANNOTATION_RULE_TO_DECOMPOSE:
			case ANNOTATION_RULE_TO_NOT_DECOMPOSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(217);
				annotations_rule();
				setState(218);
				simple_rule();
				}
				break;
			case ANNOTATION_GLOBAL_WASP_PROPAGATOR:
			case ANNOTATION_GLOBAL_ORDERING:
			case ANNOTATION_GLOBAL_ATOM_INDEXED:
			case ANNOTATION_GLOBAL_PARTIAL_ORDER:
			case ANNOTATION_GLOBAL_EXTATOM_CONVERSION:
			case ANNOTATION_GLOBAL_WASP_HEURISTIC:
				enterOuterAlt(_localctx, 3);
				{
				setState(220);
				annotation_global();
				}
				break;
			case DIRECTIVE_NAME:
				enterOuterAlt(_localctx, 4);
				{
				setState(221);
				directive();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Simple_ruleContext extends ParserRuleContext {
		public HeadContext head() {
			return getRuleContext(HeadContext.class,0);
		}
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public TerminalNode CONS() { return getToken(ASPCore2Parser.CONS, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public TerminalNode WCONS() { return getToken(ASPCore2Parser.WCONS, 0); }
		public Weight_at_levelsContext weight_at_levels() {
			return getRuleContext(Weight_at_levelsContext.class,0);
		}
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public Simple_ruleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simple_rule; }
	}

	public final Simple_ruleContext simple_rule() throws RecognitionException {
		Simple_ruleContext _localctx = new Simple_ruleContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_simple_rule);
		try {
			setState(246);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(224);
				head();
				setState(225);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(227);
				head();
				setState(228);
				match(CONS);
				setState(229);
				match(DOT);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(231);
				head();
				setState(232);
				match(CONS);
				setState(233);
				body();
				setState(234);
				match(DOT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(236);
				match(CONS);
				setState(237);
				body();
				setState(238);
				match(DOT);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(240);
				match(WCONS);
				setState(241);
				body();
				setState(242);
				match(DOT);
				setState(243);
				weight_at_levels();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(245);
				query();
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
	public static class HeadContext extends ParserRuleContext {
		public DisjunctionContext disjunction() {
			return getRuleContext(DisjunctionContext.class,0);
		}
		public Choice_atomContext choice_atom() {
			return getRuleContext(Choice_atomContext.class,0);
		}
		public HeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_head; }
	}

	public final HeadContext head() throws RecognitionException {
		HeadContext _localctx = new HeadContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_head);
		try {
			setState(250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(248);
				disjunction();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(249);
				choice_atom();
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
	public static class BodyContext extends ParserRuleContext {
		public ConjunctionContext conjunction() {
			return getRuleContext(ConjunctionContext.class,0);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			conjunction();
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
	public static class Weight_at_levelsContext extends ParserRuleContext {
		public TerminalNode SQUARE_OPEN() { return getToken(ASPCore2Parser.SQUARE_OPEN, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode SQUARE_CLOSED() { return getToken(ASPCore2Parser.SQUARE_CLOSED, 0); }
		public Levels_and_termsContext levels_and_terms() {
			return getRuleContext(Levels_and_termsContext.class,0);
		}
		public Weight_at_levelsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weight_at_levels; }
	}

	public final Weight_at_levelsContext weight_at_levels() throws RecognitionException {
		Weight_at_levelsContext _localctx = new Weight_at_levelsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_weight_at_levels);
		try {
			setState(263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(254);
				match(SQUARE_OPEN);
				setState(255);
				term();
				setState(256);
				match(SQUARE_CLOSED);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(258);
				match(SQUARE_OPEN);
				setState(259);
				term();
				setState(260);
				levels_and_terms();
				setState(261);
				match(SQUARE_CLOSED);
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
	public static class Levels_and_termsContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(ASPCore2Parser.AT, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TermsContext terms() {
			return getRuleContext(TermsContext.class,0);
		}
		public Levels_and_termsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_levels_and_terms; }
	}

	public final Levels_and_termsContext levels_and_terms() throws RecognitionException {
		Levels_and_termsContext _localctx = new Levels_and_termsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_levels_and_terms);
		try {
			setState(274);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				match(AT);
				setState(266);
				term();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(267);
				match(AT);
				setState(268);
				term();
				setState(269);
				match(COMMA);
				setState(270);
				terms();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(272);
				match(COMMA);
				setState(273);
				terms();
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
	public static class DisjunctionContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode HEAD_SEPARATOR() { return getToken(ASPCore2Parser.HEAD_SEPARATOR, 0); }
		public DisjunctionContext disjunction() {
			return getRuleContext(DisjunctionContext.class,0);
		}
		public Existential_atomContext existential_atom() {
			return getRuleContext(Existential_atomContext.class,0);
		}
		public DisjunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_disjunction; }
	}

	public final DisjunctionContext disjunction() throws RecognitionException {
		DisjunctionContext _localctx = new DisjunctionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_disjunction);
		try {
			setState(286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(276);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(277);
				classic_literal();
				setState(278);
				match(HEAD_SEPARATOR);
				setState(279);
				disjunction();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(281);
				existential_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(282);
				existential_atom();
				setState(283);
				match(HEAD_SEPARATOR);
				setState(284);
				disjunction();
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
	public static class ConjunctionContext extends ParserRuleContext {
		public Naf_literal_aggregateContext naf_literal_aggregate() {
			return getRuleContext(Naf_literal_aggregateContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public ConjunctionContext conjunction() {
			return getRuleContext(ConjunctionContext.class,0);
		}
		public ConjunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conjunction; }
	}

	public final ConjunctionContext conjunction() throws RecognitionException {
		ConjunctionContext _localctx = new ConjunctionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_conjunction);
		try {
			setState(293);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(288);
				naf_literal_aggregate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(289);
				naf_literal_aggregate();
				setState(290);
				match(COMMA);
				setState(291);
				conjunction();
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
	public static class Choice_atomContext extends ParserRuleContext {
		public Lower_guardContext lower_guard() {
			return getRuleContext(Lower_guardContext.class,0);
		}
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Choice_elementsContext choice_elements() {
			return getRuleContext(Choice_elementsContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public Upper_guardContext upper_guard() {
			return getRuleContext(Upper_guardContext.class,0);
		}
		public Choice_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choice_atom; }
	}

	public final Choice_atomContext choice_atom() throws RecognitionException {
		Choice_atomContext _localctx = new Choice_atomContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_choice_atom);
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(295);
				lower_guard();
				setState(296);
				match(CURLY_OPEN);
				setState(297);
				choice_elements();
				setState(298);
				match(CURLY_CLOSE);
				setState(299);
				upper_guard();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(301);
				lower_guard();
				setState(302);
				match(CURLY_OPEN);
				setState(303);
				choice_elements();
				setState(304);
				match(CURLY_CLOSE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(306);
				match(CURLY_OPEN);
				setState(307);
				choice_elements();
				setState(308);
				match(CURLY_CLOSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(310);
				match(CURLY_OPEN);
				setState(311);
				choice_elements();
				setState(312);
				match(CURLY_CLOSE);
				setState(313);
				upper_guard();
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
	public static class Lower_guardContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public BinopContext binop() {
			return getRuleContext(BinopContext.class,0);
		}
		public Lower_guardContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lower_guard; }
	}

	public final Lower_guardContext lower_guard() throws RecognitionException {
		Lower_guardContext _localctx = new Lower_guardContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_lower_guard);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			term();
			setState(318);
			binop();
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
	public static class Upper_guardContext extends ParserRuleContext {
		public BinopContext binop() {
			return getRuleContext(BinopContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public Upper_guardContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upper_guard; }
	}

	public final Upper_guardContext upper_guard() throws RecognitionException {
		Upper_guardContext _localctx = new Upper_guardContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_upper_guard);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			binop();
			setState(321);
			term();
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
	public static class Choice_elementsContext extends ParserRuleContext {
		public Choice_elementContext choice_element() {
			return getRuleContext(Choice_elementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ASPCore2Parser.SEMICOLON, 0); }
		public Choice_elementsContext choice_elements() {
			return getRuleContext(Choice_elementsContext.class,0);
		}
		public Choice_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choice_elements; }
	}

	public final Choice_elementsContext choice_elements() throws RecognitionException {
		Choice_elementsContext _localctx = new Choice_elementsContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_choice_elements);
		try {
			setState(328);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(323);
				choice_element();
				setState(324);
				match(SEMICOLON);
				setState(325);
				choice_elements();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(327);
				choice_element();
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
	public static class Choice_elementContext extends ParserRuleContext {
		public Choice_element_atomContext choice_element_atom() {
			return getRuleContext(Choice_element_atomContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ASPCore2Parser.COLON, 0); }
		public Choice_elements_literalsContext choice_elements_literals() {
			return getRuleContext(Choice_elements_literalsContext.class,0);
		}
		public Choice_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choice_element; }
	}

	public final Choice_elementContext choice_element() throws RecognitionException {
		Choice_elementContext _localctx = new Choice_elementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_choice_element);
		try {
			setState(335);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(330);
				choice_element_atom();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(331);
				choice_element_atom();
				setState(332);
				match(COLON);
				setState(333);
				choice_elements_literals();
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
	public static class Choice_element_atomContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public Choice_element_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choice_element_atom; }
	}

	public final Choice_element_atomContext choice_element_atom() throws RecognitionException {
		Choice_element_atomContext _localctx = new Choice_element_atomContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_choice_element_atom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			atom();
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
	public static class Choice_elements_literalsContext extends ParserRuleContext {
		public Naf_literalContext naf_literal() {
			return getRuleContext(Naf_literalContext.class,0);
		}
		public Naf_literalsContext naf_literals() {
			return getRuleContext(Naf_literalsContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Choice_elements_literalsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_choice_elements_literals; }
	}

	public final Choice_elements_literalsContext choice_elements_literals() throws RecognitionException {
		Choice_elements_literalsContext _localctx = new Choice_elements_literalsContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_choice_elements_literals);
		try {
			setState(344);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(339);
				naf_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(340);
				naf_literals();
				setState(341);
				match(COMMA);
				setState(342);
				naf_literal();
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
	public static class Naf_literalsContext extends ParserRuleContext {
		public Naf_literalContext naf_literal() {
			return getRuleContext(Naf_literalContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Naf_literalsContext naf_literals() {
			return getRuleContext(Naf_literalsContext.class,0);
		}
		public Naf_literalsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_naf_literals; }
	}

	public final Naf_literalsContext naf_literals() throws RecognitionException {
		Naf_literalsContext _localctx = new Naf_literalsContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_naf_literals);
		try {
			setState(351);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(346);
				naf_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(347);
				naf_literal();
				setState(348);
				match(COMMA);
				setState(349);
				naf_literals();
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
	public static class Naf_literalContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Builtin_atomContext builtin_atom() {
			return getRuleContext(Builtin_atomContext.class,0);
		}
		public ExtAtomContext extAtom() {
			return getRuleContext(ExtAtomContext.class,0);
		}
		public Naf_literalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_naf_literal; }
	}

	public final Naf_literalContext naf_literal() throws RecognitionException {
		Naf_literalContext _localctx = new Naf_literalContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_naf_literal);
		try {
			setState(360);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(353);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(354);
				match(NAF);
				setState(355);
				classic_literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(356);
				builtin_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(357);
				extAtom();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(358);
				match(NAF);
				setState(359);
				extAtom();
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
	public static class Naf_literal_aggregateContext extends ParserRuleContext {
		public Naf_literalContext naf_literal() {
			return getRuleContext(Naf_literalContext.class,0);
		}
		public Aggregate_atomContext aggregate_atom() {
			return getRuleContext(Aggregate_atomContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Naf_literal_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_naf_literal_aggregate; }
	}

	public final Naf_literal_aggregateContext naf_literal_aggregate() throws RecognitionException {
		Naf_literal_aggregateContext _localctx = new Naf_literal_aggregateContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_naf_literal_aggregate);
		try {
			setState(366);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(362);
				naf_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(363);
				aggregate_atom();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(364);
				match(NAF);
				setState(365);
				aggregate_atom();
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
	public static class Existential_atomContext extends ParserRuleContext {
		public TerminalNode EXISTS() { return getToken(ASPCore2Parser.EXISTS, 0); }
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public Existential_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_existential_atom; }
	}

	public final Existential_atomContext existential_atom() throws RecognitionException {
		Existential_atomContext _localctx = new Existential_atomContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_existential_atom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(EXISTS);
			setState(369);
			vars();
			setState(370);
			atom();
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
	public static class Classic_literalContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode DASH() { return getToken(ASPCore2Parser.DASH, 0); }
		public Classic_literalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classic_literal; }
	}

	public final Classic_literalContext classic_literal() throws RecognitionException {
		Classic_literalContext _localctx = new Classic_literalContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_classic_literal);
		try {
			setState(375);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(372);
				atom();
				}
				break;
			case DASH:
				enterOuterAlt(_localctx, 2);
				{
				setState(373);
				match(DASH);
				setState(374);
				atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class AtomContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TermsContext terms() {
			return getRuleContext(TermsContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_atom);
		try {
			setState(387);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(377);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(378);
				identifier();
				setState(379);
				match(PARAM_OPEN);
				setState(380);
				terms();
				setState(381);
				match(PARAM_CLOSE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(383);
				identifier();
				setState(384);
				match(PARAM_OPEN);
				setState(385);
				match(PARAM_CLOSE);
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
	public static class ExtAtomContext extends ParserRuleContext {
		public TerminalNode AMPERSAND() { return getToken(ASPCore2Parser.AMPERSAND, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public List<TermsContext> terms() {
			return getRuleContexts(TermsContext.class);
		}
		public TermsContext terms(int i) {
			return getRuleContext(TermsContext.class,i);
		}
		public ExtSemicolContext extSemicol() {
			return getRuleContext(ExtSemicolContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public ExtAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extAtom; }
	}

	public final ExtAtomContext extAtom() throws RecognitionException {
		ExtAtomContext _localctx = new ExtAtomContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_extAtom);
		try {
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(389);
				match(AMPERSAND);
				setState(390);
				identifier();
				setState(391);
				match(PARAM_OPEN);
				setState(392);
				terms();
				setState(393);
				extSemicol();
				setState(394);
				terms();
				setState(395);
				match(PARAM_CLOSE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(397);
				match(AMPERSAND);
				setState(398);
				identifier();
				setState(399);
				match(PARAM_OPEN);
				setState(400);
				extSemicol();
				setState(401);
				terms();
				setState(402);
				match(PARAM_CLOSE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(404);
				match(AMPERSAND);
				setState(405);
				identifier();
				setState(406);
				match(PARAM_OPEN);
				setState(407);
				terms();
				setState(408);
				extSemicol();
				setState(409);
				match(PARAM_CLOSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(411);
				match(AMPERSAND);
				setState(412);
				identifier();
				setState(413);
				match(PARAM_OPEN);
				setState(414);
				match(PARAM_CLOSE);
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
	public static class ExtSemicolContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(ASPCore2Parser.SEMICOLON, 0); }
		public ExtSemicolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extSemicol; }
	}

	public final ExtSemicolContext extSemicol() throws RecognitionException {
		ExtSemicolContext _localctx = new ExtSemicolContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_extSemicol);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(SEMICOLON);
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
	public static class TermsContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TermsContext terms() {
			return getRuleContext(TermsContext.class,0);
		}
		public TermsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terms; }
	}

	public final TermsContext terms() throws RecognitionException {
		TermsContext _localctx = new TermsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_terms);
		try {
			setState(425);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(420);
				term();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(421);
				term();
				setState(422);
				match(COMMA);
				setState(423);
				terms();
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
	public static class Basic_termsContext extends ParserRuleContext {
		public Basic_termContext basic_term() {
			return getRuleContext(Basic_termContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Basic_termsContext basic_terms() {
			return getRuleContext(Basic_termsContext.class,0);
		}
		public Basic_termsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basic_terms; }
	}

	public final Basic_termsContext basic_terms() throws RecognitionException {
		Basic_termsContext _localctx = new Basic_termsContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_basic_terms);
		try {
			setState(432);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				basic_term();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(428);
				basic_term();
				setState(429);
				match(COMMA);
				setState(430);
				basic_terms();
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
	public static class Builtin_atomContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public BinopContext binop() {
			return getRuleContext(BinopContext.class,0);
		}
		public Builtin_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_builtin_atom; }
	}

	public final Builtin_atomContext builtin_atom() throws RecognitionException {
		Builtin_atomContext _localctx = new Builtin_atomContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_builtin_atom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			term();
			setState(435);
			binop();
			setState(436);
			term();
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
	public static class CompareopContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(ASPCore2Parser.EQUAL, 0); }
		public TerminalNode UNEQUAL() { return getToken(ASPCore2Parser.UNEQUAL, 0); }
		public CompareopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareop; }
	}

	public final CompareopContext compareop() throws RecognitionException {
		CompareopContext _localctx = new CompareopContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_compareop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			_la = _input.LA(1);
			if ( !(_la==EQUAL || _la==UNEQUAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class BinopContext extends ParserRuleContext {
		public CompareopContext compareop() {
			return getRuleContext(CompareopContext.class,0);
		}
		public LeftwardopContext leftwardop() {
			return getRuleContext(LeftwardopContext.class,0);
		}
		public RightwardopContext rightwardop() {
			return getRuleContext(RightwardopContext.class,0);
		}
		public BinopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binop; }
	}

	public final BinopContext binop() throws RecognitionException {
		BinopContext _localctx = new BinopContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_binop);
		try {
			setState(444);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(440);
				compareop();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(441);
				compareop();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(442);
				leftwardop();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(443);
				rightwardop();
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
	public static class Arithop1Context extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(ASPCore2Parser.PLUS, 0); }
		public TerminalNode DASH() { return getToken(ASPCore2Parser.DASH, 0); }
		public Arithop1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithop1; }
	}

	public final Arithop1Context arithop1() throws RecognitionException {
		Arithop1Context _localctx = new Arithop1Context(_ctx, getState());
		enterRule(_localctx, 58, RULE_arithop1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==DASH) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Arithop2Context extends ParserRuleContext {
		public TerminalNode TIMES() { return getToken(ASPCore2Parser.TIMES, 0); }
		public TerminalNode SLASH() { return getToken(ASPCore2Parser.SLASH, 0); }
		public TerminalNode BACK_SLASH() { return getToken(ASPCore2Parser.BACK_SLASH, 0); }
		public Arithop2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithop2; }
	}

	public final Arithop2Context arithop2() throws RecognitionException {
		Arithop2Context _localctx = new Arithop2Context(_ctx, getState());
		enterRule(_localctx, 60, RULE_arithop2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14680064L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Term_Context extends ParserRuleContext {
		public TerminalNode ANON_VAR() { return getToken(ASPCore2Parser.ANON_VAR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TermsContext terms() {
			return getRuleContext(TermsContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(ASPCore2Parser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(ASPCore2Parser.NUMBER, i);
		}
		public TerminalNode DDOT() { return getToken(ASPCore2Parser.DDOT, 0); }
		public TerminalNode DASH() { return getToken(ASPCore2Parser.DASH, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public Term_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term_; }
	}

	public final Term_Context term_() throws RecognitionException {
		Term_Context _localctx = new Term_Context(_ctx, getState());
		enterRule(_localctx, 62, RULE_term_);
		try {
			setState(461);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ANON_VAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(450);
				match(ANON_VAR);
				}
				break;
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(451);
				identifier();
				setState(452);
				match(PARAM_OPEN);
				setState(453);
				terms();
				setState(454);
				match(PARAM_CLOSE);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(456);
				match(NUMBER);
				setState(457);
				match(DDOT);
				setState(458);
				match(NUMBER);
				}
				break;
			case DASH:
				enterOuterAlt(_localctx, 4);
				{
				setState(459);
				match(DASH);
				setState(460);
				term();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Term__Context extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public Term__Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term__; }
	}

	public final Term__Context term__() throws RecognitionException {
		Term__Context _localctx = new Term__Context(_ctx, getState());
		enterRule(_localctx, 64, RULE_term__);
		try {
			setState(469);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(463);
				identifier();
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(464);
				match(NUMBER);
				}
				break;
			case PARAM_OPEN:
				enterOuterAlt(_localctx, 3);
				{
				setState(465);
				match(PARAM_OPEN);
				setState(466);
				term();
				setState(467);
				match(PARAM_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class TermContext extends ParserRuleContext {
		public Term_Context term_() {
			return getRuleContext(Term_Context.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_term);
		try {
			setState(474);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(471);
				term_();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(472);
				identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(473);
				expr();
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
	public static class ExprContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public Arithop1Context arithop1() {
			return getRuleContext(Arithop1Context.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_expr);
		try {
			setState(481);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(476);
				factor();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(477);
				factor();
				setState(478);
				arithop1();
				setState(479);
				expr();
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
	public static class FactorContext extends ParserRuleContext {
		public Term__Context term__() {
			return getRuleContext(Term__Context.class,0);
		}
		public Arithop2Context arithop2() {
			return getRuleContext(Arithop2Context.class,0);
		}
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_factor);
		try {
			setState(488);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(483);
				term__();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(484);
				term__();
				setState(485);
				arithop2();
				setState(486);
				factor();
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
	public static class Basic_termContext extends ParserRuleContext {
		public Ground_termContext ground_term() {
			return getRuleContext(Ground_termContext.class,0);
		}
		public Variable_termContext variable_term() {
			return getRuleContext(Variable_termContext.class,0);
		}
		public Functional_termContext functional_term() {
			return getRuleContext(Functional_termContext.class,0);
		}
		public Basic_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basic_term; }
	}

	public final Basic_termContext basic_term() throws RecognitionException {
		Basic_termContext _localctx = new Basic_termContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_basic_term);
		try {
			setState(493);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(490);
				ground_term();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(491);
				variable_term();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(492);
				functional_term();
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
	public static class Ground_termContext extends ParserRuleContext {
		public TerminalNode SYMBOLIC_CONSTANT() { return getToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
		public TerminalNode STRING() { return getToken(ASPCore2Parser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public TerminalNode DASH() { return getToken(ASPCore2Parser.DASH, 0); }
		public Ground_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ground_term; }
	}

	public final Ground_termContext ground_term() throws RecognitionException {
		Ground_termContext _localctx = new Ground_termContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_ground_term);
		try {
			setState(500);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
				enterOuterAlt(_localctx, 1);
				{
				setState(495);
				match(SYMBOLIC_CONSTANT);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(496);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(497);
				match(NUMBER);
				}
				break;
			case DASH:
				enterOuterAlt(_localctx, 4);
				{
				setState(498);
				match(DASH);
				setState(499);
				match(NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Variable_termContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(ASPCore2Parser.VARIABLE, 0); }
		public TerminalNode ANON_VAR() { return getToken(ASPCore2Parser.ANON_VAR, 0); }
		public Variable_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable_term; }
	}

	public final Variable_termContext variable_term() throws RecognitionException {
		Variable_termContext _localctx = new Variable_termContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_variable_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			_la = _input.LA(1);
			if ( !(_la==VARIABLE || _la==ANON_VAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Functional_termContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TermsContext terms() {
			return getRuleContext(TermsContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public Functional_termContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functional_term; }
	}

	public final Functional_termContext functional_term() throws RecognitionException {
		Functional_termContext _localctx = new Functional_termContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_functional_term);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			identifier();
			setState(505);
			match(PARAM_OPEN);
			setState(506);
			terms();
			setState(507);
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
	public static class VarsContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(ASPCore2Parser.VARIABLE, 0); }
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public VarsContext vars() {
			return getRuleContext(VarsContext.class,0);
		}
		public VarsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vars; }
	}

	public final VarsContext vars() throws RecognitionException {
		VarsContext _localctx = new VarsContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_vars);
		try {
			setState(513);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(509);
				match(VARIABLE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(510);
				match(VARIABLE);
				setState(511);
				match(COMMA);
				setState(512);
				vars();
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
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode SYMBOLIC_CONSTANT() { return getToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
		public TerminalNode STRING() { return getToken(ASPCore2Parser.STRING, 0); }
		public TerminalNode VARIABLE() { return getToken(ASPCore2Parser.VARIABLE, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class DirectiveContext extends ParserRuleContext {
		public TerminalNode DIRECTIVE_NAME() { return getToken(ASPCore2Parser.DIRECTIVE_NAME, 0); }
		public TerminalNode DIRECTIVE_VALUE() { return getToken(ASPCore2Parser.DIRECTIVE_VALUE, 0); }
		public DirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directive; }
	}

	public final DirectiveContext directive() throws RecognitionException {
		DirectiveContext _localctx = new DirectiveContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_directive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			match(DIRECTIVE_NAME);
			setState(518);
			match(DIRECTIVE_VALUE);
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
	public static class QueryContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode QUERY_MARK() { return getToken(ASPCore2Parser.QUERY_MARK, 0); }
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_query);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(520);
			atom();
			setState(521);
			match(QUERY_MARK);
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
	public static class Lower_guard_compare_aggregateContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public CompareopContext compareop() {
			return getRuleContext(CompareopContext.class,0);
		}
		public Lower_guard_compare_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lower_guard_compare_aggregate; }
	}

	public final Lower_guard_compare_aggregateContext lower_guard_compare_aggregate() throws RecognitionException {
		Lower_guard_compare_aggregateContext _localctx = new Lower_guard_compare_aggregateContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_lower_guard_compare_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			term();
			setState(524);
			compareop();
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
	public static class Upper_guard_compare_aggregateContext extends ParserRuleContext {
		public CompareopContext compareop() {
			return getRuleContext(CompareopContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public Upper_guard_compare_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upper_guard_compare_aggregate; }
	}

	public final Upper_guard_compare_aggregateContext upper_guard_compare_aggregate() throws RecognitionException {
		Upper_guard_compare_aggregateContext _localctx = new Upper_guard_compare_aggregateContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_upper_guard_compare_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			compareop();
			setState(527);
			term();
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
	public static class Compare_aggregateContext extends ParserRuleContext {
		public Lower_guard_compare_aggregateContext lower_guard_compare_aggregate() {
			return getRuleContext(Lower_guard_compare_aggregateContext.class,0);
		}
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public Upper_guard_compare_aggregateContext upper_guard_compare_aggregate() {
			return getRuleContext(Upper_guard_compare_aggregateContext.class,0);
		}
		public Compare_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compare_aggregate; }
	}

	public final Compare_aggregateContext compare_aggregate() throws RecognitionException {
		Compare_aggregateContext _localctx = new Compare_aggregateContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_compare_aggregate);
		try {
			setState(535);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
			case NUMBER:
			case DASH:
			case PARAM_OPEN:
			case ANON_VAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(529);
				lower_guard_compare_aggregate();
				setState(530);
				aggregate();
				}
				break;
			case AGGR_COUNT:
			case AGGR_MAX:
			case AGGR_MIN:
			case AGGR_SUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(532);
				aggregate();
				setState(533);
				upper_guard_compare_aggregate();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Lower_guard_leftward_left_aggregateContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public LeftwardopContext leftwardop() {
			return getRuleContext(LeftwardopContext.class,0);
		}
		public Lower_guard_leftward_left_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lower_guard_leftward_left_aggregate; }
	}

	public final Lower_guard_leftward_left_aggregateContext lower_guard_leftward_left_aggregate() throws RecognitionException {
		Lower_guard_leftward_left_aggregateContext _localctx = new Lower_guard_leftward_left_aggregateContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_lower_guard_leftward_left_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			term();
			setState(538);
			leftwardop();
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
	public static class Leftward_left_aggregateContext extends ParserRuleContext {
		public Lower_guard_leftward_left_aggregateContext lower_guard_leftward_left_aggregate() {
			return getRuleContext(Lower_guard_leftward_left_aggregateContext.class,0);
		}
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public Leftward_left_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_leftward_left_aggregate; }
	}

	public final Leftward_left_aggregateContext leftward_left_aggregate() throws RecognitionException {
		Leftward_left_aggregateContext _localctx = new Leftward_left_aggregateContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_leftward_left_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			lower_guard_leftward_left_aggregate();
			setState(541);
			aggregate();
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
	public static class Left_aggregateContext extends ParserRuleContext {
		public Leftward_left_aggregateContext leftward_left_aggregate() {
			return getRuleContext(Leftward_left_aggregateContext.class,0);
		}
		public Rightward_left_aggregateContext rightward_left_aggregate() {
			return getRuleContext(Rightward_left_aggregateContext.class,0);
		}
		public Left_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_left_aggregate; }
	}

	public final Left_aggregateContext left_aggregate() throws RecognitionException {
		Left_aggregateContext _localctx = new Left_aggregateContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_left_aggregate);
		try {
			setState(545);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(543);
				leftward_left_aggregate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(544);
				rightward_left_aggregate();
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
	public static class Lower_guard_rightward_left_aggregateContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public RightwardopContext rightwardop() {
			return getRuleContext(RightwardopContext.class,0);
		}
		public Lower_guard_rightward_left_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lower_guard_rightward_left_aggregate; }
	}

	public final Lower_guard_rightward_left_aggregateContext lower_guard_rightward_left_aggregate() throws RecognitionException {
		Lower_guard_rightward_left_aggregateContext _localctx = new Lower_guard_rightward_left_aggregateContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_lower_guard_rightward_left_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
			term();
			setState(548);
			rightwardop();
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
	public static class Rightward_left_aggregateContext extends ParserRuleContext {
		public Lower_guard_rightward_left_aggregateContext lower_guard_rightward_left_aggregate() {
			return getRuleContext(Lower_guard_rightward_left_aggregateContext.class,0);
		}
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public Rightward_left_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rightward_left_aggregate; }
	}

	public final Rightward_left_aggregateContext rightward_left_aggregate() throws RecognitionException {
		Rightward_left_aggregateContext _localctx = new Rightward_left_aggregateContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_rightward_left_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(550);
			lower_guard_rightward_left_aggregate();
			setState(551);
			aggregate();
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
	public static class Upper_guard_leftward_right_aggregateContext extends ParserRuleContext {
		public LeftwardopContext leftwardop() {
			return getRuleContext(LeftwardopContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public Upper_guard_leftward_right_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upper_guard_leftward_right_aggregate; }
	}

	public final Upper_guard_leftward_right_aggregateContext upper_guard_leftward_right_aggregate() throws RecognitionException {
		Upper_guard_leftward_right_aggregateContext _localctx = new Upper_guard_leftward_right_aggregateContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_upper_guard_leftward_right_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			leftwardop();
			setState(554);
			term();
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
	public static class Upper_guard_rightward_right_aggregateContext extends ParserRuleContext {
		public RightwardopContext rightwardop() {
			return getRuleContext(RightwardopContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public Upper_guard_rightward_right_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upper_guard_rightward_right_aggregate; }
	}

	public final Upper_guard_rightward_right_aggregateContext upper_guard_rightward_right_aggregate() throws RecognitionException {
		Upper_guard_rightward_right_aggregateContext _localctx = new Upper_guard_rightward_right_aggregateContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_upper_guard_rightward_right_aggregate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			rightwardop();
			setState(557);
			term();
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
	public static class Right_aggregateContext extends ParserRuleContext {
		public AggregateContext aggregate() {
			return getRuleContext(AggregateContext.class,0);
		}
		public Upper_guard_leftward_right_aggregateContext upper_guard_leftward_right_aggregate() {
			return getRuleContext(Upper_guard_leftward_right_aggregateContext.class,0);
		}
		public Upper_guard_rightward_right_aggregateContext upper_guard_rightward_right_aggregate() {
			return getRuleContext(Upper_guard_rightward_right_aggregateContext.class,0);
		}
		public Right_aggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_right_aggregate; }
	}

	public final Right_aggregateContext right_aggregate() throws RecognitionException {
		Right_aggregateContext _localctx = new Right_aggregateContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_right_aggregate);
		try {
			setState(565);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(559);
				aggregate();
				setState(560);
				upper_guard_leftward_right_aggregate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(562);
				aggregate();
				setState(563);
				upper_guard_rightward_right_aggregate();
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
	public static class Aggregate_atomContext extends ParserRuleContext {
		public Left_aggregateContext left_aggregate() {
			return getRuleContext(Left_aggregateContext.class,0);
		}
		public Right_aggregateContext right_aggregate() {
			return getRuleContext(Right_aggregateContext.class,0);
		}
		public Compare_aggregateContext compare_aggregate() {
			return getRuleContext(Compare_aggregateContext.class,0);
		}
		public Leftward_left_aggregateContext leftward_left_aggregate() {
			return getRuleContext(Leftward_left_aggregateContext.class,0);
		}
		public Upper_guard_leftward_right_aggregateContext upper_guard_leftward_right_aggregate() {
			return getRuleContext(Upper_guard_leftward_right_aggregateContext.class,0);
		}
		public Rightward_left_aggregateContext rightward_left_aggregate() {
			return getRuleContext(Rightward_left_aggregateContext.class,0);
		}
		public Upper_guard_rightward_right_aggregateContext upper_guard_rightward_right_aggregate() {
			return getRuleContext(Upper_guard_rightward_right_aggregateContext.class,0);
		}
		public Aggregate_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_atom; }
	}

	public final Aggregate_atomContext aggregate_atom() throws RecognitionException {
		Aggregate_atomContext _localctx = new Aggregate_atomContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_aggregate_atom);
		try {
			setState(576);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(567);
				left_aggregate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(568);
				right_aggregate();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(569);
				compare_aggregate();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(570);
				leftward_left_aggregate();
				setState(571);
				upper_guard_leftward_right_aggregate();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(573);
				rightward_left_aggregate();
				setState(574);
				upper_guard_rightward_right_aggregate();
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
	public static class LeftwardopContext extends ParserRuleContext {
		public TerminalNode LESS() { return getToken(ASPCore2Parser.LESS, 0); }
		public TerminalNode LESS_OR_EQ() { return getToken(ASPCore2Parser.LESS_OR_EQ, 0); }
		public LeftwardopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_leftwardop; }
	}

	public final LeftwardopContext leftwardop() throws RecognitionException {
		LeftwardopContext _localctx = new LeftwardopContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_leftwardop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(578);
			_la = _input.LA(1);
			if ( !(_la==LESS || _la==LESS_OR_EQ) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class RightwardopContext extends ParserRuleContext {
		public TerminalNode GREATER() { return getToken(ASPCore2Parser.GREATER, 0); }
		public TerminalNode GREATER_OR_EQ() { return getToken(ASPCore2Parser.GREATER_OR_EQ, 0); }
		public RightwardopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rightwardop; }
	}

	public final RightwardopContext rightwardop() throws RecognitionException {
		RightwardopContext _localctx = new RightwardopContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_rightwardop);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(580);
			_la = _input.LA(1);
			if ( !(_la==GREATER || _la==GREATER_OR_EQ) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class AggregateContext extends ParserRuleContext {
		public Aggregate_functionContext aggregate_function() {
			return getRuleContext(Aggregate_functionContext.class,0);
		}
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Aggregate_elementsContext aggregate_elements() {
			return getRuleContext(Aggregate_elementsContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public AggregateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate; }
	}

	public final AggregateContext aggregate() throws RecognitionException {
		AggregateContext _localctx = new AggregateContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_aggregate);
		try {
			setState(591);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(582);
				aggregate_function();
				setState(583);
				match(CURLY_OPEN);
				setState(584);
				aggregate_elements();
				setState(585);
				match(CURLY_CLOSE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(587);
				aggregate_function();
				setState(588);
				match(CURLY_OPEN);
				setState(589);
				match(CURLY_CLOSE);
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
	public static class Aggregate_elementsContext extends ParserRuleContext {
		public Aggregate_elementContext aggregate_element() {
			return getRuleContext(Aggregate_elementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ASPCore2Parser.SEMICOLON, 0); }
		public Aggregate_elementsContext aggregate_elements() {
			return getRuleContext(Aggregate_elementsContext.class,0);
		}
		public Aggregate_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_elements; }
	}

	public final Aggregate_elementsContext aggregate_elements() throws RecognitionException {
		Aggregate_elementsContext _localctx = new Aggregate_elementsContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_aggregate_elements);
		try {
			setState(598);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(593);
				aggregate_element();
				setState(594);
				match(SEMICOLON);
				setState(595);
				aggregate_elements();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(597);
				aggregate_element();
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
	public static class Aggregate_elementContext extends ParserRuleContext {
		public Basic_termsContext basic_terms() {
			return getRuleContext(Basic_termsContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ASPCore2Parser.COLON, 0); }
		public Naf_literalsContext naf_literals() {
			return getRuleContext(Naf_literalsContext.class,0);
		}
		public Aggregate_elementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_element; }
	}

	public final Aggregate_elementContext aggregate_element() throws RecognitionException {
		Aggregate_elementContext _localctx = new Aggregate_elementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_aggregate_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(600);
			basic_terms();
			setState(601);
			match(COLON);
			setState(602);
			naf_literals();
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
	public static class Aggregate_functionContext extends ParserRuleContext {
		public TerminalNode AGGR_COUNT() { return getToken(ASPCore2Parser.AGGR_COUNT, 0); }
		public TerminalNode AGGR_MAX() { return getToken(ASPCore2Parser.AGGR_MAX, 0); }
		public TerminalNode AGGR_MIN() { return getToken(ASPCore2Parser.AGGR_MIN, 0); }
		public TerminalNode AGGR_SUM() { return getToken(ASPCore2Parser.AGGR_SUM, 0); }
		public Aggregate_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_function; }
	}

	public final Aggregate_functionContext aggregate_function() throws RecognitionException {
		Aggregate_functionContext _localctx = new Aggregate_functionContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_aggregate_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16492674416640L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Annotation_globalContext extends ParserRuleContext {
		public Annotation_global_orderingContext annotation_global_ordering() {
			return getRuleContext(Annotation_global_orderingContext.class,0);
		}
		public Annotation_global_atom_indexedContext annotation_global_atom_indexed() {
			return getRuleContext(Annotation_global_atom_indexedContext.class,0);
		}
		public Annotation_global_partial_orderContext annotation_global_partial_order() {
			return getRuleContext(Annotation_global_partial_orderContext.class,0);
		}
		public Annotation_global_extatom_conversionContext annotation_global_extatom_conversion() {
			return getRuleContext(Annotation_global_extatom_conversionContext.class,0);
		}
		public Annotation_global_wasp_heuristicContext annotation_global_wasp_heuristic() {
			return getRuleContext(Annotation_global_wasp_heuristicContext.class,0);
		}
		public Annotation_global_wasp_propagatorContext annotation_global_wasp_propagator() {
			return getRuleContext(Annotation_global_wasp_propagatorContext.class,0);
		}
		public Annotation_globalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global; }
	}

	public final Annotation_globalContext annotation_global() throws RecognitionException {
		Annotation_globalContext _localctx = new Annotation_globalContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_annotation_global);
		try {
			setState(612);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ANNOTATION_GLOBAL_ORDERING:
				enterOuterAlt(_localctx, 1);
				{
				setState(606);
				annotation_global_ordering();
				}
				break;
			case ANNOTATION_GLOBAL_ATOM_INDEXED:
				enterOuterAlt(_localctx, 2);
				{
				setState(607);
				annotation_global_atom_indexed();
				}
				break;
			case ANNOTATION_GLOBAL_PARTIAL_ORDER:
				enterOuterAlt(_localctx, 3);
				{
				setState(608);
				annotation_global_partial_order();
				}
				break;
			case ANNOTATION_GLOBAL_EXTATOM_CONVERSION:
				enterOuterAlt(_localctx, 4);
				{
				setState(609);
				annotation_global_extatom_conversion();
				}
				break;
			case ANNOTATION_GLOBAL_WASP_HEURISTIC:
				enterOuterAlt(_localctx, 5);
				{
				setState(610);
				annotation_global_wasp_heuristic();
				}
				break;
			case ANNOTATION_GLOBAL_WASP_PROPAGATOR:
				enterOuterAlt(_localctx, 6);
				{
				setState(611);
				annotation_global_wasp_propagator();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Annotations_ruleContext extends ParserRuleContext {
		public Annotation_ruleContext annotation_rule() {
			return getRuleContext(Annotation_ruleContext.class,0);
		}
		public Annotations_ruleContext annotations_rule() {
			return getRuleContext(Annotations_ruleContext.class,0);
		}
		public Annotations_ruleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotations_rule; }
	}

	public final Annotations_ruleContext annotations_rule() throws RecognitionException {
		Annotations_ruleContext _localctx = new Annotations_ruleContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_annotations_rule);
		try {
			setState(618);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(614);
				annotation_rule();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(615);
				annotation_rule();
				setState(616);
				annotations_rule();
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
	public static class Annotation_ruleContext extends ParserRuleContext {
		public Annotation_rule_orderingContext annotation_rule_ordering() {
			return getRuleContext(Annotation_rule_orderingContext.class,0);
		}
		public Annotation_rule_atom_indexedContext annotation_rule_atom_indexed() {
			return getRuleContext(Annotation_rule_atom_indexedContext.class,0);
		}
		public Annotation_rule_partial_orderContext annotation_rule_partial_order() {
			return getRuleContext(Annotation_rule_partial_orderContext.class,0);
		}
		public Annotation_rule_projectionContext annotation_rule_projection() {
			return getRuleContext(Annotation_rule_projectionContext.class,0);
		}
		public Annotation_rule_rewriting_arithContext annotation_rule_rewriting_arith() {
			return getRuleContext(Annotation_rule_rewriting_arithContext.class,0);
		}
		public Annotation_rule_align_substitutionsContext annotation_rule_align_substitutions() {
			return getRuleContext(Annotation_rule_align_substitutionsContext.class,0);
		}
		public Annotation_rule_look_aheadContext annotation_rule_look_ahead() {
			return getRuleContext(Annotation_rule_look_aheadContext.class,0);
		}
		public Annotation_rule_to_decomposeContext annotation_rule_to_decompose() {
			return getRuleContext(Annotation_rule_to_decomposeContext.class,0);
		}
		public Annotation_rule_to_not_decomposeContext annotation_rule_to_not_decompose() {
			return getRuleContext(Annotation_rule_to_not_decomposeContext.class,0);
		}
		public Annotation_ruleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule; }
	}

	public final Annotation_ruleContext annotation_rule() throws RecognitionException {
		Annotation_ruleContext _localctx = new Annotation_ruleContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_annotation_rule);
		try {
			setState(629);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ANNOTATION_RULE_ORDERING:
				enterOuterAlt(_localctx, 1);
				{
				setState(620);
				annotation_rule_ordering();
				}
				break;
			case ANNOTATION_RULE_ATOM_INDEXED:
				enterOuterAlt(_localctx, 2);
				{
				setState(621);
				annotation_rule_atom_indexed();
				}
				break;
			case ANNOTATION_RULE_PARTIAL_ORDER:
				enterOuterAlt(_localctx, 3);
				{
				setState(622);
				annotation_rule_partial_order();
				}
				break;
			case ANNOTATION_RULE_PROJECTION:
				enterOuterAlt(_localctx, 4);
				{
				setState(623);
				annotation_rule_projection();
				}
				break;
			case ANNOTATION_RULE_REWRITING_ARITH:
				enterOuterAlt(_localctx, 5);
				{
				setState(624);
				annotation_rule_rewriting_arith();
				}
				break;
			case ANNOTATION_RULE_ALIGN_SUBSTITUTIONS:
				enterOuterAlt(_localctx, 6);
				{
				setState(625);
				annotation_rule_align_substitutions();
				}
				break;
			case ANNOTATION_RULE_LOOK_AHEAD:
				enterOuterAlt(_localctx, 7);
				{
				setState(626);
				annotation_rule_look_ahead();
				}
				break;
			case ANNOTATION_RULE_TO_DECOMPOSE:
				enterOuterAlt(_localctx, 8);
				{
				setState(627);
				annotation_rule_to_decompose();
				}
				break;
			case ANNOTATION_RULE_TO_NOT_DECOMPOSE:
				enterOuterAlt(_localctx, 9);
				{
				setState(628);
				annotation_rule_to_not_decompose();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Annotation_rule_to_decomposeContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_TO_DECOMPOSE() { return getToken(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_to_decomposeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_to_decompose; }
	}

	public final Annotation_rule_to_decomposeContext annotation_rule_to_decompose() throws RecognitionException {
		Annotation_rule_to_decomposeContext _localctx = new Annotation_rule_to_decomposeContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_annotation_rule_to_decompose);
		try {
			setState(637);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(631);
				match(ANNOTATION_RULE_TO_DECOMPOSE);
				setState(632);
				match(PARAM_OPEN);
				setState(633);
				match(PARAM_CLOSE);
				setState(634);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(635);
				match(ANNOTATION_RULE_TO_DECOMPOSE);
				setState(636);
				match(DOT);
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
	public static class Annotation_rule_to_not_decomposeContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_TO_NOT_DECOMPOSE() { return getToken(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_to_not_decomposeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_to_not_decompose; }
	}

	public final Annotation_rule_to_not_decomposeContext annotation_rule_to_not_decompose() throws RecognitionException {
		Annotation_rule_to_not_decomposeContext _localctx = new Annotation_rule_to_not_decomposeContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_annotation_rule_to_not_decompose);
		try {
			setState(645);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(639);
				match(ANNOTATION_RULE_TO_NOT_DECOMPOSE);
				setState(640);
				match(PARAM_OPEN);
				setState(641);
				match(PARAM_CLOSE);
				setState(642);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(643);
				match(ANNOTATION_RULE_TO_NOT_DECOMPOSE);
				setState(644);
				match(DOT);
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
	public static class Annotation_rule_orderingContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_ORDERING() { return getToken(ASPCore2Parser.ANNOTATION_RULE_ORDERING, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_ORDERING_VALUE() { return getToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
		public TerminalNode EQUAL() { return getToken(ASPCore2Parser.EQUAL, 0); }
		public Rule_ordering_typeContext rule_ordering_type() {
			return getRuleContext(Rule_ordering_typeContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_orderingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_ordering; }
	}

	public final Annotation_rule_orderingContext annotation_rule_ordering() throws RecognitionException {
		Annotation_rule_orderingContext _localctx = new Annotation_rule_orderingContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_annotation_rule_ordering);
		try {
			setState(661);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(647);
				match(ANNOTATION_RULE_ORDERING);
				setState(648);
				match(PARAM_OPEN);
				setState(649);
				match(ANNOTATION_ORDERING_VALUE);
				setState(650);
				match(EQUAL);
				setState(651);
				rule_ordering_type();
				setState(652);
				match(PARAM_CLOSE);
				setState(653);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(655);
				match(ANNOTATION_RULE_ORDERING);
				setState(656);
				match(PARAM_OPEN);
				setState(657);
				rule_ordering_type();
				setState(658);
				match(PARAM_CLOSE);
				setState(659);
				match(DOT);
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
	public static class Annotation_global_orderingContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_ORDERING() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_ORDERING_VALUE() { return getToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
		public TerminalNode EQUAL() { return getToken(ASPCore2Parser.EQUAL, 0); }
		public Global_ordering_typeContext global_ordering_type() {
			return getRuleContext(Global_ordering_typeContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_orderingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_ordering; }
	}

	public final Annotation_global_orderingContext annotation_global_ordering() throws RecognitionException {
		Annotation_global_orderingContext _localctx = new Annotation_global_orderingContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_annotation_global_ordering);
		try {
			setState(677);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(663);
				match(ANNOTATION_GLOBAL_ORDERING);
				setState(664);
				match(PARAM_OPEN);
				setState(665);
				match(ANNOTATION_ORDERING_VALUE);
				setState(666);
				match(EQUAL);
				setState(667);
				global_ordering_type();
				setState(668);
				match(PARAM_CLOSE);
				setState(669);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(671);
				match(ANNOTATION_GLOBAL_ORDERING);
				setState(672);
				match(PARAM_OPEN);
				setState(673);
				global_ordering_type();
				setState(674);
				match(PARAM_CLOSE);
				setState(675);
				match(DOT);
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
	public static class Annotation_global_extatom_conversionContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_EXTATOM_CONVERSION() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_EXTATOM_PREDICATE() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public Annotation_extpredicateContext annotation_extpredicate() {
			return getRuleContext(Annotation_extpredicateContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE, 0); }
		public Extatom_conv_typesContext extatom_conv_types() {
			return getRuleContext(Extatom_conv_typesContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_extatom_conversionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_extatom_conversion; }
	}

	public final Annotation_global_extatom_conversionContext annotation_global_extatom_conversion() throws RecognitionException {
		Annotation_global_extatom_conversionContext _localctx = new Annotation_global_extatom_conversionContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_annotation_global_extatom_conversion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(679);
			match(ANNOTATION_GLOBAL_EXTATOM_CONVERSION);
			setState(680);
			match(PARAM_OPEN);
			setState(681);
			match(ANNOTATION_EXTATOM_PREDICATE);
			setState(682);
			match(EQUAL);
			setState(683);
			annotation_extpredicate();
			setState(684);
			match(COMMA);
			setState(685);
			match(ANNOTATION_EXTATOM_TYPE);
			setState(686);
			match(EQUAL);
			setState(687);
			extatom_conv_types();
			setState(688);
			match(PARAM_CLOSE);
			setState(689);
			match(DOT);
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
	public static class Annotation_extpredicateContext extends ParserRuleContext {
		public TerminalNode AMPERSAND() { return getToken(ASPCore2Parser.AMPERSAND, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Annotation_extpredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_extpredicate; }
	}

	public final Annotation_extpredicateContext annotation_extpredicate() throws RecognitionException {
		Annotation_extpredicateContext _localctx = new Annotation_extpredicateContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_annotation_extpredicate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(691);
			match(AMPERSAND);
			setState(692);
			identifier();
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
	public static class Extatom_conv_typesContext extends ParserRuleContext {
		public Extatom_conv_typeContext extatom_conv_type() {
			return getRuleContext(Extatom_conv_typeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Extatom_conv_typesContext extatom_conv_types() {
			return getRuleContext(Extatom_conv_typesContext.class,0);
		}
		public Extatom_conv_typesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extatom_conv_types; }
	}

	public final Extatom_conv_typesContext extatom_conv_types() throws RecognitionException {
		Extatom_conv_typesContext _localctx = new Extatom_conv_typesContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_extatom_conv_types);
		try {
			setState(699);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(694);
				extatom_conv_type();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(695);
				extatom_conv_type();
				setState(696);
				match(COMMA);
				setState(697);
				extatom_conv_types();
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
	public static class Extatom_conv_typeContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_EXTATOM_TYPE_QCONST() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_CONST() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_U_INT() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_UT_INT() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_UR_INT() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_T_INT() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT, 0); }
		public TerminalNode ANNOTATION_EXTATOM_TYPE_R_INT() { return getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT, 0); }
		public Extatom_conv_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extatom_conv_type; }
	}

	public final Extatom_conv_typeContext extatom_conv_type() throws RecognitionException {
		Extatom_conv_typeContext _localctx = new Extatom_conv_typeContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_extatom_conv_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(701);
			_la = _input.LA(1);
			if ( !(((((_la - 61)) & ~0x3f) == 0 && ((1L << (_la - 61)) & 127L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Rule_ordering_typeContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public Rule_ordering_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_ordering_type; }
	}

	public final Rule_ordering_typeContext rule_ordering_type() throws RecognitionException {
		Rule_ordering_typeContext _localctx = new Rule_ordering_typeContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_rule_ordering_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(703);
			match(NUMBER);
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
	public static class Global_ordering_typeContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public Global_ordering_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_ordering_type; }
	}

	public final Global_ordering_typeContext global_ordering_type() throws RecognitionException {
		Global_ordering_typeContext _localctx = new Global_ordering_typeContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_global_ordering_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(705);
			match(NUMBER);
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
	public static class Annotation_rule_atom_indexedContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_ATOM_INDEXED() { return getToken(ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_ATOM_INDEXED_ATOM() { return getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public Rule_naf_literal_annotationContext rule_naf_literal_annotation() {
			return getRuleContext(Rule_naf_literal_annotationContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_ATOM_INDEXED_ARGUMENTS() { return getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Rule_indexing_argumentsContext rule_indexing_arguments() {
			return getRuleContext(Rule_indexing_argumentsContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_atom_indexedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_atom_indexed; }
	}

	public final Annotation_rule_atom_indexedContext annotation_rule_atom_indexed() throws RecognitionException {
		Annotation_rule_atom_indexedContext _localctx = new Annotation_rule_atom_indexedContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_annotation_rule_atom_indexed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(707);
			match(ANNOTATION_RULE_ATOM_INDEXED);
			setState(708);
			match(PARAM_OPEN);
			setState(709);
			match(ANNOTATION_ATOM_INDEXED_ATOM);
			setState(710);
			match(EQUAL);
			setState(711);
			rule_naf_literal_annotation();
			setState(712);
			match(COMMA);
			setState(713);
			match(ANNOTATION_ATOM_INDEXED_ARGUMENTS);
			setState(714);
			match(EQUAL);
			setState(715);
			match(CURLY_OPEN);
			setState(716);
			rule_indexing_arguments();
			setState(717);
			match(CURLY_CLOSE);
			setState(718);
			match(PARAM_CLOSE);
			setState(719);
			match(DOT);
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
	public static class Annotation_global_atom_indexedContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_ATOM_INDEXED() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_ATOM_INDEXED_ATOM() { return getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public Global_naf_literal_annotationContext global_naf_literal_annotation() {
			return getRuleContext(Global_naf_literal_annotationContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_ATOM_INDEXED_ARGUMENTS() { return getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Global_indexing_argumentsContext global_indexing_arguments() {
			return getRuleContext(Global_indexing_argumentsContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_atom_indexedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_atom_indexed; }
	}

	public final Annotation_global_atom_indexedContext annotation_global_atom_indexed() throws RecognitionException {
		Annotation_global_atom_indexedContext _localctx = new Annotation_global_atom_indexedContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_annotation_global_atom_indexed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(721);
			match(ANNOTATION_GLOBAL_ATOM_INDEXED);
			setState(722);
			match(PARAM_OPEN);
			setState(723);
			match(ANNOTATION_ATOM_INDEXED_ATOM);
			setState(724);
			match(EQUAL);
			setState(725);
			global_naf_literal_annotation();
			setState(726);
			match(COMMA);
			setState(727);
			match(ANNOTATION_ATOM_INDEXED_ARGUMENTS);
			setState(728);
			match(EQUAL);
			setState(729);
			match(CURLY_OPEN);
			setState(730);
			global_indexing_arguments();
			setState(731);
			match(CURLY_CLOSE);
			setState(732);
			match(PARAM_CLOSE);
			setState(733);
			match(DOT);
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
	public static class Rule_indexing_argumentsContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Rule_indexing_argumentsContext rule_indexing_arguments() {
			return getRuleContext(Rule_indexing_argumentsContext.class,0);
		}
		public Rule_indexing_argumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_indexing_arguments; }
	}

	public final Rule_indexing_argumentsContext rule_indexing_arguments() throws RecognitionException {
		Rule_indexing_argumentsContext _localctx = new Rule_indexing_argumentsContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_rule_indexing_arguments);
		try {
			setState(739);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(735);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(736);
				match(NUMBER);
				setState(737);
				match(COMMA);
				setState(738);
				rule_indexing_arguments();
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
	public static class Rule_naf_literal_annotationContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Rule_naf_literal_annotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_naf_literal_annotation; }
	}

	public final Rule_naf_literal_annotationContext rule_naf_literal_annotation() throws RecognitionException {
		Rule_naf_literal_annotationContext _localctx = new Rule_naf_literal_annotationContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_rule_naf_literal_annotation);
		try {
			setState(744);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
			case DASH:
				enterOuterAlt(_localctx, 1);
				{
				setState(741);
				classic_literal();
				}
				break;
			case NAF:
				enterOuterAlt(_localctx, 2);
				{
				setState(742);
				match(NAF);
				setState(743);
				classic_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Global_indexing_argumentsContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Global_indexing_argumentsContext global_indexing_arguments() {
			return getRuleContext(Global_indexing_argumentsContext.class,0);
		}
		public Global_indexing_argumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_indexing_arguments; }
	}

	public final Global_indexing_argumentsContext global_indexing_arguments() throws RecognitionException {
		Global_indexing_argumentsContext _localctx = new Global_indexing_argumentsContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_global_indexing_arguments);
		try {
			setState(750);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(746);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(747);
				match(NUMBER);
				setState(748);
				match(COMMA);
				setState(749);
				global_indexing_arguments();
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
	public static class Global_naf_literal_annotationContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Global_naf_literal_annotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_naf_literal_annotation; }
	}

	public final Global_naf_literal_annotationContext global_naf_literal_annotation() throws RecognitionException {
		Global_naf_literal_annotationContext _localctx = new Global_naf_literal_annotationContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_global_naf_literal_annotation);
		try {
			setState(755);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYMBOLIC_CONSTANT:
			case VARIABLE:
			case STRING:
			case DASH:
				enterOuterAlt(_localctx, 1);
				{
				setState(752);
				classic_literal();
				}
				break;
			case NAF:
				enterOuterAlt(_localctx, 2);
				{
				setState(753);
				match(NAF);
				setState(754);
				classic_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Rule_atom_annotation_beforeContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Builtin_atomContext builtin_atom() {
			return getRuleContext(Builtin_atomContext.class,0);
		}
		public Aggregate_atomContext aggregate_atom() {
			return getRuleContext(Aggregate_atomContext.class,0);
		}
		public ExtAtomContext extAtom() {
			return getRuleContext(ExtAtomContext.class,0);
		}
		public Rule_atom_annotation_beforeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_atom_annotation_before; }
	}

	public final Rule_atom_annotation_beforeContext rule_atom_annotation_before() throws RecognitionException {
		Rule_atom_annotation_beforeContext _localctx = new Rule_atom_annotation_beforeContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_rule_atom_annotation_before);
		try {
			setState(767);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(757);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(758);
				match(NAF);
				setState(759);
				classic_literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(760);
				builtin_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(761);
				aggregate_atom();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(762);
				match(NAF);
				setState(763);
				aggregate_atom();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(764);
				extAtom();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(765);
				match(NAF);
				setState(766);
				extAtom();
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
	public static class Global_atom_annotation_beforeContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Builtin_atomContext builtin_atom() {
			return getRuleContext(Builtin_atomContext.class,0);
		}
		public Aggregate_atomContext aggregate_atom() {
			return getRuleContext(Aggregate_atomContext.class,0);
		}
		public ExtAtomContext extAtom() {
			return getRuleContext(ExtAtomContext.class,0);
		}
		public Global_atom_annotation_beforeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_atom_annotation_before; }
	}

	public final Global_atom_annotation_beforeContext global_atom_annotation_before() throws RecognitionException {
		Global_atom_annotation_beforeContext _localctx = new Global_atom_annotation_beforeContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_global_atom_annotation_before);
		try {
			setState(779);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(769);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(770);
				match(NAF);
				setState(771);
				classic_literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(772);
				builtin_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(773);
				aggregate_atom();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(774);
				match(NAF);
				setState(775);
				aggregate_atom();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(776);
				extAtom();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(777);
				match(NAF);
				setState(778);
				extAtom();
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
	public static class Rule_atom_annotation_afterContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Builtin_atomContext builtin_atom() {
			return getRuleContext(Builtin_atomContext.class,0);
		}
		public Aggregate_atomContext aggregate_atom() {
			return getRuleContext(Aggregate_atomContext.class,0);
		}
		public ExtAtomContext extAtom() {
			return getRuleContext(ExtAtomContext.class,0);
		}
		public Rule_atom_annotation_afterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_atom_annotation_after; }
	}

	public final Rule_atom_annotation_afterContext rule_atom_annotation_after() throws RecognitionException {
		Rule_atom_annotation_afterContext _localctx = new Rule_atom_annotation_afterContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_rule_atom_annotation_after);
		try {
			setState(791);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(781);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(782);
				match(NAF);
				setState(783);
				classic_literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(784);
				builtin_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(785);
				aggregate_atom();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(786);
				match(NAF);
				setState(787);
				aggregate_atom();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(788);
				extAtom();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(789);
				match(NAF);
				setState(790);
				extAtom();
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
	public static class Global_atom_annotation_afterContext extends ParserRuleContext {
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public TerminalNode NAF() { return getToken(ASPCore2Parser.NAF, 0); }
		public Builtin_atomContext builtin_atom() {
			return getRuleContext(Builtin_atomContext.class,0);
		}
		public Aggregate_atomContext aggregate_atom() {
			return getRuleContext(Aggregate_atomContext.class,0);
		}
		public ExtAtomContext extAtom() {
			return getRuleContext(ExtAtomContext.class,0);
		}
		public Global_atom_annotation_afterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_atom_annotation_after; }
	}

	public final Global_atom_annotation_afterContext global_atom_annotation_after() throws RecognitionException {
		Global_atom_annotation_afterContext _localctx = new Global_atom_annotation_afterContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_global_atom_annotation_after);
		try {
			setState(803);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(793);
				classic_literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(794);
				match(NAF);
				setState(795);
				classic_literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(796);
				builtin_atom();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(797);
				aggregate_atom();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(798);
				match(NAF);
				setState(799);
				aggregate_atom();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(800);
				extAtom();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(801);
				match(NAF);
				setState(802);
				extAtom();
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
	public static class Rule_atoms_annotation_beforeContext extends ParserRuleContext {
		public Rule_atom_annotation_beforeContext rule_atom_annotation_before() {
			return getRuleContext(Rule_atom_annotation_beforeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Rule_atoms_annotation_beforeContext rule_atoms_annotation_before() {
			return getRuleContext(Rule_atoms_annotation_beforeContext.class,0);
		}
		public Rule_atoms_annotation_beforeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_atoms_annotation_before; }
	}

	public final Rule_atoms_annotation_beforeContext rule_atoms_annotation_before() throws RecognitionException {
		Rule_atoms_annotation_beforeContext _localctx = new Rule_atoms_annotation_beforeContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_rule_atoms_annotation_before);
		try {
			setState(810);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(805);
				rule_atom_annotation_before();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(806);
				rule_atom_annotation_before();
				setState(807);
				match(COMMA);
				setState(808);
				rule_atoms_annotation_before();
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
	public static class Global_atoms_annotation_beforeContext extends ParserRuleContext {
		public Global_atom_annotation_beforeContext global_atom_annotation_before() {
			return getRuleContext(Global_atom_annotation_beforeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Global_atoms_annotation_beforeContext global_atoms_annotation_before() {
			return getRuleContext(Global_atoms_annotation_beforeContext.class,0);
		}
		public Global_atoms_annotation_beforeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_atoms_annotation_before; }
	}

	public final Global_atoms_annotation_beforeContext global_atoms_annotation_before() throws RecognitionException {
		Global_atoms_annotation_beforeContext _localctx = new Global_atoms_annotation_beforeContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_global_atoms_annotation_before);
		try {
			setState(817);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(812);
				global_atom_annotation_before();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(813);
				global_atom_annotation_before();
				setState(814);
				match(COMMA);
				setState(815);
				global_atoms_annotation_before();
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
	public static class Rule_atoms_annotation_afterContext extends ParserRuleContext {
		public Rule_atom_annotation_afterContext rule_atom_annotation_after() {
			return getRuleContext(Rule_atom_annotation_afterContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public Rule_atoms_annotation_afterContext rule_atoms_annotation_after() {
			return getRuleContext(Rule_atoms_annotation_afterContext.class,0);
		}
		public Rule_atoms_annotation_afterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rule_atoms_annotation_after; }
	}

	public final Rule_atoms_annotation_afterContext rule_atoms_annotation_after() throws RecognitionException {
		Rule_atoms_annotation_afterContext _localctx = new Rule_atoms_annotation_afterContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_rule_atoms_annotation_after);
		try {
			setState(824);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(819);
				rule_atom_annotation_after();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(820);
				rule_atom_annotation_after();
				setState(821);
				match(COMMA);
				setState(822);
				rule_atoms_annotation_after();
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
	public static class Global_atoms_annotation_afterContext extends ParserRuleContext {
		public Global_atom_annotation_afterContext global_atom_annotation_after() {
			return getRuleContext(Global_atom_annotation_afterContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public List<Global_atoms_annotation_afterContext> global_atoms_annotation_after() {
			return getRuleContexts(Global_atoms_annotation_afterContext.class);
		}
		public Global_atoms_annotation_afterContext global_atoms_annotation_after(int i) {
			return getRuleContext(Global_atoms_annotation_afterContext.class,i);
		}
		public Global_atoms_annotation_afterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global_atoms_annotation_after; }
	}

	public final Global_atoms_annotation_afterContext global_atoms_annotation_after() throws RecognitionException {
		Global_atoms_annotation_afterContext _localctx = new Global_atoms_annotation_afterContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_global_atoms_annotation_after);
		try {
			setState(832);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(826);
				global_atom_annotation_after();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(827);
				global_atom_annotation_after();
				setState(828);
				match(COMMA);
				setState(829);
				global_atoms_annotation_after();
				setState(830);
				global_atoms_annotation_after();
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
	public static class Annotation_rule_partial_order_beginContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_PARTIAL_ORDER() { return getToken(ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER, 0); }
		public Annotation_rule_partial_order_beginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_partial_order_begin; }
	}

	public final Annotation_rule_partial_order_beginContext annotation_rule_partial_order_begin() throws RecognitionException {
		Annotation_rule_partial_order_beginContext _localctx = new Annotation_rule_partial_order_beginContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_annotation_rule_partial_order_begin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(834);
			match(ANNOTATION_RULE_PARTIAL_ORDER);
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
	public static class Annotation_global_partial_order_beginContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_PARTIAL_ORDER() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER, 0); }
		public Annotation_global_partial_order_beginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_partial_order_begin; }
	}

	public final Annotation_global_partial_order_beginContext annotation_global_partial_order_begin() throws RecognitionException {
		Annotation_global_partial_order_beginContext _localctx = new Annotation_global_partial_order_beginContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_annotation_global_partial_order_begin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(836);
			match(ANNOTATION_GLOBAL_PARTIAL_ORDER);
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
	public static class Annotation_rule_partial_orderContext extends ParserRuleContext {
		public Annotation_rule_partial_order_beginContext annotation_rule_partial_order_begin() {
			return getRuleContext(Annotation_rule_partial_order_beginContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_PARTIAL_ORDER_BEFORE() { return getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public List<TerminalNode> CURLY_OPEN() { return getTokens(ASPCore2Parser.CURLY_OPEN); }
		public TerminalNode CURLY_OPEN(int i) {
			return getToken(ASPCore2Parser.CURLY_OPEN, i);
		}
		public Rule_atoms_annotation_beforeContext rule_atoms_annotation_before() {
			return getRuleContext(Rule_atoms_annotation_beforeContext.class,0);
		}
		public List<TerminalNode> CURLY_CLOSE() { return getTokens(ASPCore2Parser.CURLY_CLOSE); }
		public TerminalNode CURLY_CLOSE(int i) {
			return getToken(ASPCore2Parser.CURLY_CLOSE, i);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_PARTIAL_ORDER_AFTER() { return getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
		public Rule_atoms_annotation_afterContext rule_atoms_annotation_after() {
			return getRuleContext(Rule_atoms_annotation_afterContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_partial_orderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_partial_order; }
	}

	public final Annotation_rule_partial_orderContext annotation_rule_partial_order() throws RecognitionException {
		Annotation_rule_partial_orderContext _localctx = new Annotation_rule_partial_orderContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_annotation_rule_partial_order);
		try {
			setState(870);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(838);
				annotation_rule_partial_order_begin();
				setState(839);
				match(PARAM_OPEN);
				setState(840);
				match(ANNOTATION_PARTIAL_ORDER_BEFORE);
				setState(841);
				match(EQUAL);
				setState(842);
				match(CURLY_OPEN);
				setState(843);
				rule_atoms_annotation_before();
				setState(844);
				match(CURLY_CLOSE);
				setState(845);
				match(COMMA);
				setState(846);
				match(ANNOTATION_PARTIAL_ORDER_AFTER);
				setState(847);
				match(EQUAL);
				setState(848);
				match(CURLY_OPEN);
				setState(849);
				rule_atoms_annotation_after();
				setState(850);
				match(CURLY_CLOSE);
				setState(851);
				match(PARAM_CLOSE);
				setState(852);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(854);
				annotation_rule_partial_order_begin();
				setState(855);
				match(PARAM_OPEN);
				setState(856);
				match(ANNOTATION_PARTIAL_ORDER_AFTER);
				setState(857);
				match(EQUAL);
				setState(858);
				match(CURLY_OPEN);
				setState(859);
				rule_atoms_annotation_after();
				setState(860);
				match(CURLY_CLOSE);
				setState(861);
				match(COMMA);
				setState(862);
				match(ANNOTATION_PARTIAL_ORDER_BEFORE);
				setState(863);
				match(EQUAL);
				setState(864);
				match(CURLY_OPEN);
				setState(865);
				rule_atoms_annotation_before();
				setState(866);
				match(CURLY_CLOSE);
				setState(867);
				match(PARAM_CLOSE);
				setState(868);
				match(DOT);
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
	public static class Annotation_global_partial_orderContext extends ParserRuleContext {
		public Annotation_global_partial_order_beginContext annotation_global_partial_order_begin() {
			return getRuleContext(Annotation_global_partial_order_beginContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_PARTIAL_ORDER_BEFORE() { return getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public List<TerminalNode> CURLY_OPEN() { return getTokens(ASPCore2Parser.CURLY_OPEN); }
		public TerminalNode CURLY_OPEN(int i) {
			return getToken(ASPCore2Parser.CURLY_OPEN, i);
		}
		public Global_atoms_annotation_beforeContext global_atoms_annotation_before() {
			return getRuleContext(Global_atoms_annotation_beforeContext.class,0);
		}
		public List<TerminalNode> CURLY_CLOSE() { return getTokens(ASPCore2Parser.CURLY_CLOSE); }
		public TerminalNode CURLY_CLOSE(int i) {
			return getToken(ASPCore2Parser.CURLY_CLOSE, i);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_PARTIAL_ORDER_AFTER() { return getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
		public Global_atoms_annotation_afterContext global_atoms_annotation_after() {
			return getRuleContext(Global_atoms_annotation_afterContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_partial_orderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_partial_order; }
	}

	public final Annotation_global_partial_orderContext annotation_global_partial_order() throws RecognitionException {
		Annotation_global_partial_orderContext _localctx = new Annotation_global_partial_orderContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_annotation_global_partial_order);
		try {
			setState(904);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(872);
				annotation_global_partial_order_begin();
				setState(873);
				match(PARAM_OPEN);
				setState(874);
				match(ANNOTATION_PARTIAL_ORDER_BEFORE);
				setState(875);
				match(EQUAL);
				setState(876);
				match(CURLY_OPEN);
				setState(877);
				global_atoms_annotation_before();
				setState(878);
				match(CURLY_CLOSE);
				setState(879);
				match(COMMA);
				setState(880);
				match(ANNOTATION_PARTIAL_ORDER_AFTER);
				setState(881);
				match(EQUAL);
				setState(882);
				match(CURLY_OPEN);
				setState(883);
				global_atoms_annotation_after();
				setState(884);
				match(CURLY_CLOSE);
				setState(885);
				match(PARAM_CLOSE);
				setState(886);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(888);
				annotation_global_partial_order_begin();
				setState(889);
				match(PARAM_OPEN);
				setState(890);
				match(ANNOTATION_PARTIAL_ORDER_AFTER);
				setState(891);
				match(EQUAL);
				setState(892);
				match(CURLY_OPEN);
				setState(893);
				global_atoms_annotation_after();
				setState(894);
				match(CURLY_CLOSE);
				setState(895);
				match(COMMA);
				setState(896);
				match(ANNOTATION_PARTIAL_ORDER_BEFORE);
				setState(897);
				match(EQUAL);
				setState(898);
				match(CURLY_OPEN);
				setState(899);
				global_atoms_annotation_before();
				setState(900);
				match(CURLY_CLOSE);
				setState(901);
				match(PARAM_CLOSE);
				setState(902);
				match(DOT);
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
	public static class Annotation_rule_projectionContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_PROJECTION() { return getToken(ASPCore2Parser.ANNOTATION_RULE_PROJECTION, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_ORDERING_VALUE() { return getToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
		public TerminalNode EQUAL() { return getToken(ASPCore2Parser.EQUAL, 0); }
		public Annotation_rule_projection_valueContext annotation_rule_projection_value() {
			return getRuleContext(Annotation_rule_projection_valueContext.class,0);
		}
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_projectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_projection; }
	}

	public final Annotation_rule_projectionContext annotation_rule_projection() throws RecognitionException {
		Annotation_rule_projectionContext _localctx = new Annotation_rule_projectionContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_annotation_rule_projection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(906);
			match(ANNOTATION_RULE_PROJECTION);
			setState(907);
			match(PARAM_OPEN);
			setState(908);
			match(ANNOTATION_ORDERING_VALUE);
			setState(909);
			match(EQUAL);
			setState(910);
			annotation_rule_projection_value();
			setState(911);
			match(PARAM_CLOSE);
			setState(912);
			match(DOT);
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
	public static class Annotation_rule_projection_valueContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ASPCore2Parser.NUMBER, 0); }
		public Annotation_rule_projection_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_projection_value; }
	}

	public final Annotation_rule_projection_valueContext annotation_rule_projection_value() throws RecognitionException {
		Annotation_rule_projection_valueContext _localctx = new Annotation_rule_projection_valueContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_annotation_rule_projection_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(914);
			match(NUMBER);
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
	public static class Annotation_rule_rewriting_arithContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_REWRITING_ARITH() { return getToken(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_rewriting_arithContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_rewriting_arith; }
	}

	public final Annotation_rule_rewriting_arithContext annotation_rule_rewriting_arith() throws RecognitionException {
		Annotation_rule_rewriting_arithContext _localctx = new Annotation_rule_rewriting_arithContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_annotation_rule_rewriting_arith);
		try {
			setState(922);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(916);
				match(ANNOTATION_RULE_REWRITING_ARITH);
				setState(917);
				match(PARAM_OPEN);
				setState(918);
				match(PARAM_CLOSE);
				setState(919);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(920);
				match(ANNOTATION_RULE_REWRITING_ARITH);
				setState(921);
				match(DOT);
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
	public static class Annotation_rule_align_substitutionsContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_ALIGN_SUBSTITUTIONS() { return getToken(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_align_substitutionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_align_substitutions; }
	}

	public final Annotation_rule_align_substitutionsContext annotation_rule_align_substitutions() throws RecognitionException {
		Annotation_rule_align_substitutionsContext _localctx = new Annotation_rule_align_substitutionsContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_annotation_rule_align_substitutions);
		try {
			setState(930);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(924);
				match(ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
				setState(925);
				match(PARAM_OPEN);
				setState(926);
				match(PARAM_CLOSE);
				setState(927);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(928);
				match(ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
				setState(929);
				match(DOT);
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
	public static class Annotation_rule_look_aheadContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_RULE_LOOK_AHEAD() { return getToken(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD, 0); }
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_rule_look_aheadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_rule_look_ahead; }
	}

	public final Annotation_rule_look_aheadContext annotation_rule_look_ahead() throws RecognitionException {
		Annotation_rule_look_aheadContext _localctx = new Annotation_rule_look_aheadContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_annotation_rule_look_ahead);
		try {
			setState(938);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(932);
				match(ANNOTATION_RULE_LOOK_AHEAD);
				setState(933);
				match(PARAM_OPEN);
				setState(934);
				match(PARAM_CLOSE);
				setState(935);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(936);
				match(ANNOTATION_RULE_LOOK_AHEAD);
				setState(937);
				match(DOT);
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
	public static class Annotation_global_wasp_propagatorContext extends ParserRuleContext {
		public Annotation_global_wasp_propagator_beginContext annotation_global_wasp_propagator_begin() {
			return getRuleContext(Annotation_global_wasp_propagator_beginContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public Heuristic_python_fileContext heuristic_python_file() {
			return getRuleContext(Heuristic_python_fileContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Aggregate_elements_heuristicContext aggregate_elements_heuristic() {
			return getRuleContext(Aggregate_elements_heuristicContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_wasp_propagatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_wasp_propagator; }
	}

	public final Annotation_global_wasp_propagatorContext annotation_global_wasp_propagator() throws RecognitionException {
		Annotation_global_wasp_propagatorContext _localctx = new Annotation_global_wasp_propagatorContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_annotation_global_wasp_propagator);
		try {
			setState(968);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(940);
				annotation_global_wasp_propagator_begin();
				setState(941);
				match(PARAM_OPEN);
				setState(942);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				setState(943);
				match(EQUAL);
				setState(944);
				heuristic_python_file();
				setState(945);
				match(COMMA);
				setState(946);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				setState(947);
				match(EQUAL);
				setState(948);
				match(CURLY_OPEN);
				setState(949);
				aggregate_elements_heuristic();
				setState(950);
				match(CURLY_CLOSE);
				setState(951);
				match(PARAM_CLOSE);
				setState(952);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(954);
				annotation_global_wasp_propagator_begin();
				setState(955);
				match(PARAM_OPEN);
				setState(956);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				setState(957);
				match(EQUAL);
				setState(958);
				match(CURLY_OPEN);
				setState(959);
				aggregate_elements_heuristic();
				setState(960);
				match(CURLY_CLOSE);
				setState(961);
				match(COMMA);
				setState(962);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				setState(963);
				match(EQUAL);
				setState(964);
				heuristic_python_file();
				setState(965);
				match(PARAM_CLOSE);
				setState(966);
				match(DOT);
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
	public static class Annotation_global_wasp_propagator_beginContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_WASP_PROPAGATOR() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR, 0); }
		public Annotation_global_wasp_propagator_beginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_wasp_propagator_begin; }
	}

	public final Annotation_global_wasp_propagator_beginContext annotation_global_wasp_propagator_begin() throws RecognitionException {
		Annotation_global_wasp_propagator_beginContext _localctx = new Annotation_global_wasp_propagator_beginContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_annotation_global_wasp_propagator_begin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(970);
			match(ANNOTATION_GLOBAL_WASP_PROPAGATOR);
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
	public static class Annotation_global_wasp_heuristicContext extends ParserRuleContext {
		public Annotation_global_wasp_heuristic_beginContext annotation_global_wasp_heuristic_begin() {
			return getRuleContext(Annotation_global_wasp_heuristic_beginContext.class,0);
		}
		public TerminalNode PARAM_OPEN() { return getToken(ASPCore2Parser.PARAM_OPEN, 0); }
		public TerminalNode ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(ASPCore2Parser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(ASPCore2Parser.EQUAL, i);
		}
		public Heuristic_python_fileContext heuristic_python_file() {
			return getRuleContext(Heuristic_python_fileContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ASPCore2Parser.COMMA, 0); }
		public TerminalNode ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
		public TerminalNode CURLY_OPEN() { return getToken(ASPCore2Parser.CURLY_OPEN, 0); }
		public Aggregate_elements_heuristicContext aggregate_elements_heuristic() {
			return getRuleContext(Aggregate_elements_heuristicContext.class,0);
		}
		public TerminalNode CURLY_CLOSE() { return getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
		public TerminalNode PARAM_CLOSE() { return getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
		public TerminalNode DOT() { return getToken(ASPCore2Parser.DOT, 0); }
		public Annotation_global_wasp_heuristicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_wasp_heuristic; }
	}

	public final Annotation_global_wasp_heuristicContext annotation_global_wasp_heuristic() throws RecognitionException {
		Annotation_global_wasp_heuristicContext _localctx = new Annotation_global_wasp_heuristicContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_annotation_global_wasp_heuristic);
		try {
			setState(1000);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(972);
				annotation_global_wasp_heuristic_begin();
				setState(973);
				match(PARAM_OPEN);
				setState(974);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				setState(975);
				match(EQUAL);
				setState(976);
				heuristic_python_file();
				setState(977);
				match(COMMA);
				setState(978);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				setState(979);
				match(EQUAL);
				setState(980);
				match(CURLY_OPEN);
				setState(981);
				aggregate_elements_heuristic();
				setState(982);
				match(CURLY_CLOSE);
				setState(983);
				match(PARAM_CLOSE);
				setState(984);
				match(DOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(986);
				annotation_global_wasp_heuristic_begin();
				setState(987);
				match(PARAM_OPEN);
				setState(988);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				setState(989);
				match(EQUAL);
				setState(990);
				match(CURLY_OPEN);
				setState(991);
				aggregate_elements_heuristic();
				setState(992);
				match(CURLY_CLOSE);
				setState(993);
				match(COMMA);
				setState(994);
				match(ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				setState(995);
				match(EQUAL);
				setState(996);
				heuristic_python_file();
				setState(997);
				match(PARAM_CLOSE);
				setState(998);
				match(DOT);
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
	public static class Annotation_global_wasp_heuristic_beginContext extends ParserRuleContext {
		public TerminalNode ANNOTATION_GLOBAL_WASP_HEURISTIC() { return getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC, 0); }
		public Annotation_global_wasp_heuristic_beginContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation_global_wasp_heuristic_begin; }
	}

	public final Annotation_global_wasp_heuristic_beginContext annotation_global_wasp_heuristic_begin() throws RecognitionException {
		Annotation_global_wasp_heuristic_beginContext _localctx = new Annotation_global_wasp_heuristic_beginContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_annotation_global_wasp_heuristic_begin);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1002);
			match(ANNOTATION_GLOBAL_WASP_HEURISTIC);
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
	public static class Heuristic_python_fileContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ASPCore2Parser.STRING, 0); }
		public Heuristic_python_fileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_heuristic_python_file; }
	}

	public final Heuristic_python_fileContext heuristic_python_file() throws RecognitionException {
		Heuristic_python_fileContext _localctx = new Heuristic_python_fileContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_heuristic_python_file);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1004);
			match(STRING);
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
	public static class Aggregate_element_heuristicContext extends ParserRuleContext {
		public Aggregate_elementContext aggregate_element() {
			return getRuleContext(Aggregate_elementContext.class,0);
		}
		public Classic_literalContext classic_literal() {
			return getRuleContext(Classic_literalContext.class,0);
		}
		public Aggregate_element_heuristicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_element_heuristic; }
	}

	public final Aggregate_element_heuristicContext aggregate_element_heuristic() throws RecognitionException {
		Aggregate_element_heuristicContext _localctx = new Aggregate_element_heuristicContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_aggregate_element_heuristic);
		try {
			setState(1008);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1006);
				aggregate_element();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1007);
				classic_literal();
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
	public static class Aggregate_elements_heuristicContext extends ParserRuleContext {
		public Aggregate_element_heuristicContext aggregate_element_heuristic() {
			return getRuleContext(Aggregate_element_heuristicContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ASPCore2Parser.SEMICOLON, 0); }
		public Aggregate_elements_heuristicContext aggregate_elements_heuristic() {
			return getRuleContext(Aggregate_elements_heuristicContext.class,0);
		}
		public Aggregate_elements_heuristicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_elements_heuristic; }
	}

	public final Aggregate_elements_heuristicContext aggregate_elements_heuristic() throws RecognitionException {
		Aggregate_elements_heuristicContext _localctx = new Aggregate_elements_heuristicContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_aggregate_elements_heuristic);
		try {
			setState(1015);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1010);
				aggregate_element_heuristic();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1011);
				aggregate_element_heuristic();
				setState(1012);
				match(SEMICOLON);
				setState(1013);
				aggregate_elements_heuristic();
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

	public static final String _serializedATN =
		"\u0004\u0001L\u03fa\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0002"+
		"K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007O\u0002"+
		"P\u0007P\u0002Q\u0007Q\u0002R\u0007R\u0002S\u0007S\u0002T\u0007T\u0002"+
		"U\u0007U\u0002V\u0007V\u0002W\u0007W\u0002X\u0007X\u0002Y\u0007Y\u0002"+
		"Z\u0007Z\u0002[\u0007[\u0002\\\u0007\\\u0002]\u0007]\u0002^\u0007^\u0002"+
		"_\u0007_\u0002`\u0007`\u0002a\u0007a\u0002b\u0007b\u0002c\u0007c\u0002"+
		"d\u0007d\u0002e\u0007e\u0002f\u0007f\u0002g\u0007g\u0002h\u0007h\u0001"+
		"\u0000\u0005\u0000\u00d4\b\u0000\n\u0000\f\u0000\u00d7\t\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"\u00df\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"\u00f7\b\u0002\u0001\u0003\u0001\u0003\u0003\u0003\u00fb\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u0108"+
		"\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u0113\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u011f\b\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u0126\b\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003"+
		"\t\u013c\b\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u0149\b\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0003\r\u0150\b\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0159"+
		"\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u0160\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0169\b\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u016f\b\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0003"+
		"\u0014\u0178\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u0184\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u01a1"+
		"\b\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u01aa\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u01b1\b\u0019\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u01bd\b\u001c\u0001\u001d\u0001"+
		"\u001d\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0003\u001f\u01ce\b\u001f\u0001 \u0001 \u0001 \u0001"+
		" \u0001 \u0001 \u0003 \u01d6\b \u0001!\u0001!\u0001!\u0003!\u01db\b!\u0001"+
		"\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u01e2\b\"\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0003#\u01e9\b#\u0001$\u0001$\u0001$\u0003$\u01ee\b$\u0001"+
		"%\u0001%\u0001%\u0001%\u0001%\u0003%\u01f5\b%\u0001&\u0001&\u0001\'\u0001"+
		"\'\u0001\'\u0001\'\u0001\'\u0001(\u0001(\u0001(\u0001(\u0003(\u0202\b"+
		"(\u0001)\u0001)\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001,\u0001"+
		",\u0001,\u0001-\u0001-\u0001-\u0001.\u0001.\u0001.\u0001.\u0001.\u0001"+
		".\u0003.\u0218\b.\u0001/\u0001/\u0001/\u00010\u00010\u00010\u00011\u0001"+
		"1\u00031\u0222\b1\u00012\u00012\u00012\u00013\u00013\u00013\u00014\u0001"+
		"4\u00014\u00015\u00015\u00015\u00016\u00016\u00016\u00016\u00016\u0001"+
		"6\u00036\u0236\b6\u00017\u00017\u00017\u00017\u00017\u00017\u00017\u0001"+
		"7\u00017\u00037\u0241\b7\u00018\u00018\u00019\u00019\u0001:\u0001:\u0001"+
		":\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0003:\u0250\b:\u0001;\u0001"+
		";\u0001;\u0001;\u0001;\u0003;\u0257\b;\u0001<\u0001<\u0001<\u0001<\u0001"+
		"=\u0001=\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0003>\u0265\b>\u0001"+
		"?\u0001?\u0001?\u0001?\u0003?\u026b\b?\u0001@\u0001@\u0001@\u0001@\u0001"+
		"@\u0001@\u0001@\u0001@\u0001@\u0003@\u0276\b@\u0001A\u0001A\u0001A\u0001"+
		"A\u0001A\u0001A\u0003A\u027e\bA\u0001B\u0001B\u0001B\u0001B\u0001B\u0001"+
		"B\u0003B\u0286\bB\u0001C\u0001C\u0001C\u0001C\u0001C\u0001C\u0001C\u0001"+
		"C\u0001C\u0001C\u0001C\u0001C\u0001C\u0001C\u0003C\u0296\bC\u0001D\u0001"+
		"D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001"+
		"D\u0001D\u0001D\u0003D\u02a6\bD\u0001E\u0001E\u0001E\u0001E\u0001E\u0001"+
		"E\u0001E\u0001E\u0001E\u0001E\u0001E\u0001E\u0001F\u0001F\u0001F\u0001"+
		"G\u0001G\u0001G\u0001G\u0001G\u0003G\u02bc\bG\u0001H\u0001H\u0001I\u0001"+
		"I\u0001J\u0001J\u0001K\u0001K\u0001K\u0001K\u0001K\u0001K\u0001K\u0001"+
		"K\u0001K\u0001K\u0001K\u0001K\u0001K\u0001K\u0001L\u0001L\u0001L\u0001"+
		"L\u0001L\u0001L\u0001L\u0001L\u0001L\u0001L\u0001L\u0001L\u0001L\u0001"+
		"L\u0001M\u0001M\u0001M\u0001M\u0003M\u02e4\bM\u0001N\u0001N\u0001N\u0003"+
		"N\u02e9\bN\u0001O\u0001O\u0001O\u0001O\u0003O\u02ef\bO\u0001P\u0001P\u0001"+
		"P\u0003P\u02f4\bP\u0001Q\u0001Q\u0001Q\u0001Q\u0001Q\u0001Q\u0001Q\u0001"+
		"Q\u0001Q\u0001Q\u0003Q\u0300\bQ\u0001R\u0001R\u0001R\u0001R\u0001R\u0001"+
		"R\u0001R\u0001R\u0001R\u0001R\u0003R\u030c\bR\u0001S\u0001S\u0001S\u0001"+
		"S\u0001S\u0001S\u0001S\u0001S\u0001S\u0001S\u0003S\u0318\bS\u0001T\u0001"+
		"T\u0001T\u0001T\u0001T\u0001T\u0001T\u0001T\u0001T\u0001T\u0003T\u0324"+
		"\bT\u0001U\u0001U\u0001U\u0001U\u0001U\u0003U\u032b\bU\u0001V\u0001V\u0001"+
		"V\u0001V\u0001V\u0003V\u0332\bV\u0001W\u0001W\u0001W\u0001W\u0001W\u0003"+
		"W\u0339\bW\u0001X\u0001X\u0001X\u0001X\u0001X\u0001X\u0003X\u0341\bX\u0001"+
		"Y\u0001Y\u0001Z\u0001Z\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001"+
		"[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001"+
		"[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001[\u0001"+
		"[\u0001[\u0001[\u0001[\u0001[\u0001[\u0003[\u0367\b[\u0001\\\u0001\\\u0001"+
		"\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001"+
		"\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001"+
		"\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001\\\u0001"+
		"\\\u0001\\\u0001\\\u0003\\\u0389\b\\\u0001]\u0001]\u0001]\u0001]\u0001"+
		"]\u0001]\u0001]\u0001]\u0001^\u0001^\u0001_\u0001_\u0001_\u0001_\u0001"+
		"_\u0001_\u0003_\u039b\b_\u0001`\u0001`\u0001`\u0001`\u0001`\u0001`\u0003"+
		"`\u03a3\b`\u0001a\u0001a\u0001a\u0001a\u0001a\u0001a\u0003a\u03ab\ba\u0001"+
		"b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001"+
		"b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001"+
		"b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0001b\u0003b\u03c9\bb\u0001"+
		"c\u0001c\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001"+
		"d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001"+
		"d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0001d\u0003"+
		"d\u03e9\bd\u0001e\u0001e\u0001f\u0001f\u0001g\u0001g\u0003g\u03f1\bg\u0001"+
		"h\u0001h\u0001h\u0001h\u0001h\u0003h\u03f8\bh\u0001h\u0000\u0000i\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4"+
		"\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc"+
		"\u00ce\u00d0\u0000\t\u0001\u0000 !\u0001\u0000\u0013\u0014\u0001\u0000"+
		"\u0015\u0017\u0002\u0000\u0003\u0003\u001f\u001f\u0001\u0000\u0002\u0004"+
		"\u0002\u0000\"\"$$\u0002\u0000##%%\u0001\u0000(+\u0001\u0000=C\u040d\u0000"+
		"\u00d5\u0001\u0000\u0000\u0000\u0002\u00de\u0001\u0000\u0000\u0000\u0004"+
		"\u00f6\u0001\u0000\u0000\u0000\u0006\u00fa\u0001\u0000\u0000\u0000\b\u00fc"+
		"\u0001\u0000\u0000\u0000\n\u0107\u0001\u0000\u0000\u0000\f\u0112\u0001"+
		"\u0000\u0000\u0000\u000e\u011e\u0001\u0000\u0000\u0000\u0010\u0125\u0001"+
		"\u0000\u0000\u0000\u0012\u013b\u0001\u0000\u0000\u0000\u0014\u013d\u0001"+
		"\u0000\u0000\u0000\u0016\u0140\u0001\u0000\u0000\u0000\u0018\u0148\u0001"+
		"\u0000\u0000\u0000\u001a\u014f\u0001\u0000\u0000\u0000\u001c\u0151\u0001"+
		"\u0000\u0000\u0000\u001e\u0158\u0001\u0000\u0000\u0000 \u015f\u0001\u0000"+
		"\u0000\u0000\"\u0168\u0001\u0000\u0000\u0000$\u016e\u0001\u0000\u0000"+
		"\u0000&\u0170\u0001\u0000\u0000\u0000(\u0177\u0001\u0000\u0000\u0000*"+
		"\u0183\u0001\u0000\u0000\u0000,\u01a0\u0001\u0000\u0000\u0000.\u01a2\u0001"+
		"\u0000\u0000\u00000\u01a9\u0001\u0000\u0000\u00002\u01b0\u0001\u0000\u0000"+
		"\u00004\u01b2\u0001\u0000\u0000\u00006\u01b6\u0001\u0000\u0000\u00008"+
		"\u01bc\u0001\u0000\u0000\u0000:\u01be\u0001\u0000\u0000\u0000<\u01c0\u0001"+
		"\u0000\u0000\u0000>\u01cd\u0001\u0000\u0000\u0000@\u01d5\u0001\u0000\u0000"+
		"\u0000B\u01da\u0001\u0000\u0000\u0000D\u01e1\u0001\u0000\u0000\u0000F"+
		"\u01e8\u0001\u0000\u0000\u0000H\u01ed\u0001\u0000\u0000\u0000J\u01f4\u0001"+
		"\u0000\u0000\u0000L\u01f6\u0001\u0000\u0000\u0000N\u01f8\u0001\u0000\u0000"+
		"\u0000P\u0201\u0001\u0000\u0000\u0000R\u0203\u0001\u0000\u0000\u0000T"+
		"\u0205\u0001\u0000\u0000\u0000V\u0208\u0001\u0000\u0000\u0000X\u020b\u0001"+
		"\u0000\u0000\u0000Z\u020e\u0001\u0000\u0000\u0000\\\u0217\u0001\u0000"+
		"\u0000\u0000^\u0219\u0001\u0000\u0000\u0000`\u021c\u0001\u0000\u0000\u0000"+
		"b\u0221\u0001\u0000\u0000\u0000d\u0223\u0001\u0000\u0000\u0000f\u0226"+
		"\u0001\u0000\u0000\u0000h\u0229\u0001\u0000\u0000\u0000j\u022c\u0001\u0000"+
		"\u0000\u0000l\u0235\u0001\u0000\u0000\u0000n\u0240\u0001\u0000\u0000\u0000"+
		"p\u0242\u0001\u0000\u0000\u0000r\u0244\u0001\u0000\u0000\u0000t\u024f"+
		"\u0001\u0000\u0000\u0000v\u0256\u0001\u0000\u0000\u0000x\u0258\u0001\u0000"+
		"\u0000\u0000z\u025c\u0001\u0000\u0000\u0000|\u0264\u0001\u0000\u0000\u0000"+
		"~\u026a\u0001\u0000\u0000\u0000\u0080\u0275\u0001\u0000\u0000\u0000\u0082"+
		"\u027d\u0001\u0000\u0000\u0000\u0084\u0285\u0001\u0000\u0000\u0000\u0086"+
		"\u0295\u0001\u0000\u0000\u0000\u0088\u02a5\u0001\u0000\u0000\u0000\u008a"+
		"\u02a7\u0001\u0000\u0000\u0000\u008c\u02b3\u0001\u0000\u0000\u0000\u008e"+
		"\u02bb\u0001\u0000\u0000\u0000\u0090\u02bd\u0001\u0000\u0000\u0000\u0092"+
		"\u02bf\u0001\u0000\u0000\u0000\u0094\u02c1\u0001\u0000\u0000\u0000\u0096"+
		"\u02c3\u0001\u0000\u0000\u0000\u0098\u02d1\u0001\u0000\u0000\u0000\u009a"+
		"\u02e3\u0001\u0000\u0000\u0000\u009c\u02e8\u0001\u0000\u0000\u0000\u009e"+
		"\u02ee\u0001\u0000\u0000\u0000\u00a0\u02f3\u0001\u0000\u0000\u0000\u00a2"+
		"\u02ff\u0001\u0000\u0000\u0000\u00a4\u030b\u0001\u0000\u0000\u0000\u00a6"+
		"\u0317\u0001\u0000\u0000\u0000\u00a8\u0323\u0001\u0000\u0000\u0000\u00aa"+
		"\u032a\u0001\u0000\u0000\u0000\u00ac\u0331\u0001\u0000\u0000\u0000\u00ae"+
		"\u0338\u0001\u0000\u0000\u0000\u00b0\u0340\u0001\u0000\u0000\u0000\u00b2"+
		"\u0342\u0001\u0000\u0000\u0000\u00b4\u0344\u0001\u0000\u0000\u0000\u00b6"+
		"\u0366\u0001\u0000\u0000\u0000\u00b8\u0388\u0001\u0000\u0000\u0000\u00ba"+
		"\u038a\u0001\u0000\u0000\u0000\u00bc\u0392\u0001\u0000\u0000\u0000\u00be"+
		"\u039a\u0001\u0000\u0000\u0000\u00c0\u03a2\u0001\u0000\u0000\u0000\u00c2"+
		"\u03aa\u0001\u0000\u0000\u0000\u00c4\u03c8\u0001\u0000\u0000\u0000\u00c6"+
		"\u03ca\u0001\u0000\u0000\u0000\u00c8\u03e8\u0001\u0000\u0000\u0000\u00ca"+
		"\u03ea\u0001\u0000\u0000\u0000\u00cc\u03ec\u0001\u0000\u0000\u0000\u00ce"+
		"\u03f0\u0001\u0000\u0000\u0000\u00d0\u03f7\u0001\u0000\u0000\u0000\u00d2"+
		"\u00d4\u0003\u0002\u0001\u0000\u00d3\u00d2\u0001\u0000\u0000\u0000\u00d4"+
		"\u00d7\u0001\u0000\u0000\u0000\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d5"+
		"\u00d6\u0001\u0000\u0000\u0000\u00d6\u0001\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d5\u0001\u0000\u0000\u0000\u00d8\u00df\u0003\u0004\u0002\u0000\u00d9"+
		"\u00da\u0003~?\u0000\u00da\u00db\u0003\u0004\u0002\u0000\u00db\u00df\u0001"+
		"\u0000\u0000\u0000\u00dc\u00df\u0003|>\u0000\u00dd\u00df\u0003T*\u0000"+
		"\u00de\u00d8\u0001\u0000\u0000\u0000\u00de\u00d9\u0001\u0000\u0000\u0000"+
		"\u00de\u00dc\u0001\u0000\u0000\u0000\u00de\u00dd\u0001\u0000\u0000\u0000"+
		"\u00df\u0003\u0001\u0000\u0000\u0000\u00e0\u00e1\u0003\u0006\u0003\u0000"+
		"\u00e1\u00e2\u0005\n\u0000\u0000\u00e2\u00f7\u0001\u0000\u0000\u0000\u00e3"+
		"\u00e4\u0003\u0006\u0003\u0000\u00e4\u00e5\u0005\u0011\u0000\u0000\u00e5"+
		"\u00e6\u0005\n\u0000\u0000\u00e6\u00f7\u0001\u0000\u0000\u0000\u00e7\u00e8"+
		"\u0003\u0006\u0003\u0000\u00e8\u00e9\u0005\u0011\u0000\u0000\u00e9\u00ea"+
		"\u0003\b\u0004\u0000\u00ea\u00eb\u0005\n\u0000\u0000\u00eb\u00f7\u0001"+
		"\u0000\u0000\u0000\u00ec\u00ed\u0005\u0011\u0000\u0000\u00ed\u00ee\u0003"+
		"\b\u0004\u0000\u00ee\u00ef\u0005\n\u0000\u0000\u00ef\u00f7\u0001\u0000"+
		"\u0000\u0000\u00f0\u00f1\u0005\u0012\u0000\u0000\u00f1\u00f2\u0003\b\u0004"+
		"\u0000\u00f2\u00f3\u0005\n\u0000\u0000\u00f3\u00f4\u0003\n\u0005\u0000"+
		"\u00f4\u00f7\u0001\u0000\u0000\u0000\u00f5\u00f7\u0003V+\u0000\u00f6\u00e0"+
		"\u0001\u0000\u0000\u0000\u00f6\u00e3\u0001\u0000\u0000\u0000\u00f6\u00e7"+
		"\u0001\u0000\u0000\u0000\u00f6\u00ec\u0001\u0000\u0000\u0000\u00f6\u00f0"+
		"\u0001\u0000\u0000\u0000\u00f6\u00f5\u0001\u0000\u0000\u0000\u00f7\u0005"+
		"\u0001\u0000\u0000\u0000\u00f8\u00fb\u0003\u000e\u0007\u0000\u00f9\u00fb"+
		"\u0003\u0012\t\u0000\u00fa\u00f8\u0001\u0000\u0000\u0000\u00fa\u00f9\u0001"+
		"\u0000\u0000\u0000\u00fb\u0007\u0001\u0000\u0000\u0000\u00fc\u00fd\u0003"+
		"\u0010\b\u0000\u00fd\t\u0001\u0000\u0000\u0000\u00fe\u00ff\u0005\u001a"+
		"\u0000\u0000\u00ff\u0100\u0003B!\u0000\u0100\u0101\u0005\u001b\u0000\u0000"+
		"\u0101\u0108\u0001\u0000\u0000\u0000\u0102\u0103\u0005\u001a\u0000\u0000"+
		"\u0103\u0104\u0003B!\u0000\u0104\u0105\u0003\f\u0006\u0000\u0105\u0106"+
		"\u0005\u001b\u0000\u0000\u0106\u0108\u0001\u0000\u0000\u0000\u0107\u00fe"+
		"\u0001\u0000\u0000\u0000\u0107\u0102\u0001\u0000\u0000\u0000\u0108\u000b"+
		"\u0001\u0000\u0000\u0000\u0109\u010a\u0005\u0010\u0000\u0000\u010a\u0113"+
		"\u0003B!\u0000\u010b\u010c\u0005\u0010\u0000\u0000\u010c\u010d\u0003B"+
		"!\u0000\u010d\u010e\u0005\f\u0000\u0000\u010e\u010f\u00030\u0018\u0000"+
		"\u010f\u0113\u0001\u0000\u0000\u0000\u0110\u0111\u0005\f\u0000\u0000\u0111"+
		"\u0113\u00030\u0018\u0000\u0112\u0109\u0001\u0000\u0000\u0000\u0112\u010b"+
		"\u0001\u0000\u0000\u0000\u0112\u0110\u0001\u0000\u0000\u0000\u0113\r\u0001"+
		"\u0000\u0000\u0000\u0114\u011f\u0003(\u0014\u0000\u0115\u0116\u0003(\u0014"+
		"\u0000\u0116\u0117\u0005\r\u0000\u0000\u0117\u0118\u0003\u000e\u0007\u0000"+
		"\u0118\u011f\u0001\u0000\u0000\u0000\u0119\u011f\u0003&\u0013\u0000\u011a"+
		"\u011b\u0003&\u0013\u0000\u011b\u011c\u0005\r\u0000\u0000\u011c\u011d"+
		"\u0003\u000e\u0007\u0000\u011d\u011f\u0001\u0000\u0000\u0000\u011e\u0114"+
		"\u0001\u0000\u0000\u0000\u011e\u0115\u0001\u0000\u0000\u0000\u011e\u0119"+
		"\u0001\u0000\u0000\u0000\u011e\u011a\u0001\u0000\u0000\u0000\u011f\u000f"+
		"\u0001\u0000\u0000\u0000\u0120\u0126\u0003$\u0012\u0000\u0121\u0122\u0003"+
		"$\u0012\u0000\u0122\u0123\u0005\f\u0000\u0000\u0123\u0124\u0003\u0010"+
		"\b\u0000\u0124\u0126\u0001\u0000\u0000\u0000\u0125\u0120\u0001\u0000\u0000"+
		"\u0000\u0125\u0121\u0001\u0000\u0000\u0000\u0126\u0011\u0001\u0000\u0000"+
		"\u0000\u0127\u0128\u0003\u0014\n\u0000\u0128\u0129\u0005\u001c\u0000\u0000"+
		"\u0129\u012a\u0003\u0018\f\u0000\u012a\u012b\u0005\u001d\u0000\u0000\u012b"+
		"\u012c\u0003\u0016\u000b\u0000\u012c\u013c\u0001\u0000\u0000\u0000\u012d"+
		"\u012e\u0003\u0014\n\u0000\u012e\u012f\u0005\u001c\u0000\u0000\u012f\u0130"+
		"\u0003\u0018\f\u0000\u0130\u0131\u0005\u001d\u0000\u0000\u0131\u013c\u0001"+
		"\u0000\u0000\u0000\u0132\u0133\u0005\u001c\u0000\u0000\u0133\u0134\u0003"+
		"\u0018\f\u0000\u0134\u0135\u0005\u001d\u0000\u0000\u0135\u013c\u0001\u0000"+
		"\u0000\u0000\u0136\u0137\u0005\u001c\u0000\u0000\u0137\u0138\u0003\u0018"+
		"\f\u0000\u0138\u0139\u0005\u001d\u0000\u0000\u0139\u013a\u0003\u0016\u000b"+
		"\u0000\u013a\u013c\u0001\u0000\u0000\u0000\u013b\u0127\u0001\u0000\u0000"+
		"\u0000\u013b\u012d\u0001\u0000\u0000\u0000\u013b\u0132\u0001\u0000\u0000"+
		"\u0000\u013b\u0136\u0001\u0000\u0000\u0000\u013c\u0013\u0001\u0000\u0000"+
		"\u0000\u013d\u013e\u0003B!\u0000\u013e\u013f\u00038\u001c\u0000\u013f"+
		"\u0015\u0001\u0000\u0000\u0000\u0140\u0141\u00038\u001c\u0000\u0141\u0142"+
		"\u0003B!\u0000\u0142\u0017\u0001\u0000\u0000\u0000\u0143\u0144\u0003\u001a"+
		"\r\u0000\u0144\u0145\u0005\u000e\u0000\u0000\u0145\u0146\u0003\u0018\f"+
		"\u0000\u0146\u0149\u0001\u0000\u0000\u0000\u0147\u0149\u0003\u001a\r\u0000"+
		"\u0148\u0143\u0001\u0000\u0000\u0000\u0148\u0147\u0001\u0000\u0000\u0000"+
		"\u0149\u0019\u0001\u0000\u0000\u0000\u014a\u0150\u0003\u001c\u000e\u0000"+
		"\u014b\u014c\u0003\u001c\u000e\u0000\u014c\u014d\u0005\u000f\u0000\u0000"+
		"\u014d\u014e\u0003\u001e\u000f\u0000\u014e\u0150\u0001\u0000\u0000\u0000"+
		"\u014f\u014a\u0001\u0000\u0000\u0000\u014f\u014b\u0001\u0000\u0000\u0000"+
		"\u0150\u001b\u0001\u0000\u0000\u0000\u0151\u0152\u0003*\u0015\u0000\u0152"+
		"\u001d\u0001\u0000\u0000\u0000\u0153\u0159\u0003\"\u0011\u0000\u0154\u0155"+
		"\u0003 \u0010\u0000\u0155\u0156\u0005\f\u0000\u0000\u0156\u0157\u0003"+
		"\"\u0011\u0000\u0157\u0159\u0001\u0000\u0000\u0000\u0158\u0153\u0001\u0000"+
		"\u0000\u0000\u0158\u0154\u0001\u0000\u0000\u0000\u0159\u001f\u0001\u0000"+
		"\u0000\u0000\u015a\u0160\u0003\"\u0011\u0000\u015b\u015c\u0003\"\u0011"+
		"\u0000\u015c\u015d\u0005\f\u0000\u0000\u015d\u015e\u0003 \u0010\u0000"+
		"\u015e\u0160\u0001\u0000\u0000\u0000\u015f\u015a\u0001\u0000\u0000\u0000"+
		"\u015f\u015b\u0001\u0000\u0000\u0000\u0160!\u0001\u0000\u0000\u0000\u0161"+
		"\u0169\u0003(\u0014\u0000\u0162\u0163\u0005\u0001\u0000\u0000\u0163\u0169"+
		"\u0003(\u0014\u0000\u0164\u0169\u00034\u001a\u0000\u0165\u0169\u0003,"+
		"\u0016\u0000\u0166\u0167\u0005\u0001\u0000\u0000\u0167\u0169\u0003,\u0016"+
		"\u0000\u0168\u0161\u0001\u0000\u0000\u0000\u0168\u0162\u0001\u0000\u0000"+
		"\u0000\u0168\u0164\u0001\u0000\u0000\u0000\u0168\u0165\u0001\u0000\u0000"+
		"\u0000\u0168\u0166\u0001\u0000\u0000\u0000\u0169#\u0001\u0000\u0000\u0000"+
		"\u016a\u016f\u0003\"\u0011\u0000\u016b\u016f\u0003n7\u0000\u016c\u016d"+
		"\u0005\u0001\u0000\u0000\u016d\u016f\u0003n7\u0000\u016e\u016a\u0001\u0000"+
		"\u0000\u0000\u016e\u016b\u0001\u0000\u0000\u0000\u016e\u016c\u0001\u0000"+
		"\u0000\u0000\u016f%\u0001\u0000\u0000\u0000\u0170\u0171\u0005\'\u0000"+
		"\u0000\u0171\u0172\u0003P(\u0000\u0172\u0173\u0003*\u0015\u0000\u0173"+
		"\'\u0001\u0000\u0000\u0000\u0174\u0178\u0003*\u0015\u0000\u0175\u0176"+
		"\u0005\u0014\u0000\u0000\u0176\u0178\u0003*\u0015\u0000\u0177\u0174\u0001"+
		"\u0000\u0000\u0000\u0177\u0175\u0001\u0000\u0000\u0000\u0178)\u0001\u0000"+
		"\u0000\u0000\u0179\u0184\u0003R)\u0000\u017a\u017b\u0003R)\u0000\u017b"+
		"\u017c\u0005\u0018\u0000\u0000\u017c\u017d\u00030\u0018\u0000\u017d\u017e"+
		"\u0005\u0019\u0000\u0000\u017e\u0184\u0001\u0000\u0000\u0000\u017f\u0180"+
		"\u0003R)\u0000\u0180\u0181\u0005\u0018\u0000\u0000\u0181\u0182\u0005\u0019"+
		"\u0000\u0000\u0182\u0184\u0001\u0000\u0000\u0000\u0183\u0179\u0001\u0000"+
		"\u0000\u0000\u0183\u017a\u0001\u0000\u0000\u0000\u0183\u017f\u0001\u0000"+
		"\u0000\u0000\u0184+\u0001\u0000\u0000\u0000\u0185\u0186\u0005&\u0000\u0000"+
		"\u0186\u0187\u0003R)\u0000\u0187\u0188\u0005\u0018\u0000\u0000\u0188\u0189"+
		"\u00030\u0018\u0000\u0189\u018a\u0003.\u0017\u0000\u018a\u018b\u00030"+
		"\u0018\u0000\u018b\u018c\u0005\u0019\u0000\u0000\u018c\u01a1\u0001\u0000"+
		"\u0000\u0000\u018d\u018e\u0005&\u0000\u0000\u018e\u018f\u0003R)\u0000"+
		"\u018f\u0190\u0005\u0018\u0000\u0000\u0190\u0191\u0003.\u0017\u0000\u0191"+
		"\u0192\u00030\u0018\u0000\u0192\u0193\u0005\u0019\u0000\u0000\u0193\u01a1"+
		"\u0001\u0000\u0000\u0000\u0194\u0195\u0005&\u0000\u0000\u0195\u0196\u0003"+
		"R)\u0000\u0196\u0197\u0005\u0018\u0000\u0000\u0197\u0198\u00030\u0018"+
		"\u0000\u0198\u0199\u0003.\u0017\u0000\u0199\u019a\u0005\u0019\u0000\u0000"+
		"\u019a\u01a1\u0001\u0000\u0000\u0000\u019b\u019c\u0005&\u0000\u0000\u019c"+
		"\u019d\u0003R)\u0000\u019d\u019e\u0005\u0018\u0000\u0000\u019e\u019f\u0005"+
		"\u0019\u0000\u0000\u019f\u01a1\u0001\u0000\u0000\u0000\u01a0\u0185\u0001"+
		"\u0000\u0000\u0000\u01a0\u018d\u0001\u0000\u0000\u0000\u01a0\u0194\u0001"+
		"\u0000\u0000\u0000\u01a0\u019b\u0001\u0000\u0000\u0000\u01a1-\u0001\u0000"+
		"\u0000\u0000\u01a2\u01a3\u0005\u000e\u0000\u0000\u01a3/\u0001\u0000\u0000"+
		"\u0000\u01a4\u01aa\u0003B!\u0000\u01a5\u01a6\u0003B!\u0000\u01a6\u01a7"+
		"\u0005\f\u0000\u0000\u01a7\u01a8\u00030\u0018\u0000\u01a8\u01aa\u0001"+
		"\u0000\u0000\u0000\u01a9\u01a4\u0001\u0000\u0000\u0000\u01a9\u01a5\u0001"+
		"\u0000\u0000\u0000\u01aa1\u0001\u0000\u0000\u0000\u01ab\u01b1\u0003H$"+
		"\u0000\u01ac\u01ad\u0003H$\u0000\u01ad\u01ae\u0005\f\u0000\u0000\u01ae"+
		"\u01af\u00032\u0019\u0000\u01af\u01b1\u0001\u0000\u0000\u0000\u01b0\u01ab"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ac\u0001\u0000\u0000\u0000\u01b13\u0001"+
		"\u0000\u0000\u0000\u01b2\u01b3\u0003B!\u0000\u01b3\u01b4\u00038\u001c"+
		"\u0000\u01b4\u01b5\u0003B!\u0000\u01b55\u0001\u0000\u0000\u0000\u01b6"+
		"\u01b7\u0007\u0000\u0000\u0000\u01b77\u0001\u0000\u0000\u0000\u01b8\u01bd"+
		"\u00036\u001b\u0000\u01b9\u01bd\u00036\u001b\u0000\u01ba\u01bd\u0003p"+
		"8\u0000\u01bb\u01bd\u0003r9\u0000\u01bc\u01b8\u0001\u0000\u0000\u0000"+
		"\u01bc\u01b9\u0001\u0000\u0000\u0000\u01bc\u01ba\u0001\u0000\u0000\u0000"+
		"\u01bc\u01bb\u0001\u0000\u0000\u0000\u01bd9\u0001\u0000\u0000\u0000\u01be"+
		"\u01bf\u0007\u0001\u0000\u0000\u01bf;\u0001\u0000\u0000\u0000\u01c0\u01c1"+
		"\u0007\u0002\u0000\u0000\u01c1=\u0001\u0000\u0000\u0000\u01c2\u01ce\u0005"+
		"\u001f\u0000\u0000\u01c3\u01c4\u0003R)\u0000\u01c4\u01c5\u0005\u0018\u0000"+
		"\u0000\u01c5\u01c6\u00030\u0018\u0000\u01c6\u01c7\u0005\u0019\u0000\u0000"+
		"\u01c7\u01ce\u0001\u0000\u0000\u0000\u01c8\u01c9\u0005\u0005\u0000\u0000"+
		"\u01c9\u01ca\u0005\u000b\u0000\u0000\u01ca\u01ce\u0005\u0005\u0000\u0000"+
		"\u01cb\u01cc\u0005\u0014\u0000\u0000\u01cc\u01ce\u0003B!\u0000\u01cd\u01c2"+
		"\u0001\u0000\u0000\u0000\u01cd\u01c3\u0001\u0000\u0000\u0000\u01cd\u01c8"+
		"\u0001\u0000\u0000\u0000\u01cd\u01cb\u0001\u0000\u0000\u0000\u01ce?\u0001"+
		"\u0000\u0000\u0000\u01cf\u01d6\u0003R)\u0000\u01d0\u01d6\u0005\u0005\u0000"+
		"\u0000\u01d1\u01d2\u0005\u0018\u0000\u0000\u01d2\u01d3\u0003B!\u0000\u01d3"+
		"\u01d4\u0005\u0019\u0000\u0000\u01d4\u01d6\u0001\u0000\u0000\u0000\u01d5"+
		"\u01cf\u0001\u0000\u0000\u0000\u01d5\u01d0\u0001\u0000\u0000\u0000\u01d5"+
		"\u01d1\u0001\u0000\u0000\u0000\u01d6A\u0001\u0000\u0000\u0000\u01d7\u01db"+
		"\u0003>\u001f\u0000\u01d8\u01db\u0003R)\u0000\u01d9\u01db\u0003D\"\u0000"+
		"\u01da\u01d7\u0001\u0000\u0000\u0000\u01da\u01d8\u0001\u0000\u0000\u0000"+
		"\u01da\u01d9\u0001\u0000\u0000\u0000\u01dbC\u0001\u0000\u0000\u0000\u01dc"+
		"\u01e2\u0003F#\u0000\u01dd\u01de\u0003F#\u0000\u01de\u01df\u0003:\u001d"+
		"\u0000\u01df\u01e0\u0003D\"\u0000\u01e0\u01e2\u0001\u0000\u0000\u0000"+
		"\u01e1\u01dc\u0001\u0000\u0000\u0000\u01e1\u01dd\u0001\u0000\u0000\u0000"+
		"\u01e2E\u0001\u0000\u0000\u0000\u01e3\u01e9\u0003@ \u0000\u01e4\u01e5"+
		"\u0003@ \u0000\u01e5\u01e6\u0003<\u001e\u0000\u01e6\u01e7\u0003F#\u0000"+
		"\u01e7\u01e9\u0001\u0000\u0000\u0000\u01e8\u01e3\u0001\u0000\u0000\u0000"+
		"\u01e8\u01e4\u0001\u0000\u0000\u0000\u01e9G\u0001\u0000\u0000\u0000\u01ea"+
		"\u01ee\u0003J%\u0000\u01eb\u01ee\u0003L&\u0000\u01ec\u01ee\u0003N\'\u0000"+
		"\u01ed\u01ea\u0001\u0000\u0000\u0000\u01ed\u01eb\u0001\u0000\u0000\u0000"+
		"\u01ed\u01ec\u0001\u0000\u0000\u0000\u01eeI\u0001\u0000\u0000\u0000\u01ef"+
		"\u01f5\u0005\u0002\u0000\u0000\u01f0\u01f5\u0005\u0004\u0000\u0000\u01f1"+
		"\u01f5\u0005\u0005\u0000\u0000\u01f2\u01f3\u0005\u0014\u0000\u0000\u01f3"+
		"\u01f5\u0005\u0005\u0000\u0000\u01f4\u01ef\u0001\u0000\u0000\u0000\u01f4"+
		"\u01f0\u0001\u0000\u0000\u0000\u01f4\u01f1\u0001\u0000\u0000\u0000\u01f4"+
		"\u01f2\u0001\u0000\u0000\u0000\u01f5K\u0001\u0000\u0000\u0000\u01f6\u01f7"+
		"\u0007\u0003\u0000\u0000\u01f7M\u0001\u0000\u0000\u0000\u01f8\u01f9\u0003"+
		"R)\u0000\u01f9\u01fa\u0005\u0018\u0000\u0000\u01fa\u01fb\u00030\u0018"+
		"\u0000\u01fb\u01fc\u0005\u0019\u0000\u0000\u01fcO\u0001\u0000\u0000\u0000"+
		"\u01fd\u0202\u0005\u0003\u0000\u0000\u01fe\u01ff\u0005\u0003\u0000\u0000"+
		"\u01ff\u0200\u0005\f\u0000\u0000\u0200\u0202\u0003P(\u0000\u0201\u01fd"+
		"\u0001\u0000\u0000\u0000\u0201\u01fe\u0001\u0000\u0000\u0000\u0202Q\u0001"+
		"\u0000\u0000\u0000\u0203\u0204\u0007\u0004\u0000\u0000\u0204S\u0001\u0000"+
		"\u0000\u0000\u0205\u0206\u0005-\u0000\u0000\u0206\u0207\u0005.\u0000\u0000"+
		"\u0207U\u0001\u0000\u0000\u0000\u0208\u0209\u0003*\u0015\u0000\u0209\u020a"+
		"\u0005\u001e\u0000\u0000\u020aW\u0001\u0000\u0000\u0000\u020b\u020c\u0003"+
		"B!\u0000\u020c\u020d\u00036\u001b\u0000\u020dY\u0001\u0000\u0000\u0000"+
		"\u020e\u020f\u00036\u001b\u0000\u020f\u0210\u0003B!\u0000\u0210[\u0001"+
		"\u0000\u0000\u0000\u0211\u0212\u0003X,\u0000\u0212\u0213\u0003t:\u0000"+
		"\u0213\u0218\u0001\u0000\u0000\u0000\u0214\u0215\u0003t:\u0000\u0215\u0216"+
		"\u0003Z-\u0000\u0216\u0218\u0001\u0000\u0000\u0000\u0217\u0211\u0001\u0000"+
		"\u0000\u0000\u0217\u0214\u0001\u0000\u0000\u0000\u0218]\u0001\u0000\u0000"+
		"\u0000\u0219\u021a\u0003B!\u0000\u021a\u021b\u0003p8\u0000\u021b_\u0001"+
		"\u0000\u0000\u0000\u021c\u021d\u0003^/\u0000\u021d\u021e\u0003t:\u0000"+
		"\u021ea\u0001\u0000\u0000\u0000\u021f\u0222\u0003`0\u0000\u0220\u0222"+
		"\u0003f3\u0000\u0221\u021f\u0001\u0000\u0000\u0000\u0221\u0220\u0001\u0000"+
		"\u0000\u0000\u0222c\u0001\u0000\u0000\u0000\u0223\u0224\u0003B!\u0000"+
		"\u0224\u0225\u0003r9\u0000\u0225e\u0001\u0000\u0000\u0000\u0226\u0227"+
		"\u0003d2\u0000\u0227\u0228\u0003t:\u0000\u0228g\u0001\u0000\u0000\u0000"+
		"\u0229\u022a\u0003p8\u0000\u022a\u022b\u0003B!\u0000\u022bi\u0001\u0000"+
		"\u0000\u0000\u022c\u022d\u0003r9\u0000\u022d\u022e\u0003B!\u0000\u022e"+
		"k\u0001\u0000\u0000\u0000\u022f\u0230\u0003t:\u0000\u0230\u0231\u0003"+
		"h4\u0000\u0231\u0236\u0001\u0000\u0000\u0000\u0232\u0233\u0003t:\u0000"+
		"\u0233\u0234\u0003j5\u0000\u0234\u0236\u0001\u0000\u0000\u0000\u0235\u022f"+
		"\u0001\u0000\u0000\u0000\u0235\u0232\u0001\u0000\u0000\u0000\u0236m\u0001"+
		"\u0000\u0000\u0000\u0237\u0241\u0003b1\u0000\u0238\u0241\u0003l6\u0000"+
		"\u0239\u0241\u0003\\.\u0000\u023a\u023b\u0003`0\u0000\u023b\u023c\u0003"+
		"h4\u0000\u023c\u0241\u0001\u0000\u0000\u0000\u023d\u023e\u0003f3\u0000"+
		"\u023e\u023f\u0003j5\u0000\u023f\u0241\u0001\u0000\u0000\u0000\u0240\u0237"+
		"\u0001\u0000\u0000\u0000\u0240\u0238\u0001\u0000\u0000\u0000\u0240\u0239"+
		"\u0001\u0000\u0000\u0000\u0240\u023a\u0001\u0000\u0000\u0000\u0240\u023d"+
		"\u0001\u0000\u0000\u0000\u0241o\u0001\u0000\u0000\u0000\u0242\u0243\u0007"+
		"\u0005\u0000\u0000\u0243q\u0001\u0000\u0000\u0000\u0244\u0245\u0007\u0006"+
		"\u0000\u0000\u0245s\u0001\u0000\u0000\u0000\u0246\u0247\u0003z=\u0000"+
		"\u0247\u0248\u0005\u001c\u0000\u0000\u0248\u0249\u0003v;\u0000\u0249\u024a"+
		"\u0005\u001d\u0000\u0000\u024a\u0250\u0001\u0000\u0000\u0000\u024b\u024c"+
		"\u0003z=\u0000\u024c\u024d\u0005\u001c\u0000\u0000\u024d\u024e\u0005\u001d"+
		"\u0000\u0000\u024e\u0250\u0001\u0000\u0000\u0000\u024f\u0246\u0001\u0000"+
		"\u0000\u0000\u024f\u024b\u0001\u0000\u0000\u0000\u0250u\u0001\u0000\u0000"+
		"\u0000\u0251\u0252\u0003x<\u0000\u0252\u0253\u0005\u000e\u0000\u0000\u0253"+
		"\u0254\u0003v;\u0000\u0254\u0257\u0001\u0000\u0000\u0000\u0255\u0257\u0003"+
		"x<\u0000\u0256\u0251\u0001\u0000\u0000\u0000\u0256\u0255\u0001\u0000\u0000"+
		"\u0000\u0257w\u0001\u0000\u0000\u0000\u0258\u0259\u00032\u0019\u0000\u0259"+
		"\u025a\u0005\u000f\u0000\u0000\u025a\u025b\u0003 \u0010\u0000\u025by\u0001"+
		"\u0000\u0000\u0000\u025c\u025d\u0007\u0007\u0000\u0000\u025d{\u0001\u0000"+
		"\u0000\u0000\u025e\u0265\u0003\u0088D\u0000\u025f\u0265\u0003\u0098L\u0000"+
		"\u0260\u0265\u0003\u00b8\\\u0000\u0261\u0265\u0003\u008aE\u0000\u0262"+
		"\u0265\u0003\u00c8d\u0000\u0263\u0265\u0003\u00c4b\u0000\u0264\u025e\u0001"+
		"\u0000\u0000\u0000\u0264\u025f\u0001\u0000\u0000\u0000\u0264\u0260\u0001"+
		"\u0000\u0000\u0000\u0264\u0261\u0001\u0000\u0000\u0000\u0264\u0262\u0001"+
		"\u0000\u0000\u0000\u0264\u0263\u0001\u0000\u0000\u0000\u0265}\u0001\u0000"+
		"\u0000\u0000\u0266\u026b\u0003\u0080@\u0000\u0267\u0268\u0003\u0080@\u0000"+
		"\u0268\u0269\u0003~?\u0000\u0269\u026b\u0001\u0000\u0000\u0000\u026a\u0266"+
		"\u0001\u0000\u0000\u0000\u026a\u0267\u0001\u0000\u0000\u0000\u026b\u007f"+
		"\u0001\u0000\u0000\u0000\u026c\u0276\u0003\u0086C\u0000\u026d\u0276\u0003"+
		"\u0096K\u0000\u026e\u0276\u0003\u00b6[\u0000\u026f\u0276\u0003\u00ba]"+
		"\u0000\u0270\u0276\u0003\u00be_\u0000\u0271\u0276\u0003\u00c0`\u0000\u0272"+
		"\u0276\u0003\u00c2a\u0000\u0273\u0276\u0003\u0082A\u0000\u0274\u0276\u0003"+
		"\u0084B\u0000\u0275\u026c\u0001\u0000\u0000\u0000\u0275\u026d\u0001\u0000"+
		"\u0000\u0000\u0275\u026e\u0001\u0000\u0000\u0000\u0275\u026f\u0001\u0000"+
		"\u0000\u0000\u0275\u0270\u0001\u0000\u0000\u0000\u0275\u0271\u0001\u0000"+
		"\u0000\u0000\u0275\u0272\u0001\u0000\u0000\u0000\u0275\u0273\u0001\u0000"+
		"\u0000\u0000\u0275\u0274\u0001\u0000\u0000\u0000\u0276\u0081\u0001\u0000"+
		"\u0000\u0000\u0277\u0278\u0005H\u0000\u0000\u0278\u0279\u0005\u0018\u0000"+
		"\u0000\u0279\u027a\u0005\u0019\u0000\u0000\u027a\u027e\u0005\n\u0000\u0000"+
		"\u027b\u027c\u0005H\u0000\u0000\u027c\u027e\u0005\n\u0000\u0000\u027d"+
		"\u0277\u0001\u0000\u0000\u0000\u027d\u027b\u0001\u0000\u0000\u0000\u027e"+
		"\u0083\u0001\u0000\u0000\u0000\u027f\u0280\u0005I\u0000\u0000\u0280\u0281"+
		"\u0005\u0018\u0000\u0000\u0281\u0282\u0005\u0019\u0000\u0000\u0282\u0286"+
		"\u0005\n\u0000\u0000\u0283\u0284\u0005I\u0000\u0000\u0284\u0286\u0005"+
		"\n\u0000\u0000\u0285\u027f\u0001\u0000\u0000\u0000\u0285\u0283\u0001\u0000"+
		"\u0000\u0000\u0286\u0085\u0001\u0000\u0000\u0000\u0287\u0288\u00053\u0000"+
		"\u0000\u0288\u0289\u0005\u0018\u0000\u0000\u0289\u028a\u00054\u0000\u0000"+
		"\u028a\u028b\u0005 \u0000\u0000\u028b\u028c\u0003\u0092I\u0000\u028c\u028d"+
		"\u0005\u0019\u0000\u0000\u028d\u028e\u0005\n\u0000\u0000\u028e\u0296\u0001"+
		"\u0000\u0000\u0000\u028f\u0290\u00053\u0000\u0000\u0290\u0291\u0005\u0018"+
		"\u0000\u0000\u0291\u0292\u0003\u0092I\u0000\u0292\u0293\u0005\u0019\u0000"+
		"\u0000\u0293\u0294\u0005\n\u0000\u0000\u0294\u0296\u0001\u0000\u0000\u0000"+
		"\u0295\u0287\u0001\u0000\u0000\u0000\u0295\u028f\u0001\u0000\u0000\u0000"+
		"\u0296\u0087\u0001\u0000\u0000\u0000\u0297\u0298\u0005D\u0000\u0000\u0298"+
		"\u0299\u0005\u0018\u0000\u0000\u0299\u029a\u00054\u0000\u0000\u029a\u029b"+
		"\u0005 \u0000\u0000\u029b\u029c\u0003\u0094J\u0000\u029c\u029d\u0005\u0019"+
		"\u0000\u0000\u029d\u029e\u0005\n\u0000\u0000\u029e\u02a6\u0001\u0000\u0000"+
		"\u0000\u029f\u02a0\u0005D\u0000\u0000\u02a0\u02a1\u0005\u0018\u0000\u0000"+
		"\u02a1\u02a2\u0003\u0094J\u0000\u02a2\u02a3\u0005\u0019\u0000\u0000\u02a3"+
		"\u02a4\u0005\n\u0000\u0000\u02a4\u02a6\u0001\u0000\u0000\u0000\u02a5\u0297"+
		"\u0001\u0000\u0000\u0000\u02a5\u029f\u0001\u0000\u0000\u0000\u02a6\u0089"+
		"\u0001\u0000\u0000\u0000\u02a7\u02a8\u0005G\u0000\u0000\u02a8\u02a9\u0005"+
		"\u0018\u0000\u0000\u02a9\u02aa\u0005;\u0000\u0000\u02aa\u02ab\u0005 \u0000"+
		"\u0000\u02ab\u02ac\u0003\u008cF\u0000\u02ac\u02ad\u0005\f\u0000\u0000"+
		"\u02ad\u02ae\u0005<\u0000\u0000\u02ae\u02af\u0005 \u0000\u0000\u02af\u02b0"+
		"\u0003\u008eG\u0000\u02b0\u02b1\u0005\u0019\u0000\u0000\u02b1\u02b2\u0005"+
		"\n\u0000\u0000\u02b2\u008b\u0001\u0000\u0000\u0000\u02b3\u02b4\u0005&"+
		"\u0000\u0000\u02b4\u02b5\u0003R)\u0000\u02b5\u008d\u0001\u0000\u0000\u0000"+
		"\u02b6\u02bc\u0003\u0090H\u0000\u02b7\u02b8\u0003\u0090H\u0000\u02b8\u02b9"+
		"\u0005\f\u0000\u0000\u02b9\u02ba\u0003\u008eG\u0000\u02ba\u02bc\u0001"+
		"\u0000\u0000\u0000\u02bb\u02b6\u0001\u0000\u0000\u0000\u02bb\u02b7\u0001"+
		"\u0000\u0000\u0000\u02bc\u008f\u0001\u0000\u0000\u0000\u02bd\u02be\u0007"+
		"\b\u0000\u0000\u02be\u0091\u0001\u0000\u0000\u0000\u02bf\u02c0\u0005\u0005"+
		"\u0000\u0000\u02c0\u0093\u0001\u0000\u0000\u0000\u02c1\u02c2\u0005\u0005"+
		"\u0000\u0000\u02c2\u0095\u0001\u0000\u0000\u0000\u02c3\u02c4\u00055\u0000"+
		"\u0000\u02c4\u02c5\u0005\u0018\u0000\u0000\u02c5\u02c6\u00056\u0000\u0000"+
		"\u02c6\u02c7\u0005 \u0000\u0000\u02c7\u02c8\u0003\u009cN\u0000\u02c8\u02c9"+
		"\u0005\f\u0000\u0000\u02c9\u02ca\u00057\u0000\u0000\u02ca\u02cb\u0005"+
		" \u0000\u0000\u02cb\u02cc\u0005\u001c\u0000\u0000\u02cc\u02cd\u0003\u009a"+
		"M\u0000\u02cd\u02ce\u0005\u001d\u0000\u0000\u02ce\u02cf\u0005\u0019\u0000"+
		"\u0000\u02cf\u02d0\u0005\n\u0000\u0000\u02d0\u0097\u0001\u0000\u0000\u0000"+
		"\u02d1\u02d2\u0005E\u0000\u0000\u02d2\u02d3\u0005\u0018\u0000\u0000\u02d3"+
		"\u02d4\u00056\u0000\u0000\u02d4\u02d5\u0005 \u0000\u0000\u02d5\u02d6\u0003"+
		"\u00a0P\u0000\u02d6\u02d7\u0005\f\u0000\u0000\u02d7\u02d8\u00057\u0000"+
		"\u0000\u02d8\u02d9\u0005 \u0000\u0000\u02d9\u02da\u0005\u001c\u0000\u0000"+
		"\u02da\u02db\u0003\u009eO\u0000\u02db\u02dc\u0005\u001d\u0000\u0000\u02dc"+
		"\u02dd\u0005\u0019\u0000\u0000\u02dd\u02de\u0005\n\u0000\u0000\u02de\u0099"+
		"\u0001\u0000\u0000\u0000\u02df\u02e4\u0005\u0005\u0000\u0000\u02e0\u02e1"+
		"\u0005\u0005\u0000\u0000\u02e1\u02e2\u0005\f\u0000\u0000\u02e2\u02e4\u0003"+
		"\u009aM\u0000\u02e3\u02df\u0001\u0000\u0000\u0000\u02e3\u02e0\u0001\u0000"+
		"\u0000\u0000\u02e4\u009b\u0001\u0000\u0000\u0000\u02e5\u02e9\u0003(\u0014"+
		"\u0000\u02e6\u02e7\u0005\u0001\u0000\u0000\u02e7\u02e9\u0003(\u0014\u0000"+
		"\u02e8\u02e5\u0001\u0000\u0000\u0000\u02e8\u02e6\u0001\u0000\u0000\u0000"+
		"\u02e9\u009d\u0001\u0000\u0000\u0000\u02ea\u02ef\u0005\u0005\u0000\u0000"+
		"\u02eb\u02ec\u0005\u0005\u0000\u0000\u02ec\u02ed\u0005\f\u0000\u0000\u02ed"+
		"\u02ef\u0003\u009eO\u0000\u02ee\u02ea\u0001\u0000\u0000\u0000\u02ee\u02eb"+
		"\u0001\u0000\u0000\u0000\u02ef\u009f\u0001\u0000\u0000\u0000\u02f0\u02f4"+
		"\u0003(\u0014\u0000\u02f1\u02f2\u0005\u0001\u0000\u0000\u02f2\u02f4\u0003"+
		"(\u0014\u0000\u02f3\u02f0\u0001\u0000\u0000\u0000\u02f3\u02f1\u0001\u0000"+
		"\u0000\u0000\u02f4\u00a1\u0001\u0000\u0000\u0000\u02f5\u0300\u0003(\u0014"+
		"\u0000\u02f6\u02f7\u0005\u0001\u0000\u0000\u02f7\u0300\u0003(\u0014\u0000"+
		"\u02f8\u0300\u00034\u001a\u0000\u02f9\u0300\u0003n7\u0000\u02fa\u02fb"+
		"\u0005\u0001\u0000\u0000\u02fb\u0300\u0003n7\u0000\u02fc\u0300\u0003,"+
		"\u0016\u0000\u02fd\u02fe\u0005\u0001\u0000\u0000\u02fe\u0300\u0003,\u0016"+
		"\u0000\u02ff\u02f5\u0001\u0000\u0000\u0000\u02ff\u02f6\u0001\u0000\u0000"+
		"\u0000\u02ff\u02f8\u0001\u0000\u0000\u0000\u02ff\u02f9\u0001\u0000\u0000"+
		"\u0000\u02ff\u02fa\u0001\u0000\u0000\u0000\u02ff\u02fc\u0001\u0000\u0000"+
		"\u0000\u02ff\u02fd\u0001\u0000\u0000\u0000\u0300\u00a3\u0001\u0000\u0000"+
		"\u0000\u0301\u030c\u0003(\u0014\u0000\u0302\u0303\u0005\u0001\u0000\u0000"+
		"\u0303\u030c\u0003(\u0014\u0000\u0304\u030c\u00034\u001a\u0000\u0305\u030c"+
		"\u0003n7\u0000\u0306\u0307\u0005\u0001\u0000\u0000\u0307\u030c\u0003n"+
		"7\u0000\u0308\u030c\u0003,\u0016\u0000\u0309\u030a\u0005\u0001\u0000\u0000"+
		"\u030a\u030c\u0003,\u0016\u0000\u030b\u0301\u0001\u0000\u0000\u0000\u030b"+
		"\u0302\u0001\u0000\u0000\u0000\u030b\u0304\u0001\u0000\u0000\u0000\u030b"+
		"\u0305\u0001\u0000\u0000\u0000\u030b\u0306\u0001\u0000\u0000\u0000\u030b"+
		"\u0308\u0001\u0000\u0000\u0000\u030b\u0309\u0001\u0000\u0000\u0000\u030c"+
		"\u00a5\u0001\u0000\u0000\u0000\u030d\u0318\u0003(\u0014\u0000\u030e\u030f"+
		"\u0005\u0001\u0000\u0000\u030f\u0318\u0003(\u0014\u0000\u0310\u0318\u0003"+
		"4\u001a\u0000\u0311\u0318\u0003n7\u0000\u0312\u0313\u0005\u0001\u0000"+
		"\u0000\u0313\u0318\u0003n7\u0000\u0314\u0318\u0003,\u0016\u0000\u0315"+
		"\u0316\u0005\u0001\u0000\u0000\u0316\u0318\u0003,\u0016\u0000\u0317\u030d"+
		"\u0001\u0000\u0000\u0000\u0317\u030e\u0001\u0000\u0000\u0000\u0317\u0310"+
		"\u0001\u0000\u0000\u0000\u0317\u0311\u0001\u0000\u0000\u0000\u0317\u0312"+
		"\u0001\u0000\u0000\u0000\u0317\u0314\u0001\u0000\u0000\u0000\u0317\u0315"+
		"\u0001\u0000\u0000\u0000\u0318\u00a7\u0001\u0000\u0000\u0000\u0319\u0324"+
		"\u0003(\u0014\u0000\u031a\u031b\u0005\u0001\u0000\u0000\u031b\u0324\u0003"+
		"(\u0014\u0000\u031c\u0324\u00034\u001a\u0000\u031d\u0324\u0003n7\u0000"+
		"\u031e\u031f\u0005\u0001\u0000\u0000\u031f\u0324\u0003n7\u0000\u0320\u0324"+
		"\u0003,\u0016\u0000\u0321\u0322\u0005\u0001\u0000\u0000\u0322\u0324\u0003"+
		",\u0016\u0000\u0323\u0319\u0001\u0000\u0000\u0000\u0323\u031a\u0001\u0000"+
		"\u0000\u0000\u0323\u031c\u0001\u0000\u0000\u0000\u0323\u031d\u0001\u0000"+
		"\u0000\u0000\u0323\u031e\u0001\u0000\u0000\u0000\u0323\u0320\u0001\u0000"+
		"\u0000\u0000\u0323\u0321\u0001\u0000\u0000\u0000\u0324\u00a9\u0001\u0000"+
		"\u0000\u0000\u0325\u032b\u0003\u00a2Q\u0000\u0326\u0327\u0003\u00a2Q\u0000"+
		"\u0327\u0328\u0005\f\u0000\u0000\u0328\u0329\u0003\u00aaU\u0000\u0329"+
		"\u032b\u0001\u0000\u0000\u0000\u032a\u0325\u0001\u0000\u0000\u0000\u032a"+
		"\u0326\u0001\u0000\u0000\u0000\u032b\u00ab\u0001\u0000\u0000\u0000\u032c"+
		"\u0332\u0003\u00a4R\u0000\u032d\u032e\u0003\u00a4R\u0000\u032e\u032f\u0005"+
		"\f\u0000\u0000\u032f\u0330\u0003\u00acV\u0000\u0330\u0332\u0001\u0000"+
		"\u0000\u0000\u0331\u032c\u0001\u0000\u0000\u0000\u0331\u032d\u0001\u0000"+
		"\u0000\u0000\u0332\u00ad\u0001\u0000\u0000\u0000\u0333\u0339\u0003\u00a6"+
		"S\u0000\u0334\u0335\u0003\u00a6S\u0000\u0335\u0336\u0005\f\u0000\u0000"+
		"\u0336\u0337\u0003\u00aeW\u0000\u0337\u0339\u0001\u0000\u0000\u0000\u0338"+
		"\u0333\u0001\u0000\u0000\u0000\u0338\u0334\u0001\u0000\u0000\u0000\u0339"+
		"\u00af\u0001\u0000\u0000\u0000\u033a\u0341\u0003\u00a8T\u0000\u033b\u033c"+
		"\u0003\u00a8T\u0000\u033c\u033d\u0005\f\u0000\u0000\u033d\u033e\u0003"+
		"\u00b0X\u0000\u033e\u033f\u0003\u00b0X\u0000\u033f\u0341\u0001\u0000\u0000"+
		"\u0000\u0340\u033a\u0001\u0000\u0000\u0000\u0340\u033b\u0001\u0000\u0000"+
		"\u0000\u0341\u00b1\u0001\u0000\u0000\u0000\u0342\u0343\u00058\u0000\u0000"+
		"\u0343\u00b3\u0001\u0000\u0000\u0000\u0344\u0345\u0005F\u0000\u0000\u0345"+
		"\u00b5\u0001\u0000\u0000\u0000\u0346\u0347\u0003\u00b2Y\u0000\u0347\u0348"+
		"\u0005\u0018\u0000\u0000\u0348\u0349\u00059\u0000\u0000\u0349\u034a\u0005"+
		" \u0000\u0000\u034a\u034b\u0005\u001c\u0000\u0000\u034b\u034c\u0003\u00aa"+
		"U\u0000\u034c\u034d\u0005\u001d\u0000\u0000\u034d\u034e\u0005\f\u0000"+
		"\u0000\u034e\u034f\u0005:\u0000\u0000\u034f\u0350\u0005 \u0000\u0000\u0350"+
		"\u0351\u0005\u001c\u0000\u0000\u0351\u0352\u0003\u00aeW\u0000\u0352\u0353"+
		"\u0005\u001d\u0000\u0000\u0353\u0354\u0005\u0019\u0000\u0000\u0354\u0355"+
		"\u0005\n\u0000\u0000\u0355\u0367\u0001\u0000\u0000\u0000\u0356\u0357\u0003"+
		"\u00b2Y\u0000\u0357\u0358\u0005\u0018\u0000\u0000\u0358\u0359\u0005:\u0000"+
		"\u0000\u0359\u035a\u0005 \u0000\u0000\u035a\u035b\u0005\u001c\u0000\u0000"+
		"\u035b\u035c\u0003\u00aeW\u0000\u035c\u035d\u0005\u001d\u0000\u0000\u035d"+
		"\u035e\u0005\f\u0000\u0000\u035e\u035f\u00059\u0000\u0000\u035f\u0360"+
		"\u0005 \u0000\u0000\u0360\u0361\u0005\u001c\u0000\u0000\u0361\u0362\u0003"+
		"\u00aaU\u0000\u0362\u0363\u0005\u001d\u0000\u0000\u0363\u0364\u0005\u0019"+
		"\u0000\u0000\u0364\u0365\u0005\n\u0000\u0000\u0365\u0367\u0001\u0000\u0000"+
		"\u0000\u0366\u0346\u0001\u0000\u0000\u0000\u0366\u0356\u0001\u0000\u0000"+
		"\u0000\u0367\u00b7\u0001\u0000\u0000\u0000\u0368\u0369\u0003\u00b4Z\u0000"+
		"\u0369\u036a\u0005\u0018\u0000\u0000\u036a\u036b\u00059\u0000\u0000\u036b"+
		"\u036c\u0005 \u0000\u0000\u036c\u036d\u0005\u001c\u0000\u0000\u036d\u036e"+
		"\u0003\u00acV\u0000\u036e\u036f\u0005\u001d\u0000\u0000\u036f\u0370\u0005"+
		"\f\u0000\u0000\u0370\u0371\u0005:\u0000\u0000\u0371\u0372\u0005 \u0000"+
		"\u0000\u0372\u0373\u0005\u001c\u0000\u0000\u0373\u0374\u0003\u00b0X\u0000"+
		"\u0374\u0375\u0005\u001d\u0000\u0000\u0375\u0376\u0005\u0019\u0000\u0000"+
		"\u0376\u0377\u0005\n\u0000\u0000\u0377\u0389\u0001\u0000\u0000\u0000\u0378"+
		"\u0379\u0003\u00b4Z\u0000\u0379\u037a\u0005\u0018\u0000\u0000\u037a\u037b"+
		"\u0005:\u0000\u0000\u037b\u037c\u0005 \u0000\u0000\u037c\u037d\u0005\u001c"+
		"\u0000\u0000\u037d\u037e\u0003\u00b0X\u0000\u037e\u037f\u0005\u001d\u0000"+
		"\u0000\u037f\u0380\u0005\f\u0000\u0000\u0380\u0381\u00059\u0000\u0000"+
		"\u0381\u0382\u0005 \u0000\u0000\u0382\u0383\u0005\u001c\u0000\u0000\u0383"+
		"\u0384\u0003\u00acV\u0000\u0384\u0385\u0005\u001d\u0000\u0000\u0385\u0386"+
		"\u0005\u0019\u0000\u0000\u0386\u0387\u0005\n\u0000\u0000\u0387\u0389\u0001"+
		"\u0000\u0000\u0000\u0388\u0368\u0001\u0000\u0000\u0000\u0388\u0378\u0001"+
		"\u0000\u0000\u0000\u0389\u00b9\u0001\u0000\u0000\u0000\u038a\u038b\u0005"+
		"1\u0000\u0000\u038b\u038c\u0005\u0018\u0000\u0000\u038c\u038d\u00054\u0000"+
		"\u0000\u038d\u038e\u0005 \u0000\u0000\u038e\u038f\u0003\u00bc^\u0000\u038f"+
		"\u0390\u0005\u0019\u0000\u0000\u0390\u0391\u0005\n\u0000\u0000\u0391\u00bb"+
		"\u0001\u0000\u0000\u0000\u0392\u0393\u0005\u0005\u0000\u0000\u0393\u00bd"+
		"\u0001\u0000\u0000\u0000\u0394\u0395\u00052\u0000\u0000\u0395\u0396\u0005"+
		"\u0018\u0000\u0000\u0396\u0397\u0005\u0019\u0000\u0000\u0397\u039b\u0005"+
		"\n\u0000\u0000\u0398\u0399\u00052\u0000\u0000\u0399\u039b\u0005\n\u0000"+
		"\u0000\u039a\u0394\u0001\u0000\u0000\u0000\u039a\u0398\u0001\u0000\u0000"+
		"\u0000\u039b\u00bf\u0001\u0000\u0000\u0000\u039c\u039d\u0005/\u0000\u0000"+
		"\u039d\u039e\u0005\u0018\u0000\u0000\u039e\u039f\u0005\u0019\u0000\u0000"+
		"\u039f\u03a3\u0005\n\u0000\u0000\u03a0\u03a1\u0005/\u0000\u0000\u03a1"+
		"\u03a3\u0005\n\u0000\u0000\u03a2\u039c\u0001\u0000\u0000\u0000\u03a2\u03a0"+
		"\u0001\u0000\u0000\u0000\u03a3\u00c1\u0001\u0000\u0000\u0000\u03a4\u03a5"+
		"\u00050\u0000\u0000\u03a5\u03a6\u0005\u0018\u0000\u0000\u03a6\u03a7\u0005"+
		"\u0019\u0000\u0000\u03a7\u03ab\u0005\n\u0000\u0000\u03a8\u03a9\u00050"+
		"\u0000\u0000\u03a9\u03ab\u0005\n\u0000\u0000\u03aa\u03a4\u0001\u0000\u0000"+
		"\u0000\u03aa\u03a8\u0001\u0000\u0000\u0000\u03ab\u00c3\u0001\u0000\u0000"+
		"\u0000\u03ac\u03ad\u0003\u00c6c\u0000\u03ad\u03ae\u0005\u0018\u0000\u0000"+
		"\u03ae\u03af\u0005K\u0000\u0000\u03af\u03b0\u0005 \u0000\u0000\u03b0\u03b1"+
		"\u0003\u00ccf\u0000\u03b1\u03b2\u0005\f\u0000\u0000\u03b2\u03b3\u0005"+
		"L\u0000\u0000\u03b3\u03b4\u0005 \u0000\u0000\u03b4\u03b5\u0005\u001c\u0000"+
		"\u0000\u03b5\u03b6\u0003\u00d0h\u0000\u03b6\u03b7\u0005\u001d\u0000\u0000"+
		"\u03b7\u03b8\u0005\u0019\u0000\u0000\u03b8\u03b9\u0005\n\u0000\u0000\u03b9"+
		"\u03c9\u0001\u0000\u0000\u0000\u03ba\u03bb\u0003\u00c6c\u0000\u03bb\u03bc"+
		"\u0005\u0018\u0000\u0000\u03bc\u03bd\u0005L\u0000\u0000\u03bd\u03be\u0005"+
		" \u0000\u0000\u03be\u03bf\u0005\u001c\u0000\u0000\u03bf\u03c0\u0003\u00d0"+
		"h\u0000\u03c0\u03c1\u0005\u001d\u0000\u0000\u03c1\u03c2\u0005\f\u0000"+
		"\u0000\u03c2\u03c3\u0005K\u0000\u0000\u03c3\u03c4\u0005 \u0000\u0000\u03c4"+
		"\u03c5\u0003\u00ccf\u0000\u03c5\u03c6\u0005\u0019\u0000\u0000\u03c6\u03c7"+
		"\u0005\n\u0000\u0000\u03c7\u03c9\u0001\u0000\u0000\u0000\u03c8\u03ac\u0001"+
		"\u0000\u0000\u0000\u03c8\u03ba\u0001\u0000\u0000\u0000\u03c9\u00c5\u0001"+
		"\u0000\u0000\u0000\u03ca\u03cb\u0005,\u0000\u0000\u03cb\u00c7\u0001\u0000"+
		"\u0000\u0000\u03cc\u03cd\u0003\u00cae\u0000\u03cd\u03ce\u0005\u0018\u0000"+
		"\u0000\u03ce\u03cf\u0005K\u0000\u0000\u03cf\u03d0\u0005 \u0000\u0000\u03d0"+
		"\u03d1\u0003\u00ccf\u0000\u03d1\u03d2\u0005\f\u0000\u0000\u03d2\u03d3"+
		"\u0005L\u0000\u0000\u03d3\u03d4\u0005 \u0000\u0000\u03d4\u03d5\u0005\u001c"+
		"\u0000\u0000\u03d5\u03d6\u0003\u00d0h\u0000\u03d6\u03d7\u0005\u001d\u0000"+
		"\u0000\u03d7\u03d8\u0005\u0019\u0000\u0000\u03d8\u03d9\u0005\n\u0000\u0000"+
		"\u03d9\u03e9\u0001\u0000\u0000\u0000\u03da\u03db\u0003\u00cae\u0000\u03db"+
		"\u03dc\u0005\u0018\u0000\u0000\u03dc\u03dd\u0005L\u0000\u0000\u03dd\u03de"+
		"\u0005 \u0000\u0000\u03de\u03df\u0005\u001c\u0000\u0000\u03df\u03e0\u0003"+
		"\u00d0h\u0000\u03e0\u03e1\u0005\u001d\u0000\u0000\u03e1\u03e2\u0005\f"+
		"\u0000\u0000\u03e2\u03e3\u0005K\u0000\u0000\u03e3\u03e4\u0005 \u0000\u0000"+
		"\u03e4\u03e5\u0003\u00ccf\u0000\u03e5\u03e6\u0005\u0019\u0000\u0000\u03e6"+
		"\u03e7\u0005\n\u0000\u0000\u03e7\u03e9\u0001\u0000\u0000\u0000\u03e8\u03cc"+
		"\u0001\u0000\u0000\u0000\u03e8\u03da\u0001\u0000\u0000\u0000\u03e9\u00c9"+
		"\u0001\u0000\u0000\u0000\u03ea\u03eb\u0005J\u0000\u0000\u03eb\u00cb\u0001"+
		"\u0000\u0000\u0000\u03ec\u03ed\u0005\u0004\u0000\u0000\u03ed\u00cd\u0001"+
		"\u0000\u0000\u0000\u03ee\u03f1\u0003x<\u0000\u03ef\u03f1\u0003(\u0014"+
		"\u0000\u03f0\u03ee\u0001\u0000\u0000\u0000\u03f0\u03ef\u0001\u0000\u0000"+
		"\u0000\u03f1\u00cf\u0001\u0000\u0000\u0000\u03f2\u03f8\u0003\u00ceg\u0000"+
		"\u03f3\u03f4\u0003\u00ceg\u0000\u03f4\u03f5\u0005\u000e\u0000\u0000\u03f5"+
		"\u03f6\u0003\u00d0h\u0000\u03f6\u03f8\u0001\u0000\u0000\u0000\u03f7\u03f2"+
		"\u0001\u0000\u0000\u0000\u03f7\u03f3\u0001\u0000\u0000\u0000\u03f8\u00d1"+
		"\u0001\u0000\u0000\u0000@\u00d5\u00de\u00f6\u00fa\u0107\u0112\u011e\u0125"+
		"\u013b\u0148\u014f\u0158\u015f\u0168\u016e\u0177\u0183\u01a0\u01a9\u01b0"+
		"\u01bc\u01cd\u01d5\u01da\u01e1\u01e8\u01ed\u01f4\u0201\u0217\u0221\u0235"+
		"\u0240\u024f\u0256\u0264\u026a\u0275\u027d\u0285\u0295\u02a5\u02bb\u02e3"+
		"\u02e8\u02ee\u02f3\u02ff\u030b\u0317\u0323\u032a\u0331\u0338\u0340\u0366"+
		"\u0388\u039a\u03a2\u03aa\u03c8\u03e8\u03f0\u03f7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}