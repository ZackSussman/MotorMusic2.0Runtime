// Generated from /Users/zacksussman/Documents/code/motormusic/motormusic2.0/motormusic2.0-runtime/antlr/MotorMusicParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MotorMusicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NUMBER=2, NAMED_SYMBOL=3, LCURLY=4, RCURLY=5, LPAREN=6, RPAREN=7, 
		COLON=8, UNRECOGNIZED=9;
	public static final int
		RULE_compilationUnit = 0, RULE_momentSpecification = 1, RULE_specification_list = 2, 
		RULE_specification = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "momentSpecification", "specification_list", "specification"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NUMBER", "NAMED_SYMBOL", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"COLON", "UNRECOGNIZED"
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
	public String getGrammarFileName() { return "MotorMusicParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MotorMusicParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompilationUnitContext extends ParserRuleContext {
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	 
		public CompilationUnitContext() { }
		public void copyFrom(CompilationUnitContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NonEmptyProgramContext extends CompilationUnitContext {
		public Specification_listContext specifications;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public Specification_listContext specification_list() {
			return getRuleContext(Specification_listContext.class,0);
		}
		public NonEmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmptyProgramContext extends CompilationUnitContext {
		public Token e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public EmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		try {
			setState(12);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(8);
				((EmptyProgramContext)_localctx).e = match(EOF);
				}
				break;
			case NUMBER:
			case LPAREN:
				_localctx = new NonEmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(9);
				((NonEmptyProgramContext)_localctx).specifications = specification_list();
				setState(10);
				match(EOF);
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
	public static class MomentSpecificationContext extends ParserRuleContext {
		public MomentSpecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_momentSpecification; }
	 
		public MomentSpecificationContext() { }
		public void copyFrom(MomentSpecificationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PathPointContext extends MomentSpecificationContext {
		public Token time;
		public Token path;
		public TerminalNode COLON() { return getToken(MotorMusicParser.COLON, 0); }
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public TerminalNode NAMED_SYMBOL() { return getToken(MotorMusicParser.NAMED_SYMBOL, 0); }
		public PathPointContext(MomentSpecificationContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ROOMContext extends MomentSpecificationContext {
		public Token time;
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public ROOMContext(MomentSpecificationContext ctx) { copyFrom(ctx); }
	}

	public final MomentSpecificationContext momentSpecification() throws RecognitionException {
		MomentSpecificationContext _localctx = new MomentSpecificationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_momentSpecification);
		try {
			setState(18);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new ROOMContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(14);
				((ROOMContext)_localctx).time = match(NUMBER);
				}
				break;
			case 2:
				_localctx = new PathPointContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(15);
				((PathPointContext)_localctx).time = match(NUMBER);
				setState(16);
				match(COLON);
				setState(17);
				((PathPointContext)_localctx).path = match(NAMED_SYMBOL);
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
	public static class Specification_listContext extends ParserRuleContext {
		public Specification_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specification_list; }
	 
		public Specification_listContext() { }
		public void copyFrom(Specification_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleSpecificationListContext extends Specification_listContext {
		public SpecificationContext top;
		public SpecificationContext specification() {
			return getRuleContext(SpecificationContext.class,0);
		}
		public SingleSpecificationListContext(Specification_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiSpecificationListContext extends Specification_listContext {
		public SpecificationContext top;
		public Specification_listContext rest;
		public SpecificationContext specification() {
			return getRuleContext(SpecificationContext.class,0);
		}
		public Specification_listContext specification_list() {
			return getRuleContext(Specification_listContext.class,0);
		}
		public MultiSpecificationListContext(Specification_listContext ctx) { copyFrom(ctx); }
	}

	public final Specification_listContext specification_list() throws RecognitionException {
		Specification_listContext _localctx = new Specification_listContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_specification_list);
		try {
			setState(24);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleSpecificationListContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				((SingleSpecificationListContext)_localctx).top = specification(0);
				}
				break;
			case 2:
				_localctx = new MultiSpecificationListContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(21);
				((MultiSpecificationListContext)_localctx).top = specification(0);
				setState(22);
				((MultiSpecificationListContext)_localctx).rest = specification_list();
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
	public static class SpecificationContext extends ParserRuleContext {
		public SpecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specification; }
	 
		public SpecificationContext() { }
		public void copyFrom(SpecificationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenSeqContext extends SpecificationContext {
		public Specification_listContext specifications;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public Specification_listContext specification_list() {
			return getRuleContext(Specification_listContext.class,0);
		}
		public ParenSeqContext(SpecificationContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConContext extends SpecificationContext {
		public SpecificationContext top;
		public Specification_listContext specifications;
		public TerminalNode LCURLY() { return getToken(MotorMusicParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParser.RCURLY, 0); }
		public SpecificationContext specification() {
			return getRuleContext(SpecificationContext.class,0);
		}
		public Specification_listContext specification_list() {
			return getRuleContext(Specification_listContext.class,0);
		}
		public ConContext(SpecificationContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MomentContext extends SpecificationContext {
		public MomentSpecificationContext throughThisMoment;
		public MomentSpecificationContext momentSpecification() {
			return getRuleContext(MomentSpecificationContext.class,0);
		}
		public MomentContext(SpecificationContext ctx) { copyFrom(ctx); }
	}

	public final SpecificationContext specification() throws RecognitionException {
		return specification(0);
	}

	private SpecificationContext specification(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SpecificationContext _localctx = new SpecificationContext(_ctx, _parentState);
		SpecificationContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_specification, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				{
				_localctx = new MomentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(27);
				((MomentContext)_localctx).throughThisMoment = momentSpecification();
				}
				break;
			case LPAREN:
				{
				_localctx = new ParenSeqContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(28);
				match(LPAREN);
				setState(29);
				((ParenSeqContext)_localctx).specifications = specification_list();
				setState(30);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(41);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ConContext(new SpecificationContext(_parentctx, _parentState));
					((ConContext)_localctx).top = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_specification);
					setState(34);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(35);
					match(LCURLY);
					setState(36);
					((ConContext)_localctx).specifications = specification_list();
					setState(37);
					match(RCURLY);
					}
					} 
				}
				setState(43);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3:
			return specification_sempred((SpecificationContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean specification_sempred(SpecificationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\t-\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000\r\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u0013\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0003\u0002\u0019\b\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003!\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003(\b"+
		"\u0003\n\u0003\f\u0003+\t\u0003\u0001\u0003\u0000\u0001\u0006\u0004\u0000"+
		"\u0002\u0004\u0006\u0000\u0000-\u0000\f\u0001\u0000\u0000\u0000\u0002"+
		"\u0012\u0001\u0000\u0000\u0000\u0004\u0018\u0001\u0000\u0000\u0000\u0006"+
		" \u0001\u0000\u0000\u0000\b\r\u0005\u0000\u0000\u0001\t\n\u0003\u0004"+
		"\u0002\u0000\n\u000b\u0005\u0000\u0000\u0001\u000b\r\u0001\u0000\u0000"+
		"\u0000\f\b\u0001\u0000\u0000\u0000\f\t\u0001\u0000\u0000\u0000\r\u0001"+
		"\u0001\u0000\u0000\u0000\u000e\u0013\u0005\u0002\u0000\u0000\u000f\u0010"+
		"\u0005\u0002\u0000\u0000\u0010\u0011\u0005\b\u0000\u0000\u0011\u0013\u0005"+
		"\u0003\u0000\u0000\u0012\u000e\u0001\u0000\u0000\u0000\u0012\u000f\u0001"+
		"\u0000\u0000\u0000\u0013\u0003\u0001\u0000\u0000\u0000\u0014\u0019\u0003"+
		"\u0006\u0003\u0000\u0015\u0016\u0003\u0006\u0003\u0000\u0016\u0017\u0003"+
		"\u0004\u0002\u0000\u0017\u0019\u0001\u0000\u0000\u0000\u0018\u0014\u0001"+
		"\u0000\u0000\u0000\u0018\u0015\u0001\u0000\u0000\u0000\u0019\u0005\u0001"+
		"\u0000\u0000\u0000\u001a\u001b\u0006\u0003\uffff\uffff\u0000\u001b!\u0003"+
		"\u0002\u0001\u0000\u001c\u001d\u0005\u0006\u0000\u0000\u001d\u001e\u0003"+
		"\u0004\u0002\u0000\u001e\u001f\u0005\u0007\u0000\u0000\u001f!\u0001\u0000"+
		"\u0000\u0000 \u001a\u0001\u0000\u0000\u0000 \u001c\u0001\u0000\u0000\u0000"+
		"!)\u0001\u0000\u0000\u0000\"#\n\u0001\u0000\u0000#$\u0005\u0004\u0000"+
		"\u0000$%\u0003\u0004\u0002\u0000%&\u0005\u0005\u0000\u0000&(\u0001\u0000"+
		"\u0000\u0000\'\"\u0001\u0000\u0000\u0000(+\u0001\u0000\u0000\u0000)\'"+
		"\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000*\u0007\u0001\u0000"+
		"\u0000\u0000+)\u0001\u0000\u0000\u0000\u0005\f\u0012\u0018 )";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}