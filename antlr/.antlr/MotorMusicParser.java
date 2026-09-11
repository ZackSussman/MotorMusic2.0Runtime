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
		WS=1, NAMED_SYMBOL=2, LCURLY=3, RCURLY=4, LPAREN=5, RPAREN=6, LANGLE=7, 
		RANGLE=8, LSQBRACKET=9, RSQBRACKET=10, QUOTE=11, RIGHTARROW=12, UNRECOGNIZED=13;
	public static final int
		RULE_compilationUnit = 0, RULE_coupling_list = 1, RULE_qualia = 2, RULE_experience = 3, 
		RULE_experience_list = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "coupling_list", "qualia", "experience", "experience_list"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", "']'", 
			"'\"'", "'->'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "NAMED_SYMBOL", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
			"RANGLE", "LSQBRACKET", "RSQBRACKET", "QUOTE", "RIGHTARROW", "UNRECOGNIZED"
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
		public ExperienceContext e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
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
			setState(14);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(10);
				((EmptyProgramContext)_localctx).e = match(EOF);
				}
				break;
			case LPAREN:
			case LANGLE:
			case LSQBRACKET:
				_localctx = new NonEmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(11);
				((NonEmptyProgramContext)_localctx).e = experience(0);
				setState(12);
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
	public static class Coupling_listContext extends ParserRuleContext {
		public Coupling_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_coupling_list; }
	 
		public Coupling_listContext() { }
		public void copyFrom(Coupling_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParadoxicallySingleCouplingContext extends Coupling_listContext {
		public QualiaContext top;
		public QualiaContext qualia() {
			return getRuleContext(QualiaContext.class,0);
		}
		public ParadoxicallySingleCouplingContext(Coupling_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiCouplingListContext extends Coupling_listContext {
		public QualiaContext top;
		public Coupling_listContext rest;
		public QualiaContext qualia() {
			return getRuleContext(QualiaContext.class,0);
		}
		public Coupling_listContext coupling_list() {
			return getRuleContext(Coupling_listContext.class,0);
		}
		public MultiCouplingListContext(Coupling_listContext ctx) { copyFrom(ctx); }
	}

	public final Coupling_listContext coupling_list() throws RecognitionException {
		Coupling_listContext _localctx = new Coupling_listContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_coupling_list);
		try {
			setState(20);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new ParadoxicallySingleCouplingContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
				((ParadoxicallySingleCouplingContext)_localctx).top = qualia();
				}
				break;
			case 2:
				_localctx = new MultiCouplingListContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(17);
				((MultiCouplingListContext)_localctx).top = qualia();
				setState(18);
				((MultiCouplingListContext)_localctx).rest = coupling_list();
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
	public static class QualiaContext extends ParserRuleContext {
		public QualiaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualia; }
	 
		public QualiaContext() { }
		public void copyFrom(QualiaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NamedQualiaContext extends QualiaContext {
		public Token name;
		public TerminalNode NAMED_SYMBOL() { return getToken(MotorMusicParser.NAMED_SYMBOL, 0); }
		public NamedQualiaContext(QualiaContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExperiencedQualiaContext extends QualiaContext {
		public ExperienceContext passed;
		public List<TerminalNode> QUOTE() { return getTokens(MotorMusicParser.QUOTE); }
		public TerminalNode QUOTE(int i) {
			return getToken(MotorMusicParser.QUOTE, i);
		}
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
		}
		public ExperiencedQualiaContext(QualiaContext ctx) { copyFrom(ctx); }
	}

	public final QualiaContext qualia() throws RecognitionException {
		QualiaContext _localctx = new QualiaContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_qualia);
		try {
			setState(27);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAMED_SYMBOL:
				_localctx = new NamedQualiaContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(22);
				((NamedQualiaContext)_localctx).name = match(NAMED_SYMBOL);
				}
				break;
			case QUOTE:
				_localctx = new ExperiencedQualiaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				match(QUOTE);
				setState(24);
				((ExperiencedQualiaContext)_localctx).passed = experience(0);
				setState(25);
				match(QUOTE);
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
	public static class ExperienceContext extends ParserRuleContext {
		public ExperienceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_experience; }
	 
		public ExperienceContext() { }
		public void copyFrom(ExperienceContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SuccessiveContext extends ExperienceContext {
		public Experience_listContext successive_experiences;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public Experience_listContext experience_list() {
			return getRuleContext(Experience_listContext.class,0);
		}
		public SuccessiveContext(ExperienceContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DigestContext extends ExperienceContext {
		public ExperienceContext to_be_digested;
		public Token gestalt;
		public TerminalNode LSQBRACKET() { return getToken(MotorMusicParser.LSQBRACKET, 0); }
		public TerminalNode RIGHTARROW() { return getToken(MotorMusicParser.RIGHTARROW, 0); }
		public TerminalNode RSQBRACKET() { return getToken(MotorMusicParser.RSQBRACKET, 0); }
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
		}
		public TerminalNode NAMED_SYMBOL() { return getToken(MotorMusicParser.NAMED_SYMBOL, 0); }
		public DigestContext(ExperienceContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CouplingContext extends ExperienceContext {
		public Coupling_listContext coupling;
		public TerminalNode LANGLE() { return getToken(MotorMusicParser.LANGLE, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParser.RANGLE, 0); }
		public Coupling_listContext coupling_list() {
			return getRuleContext(Coupling_listContext.class,0);
		}
		public CouplingContext(ExperienceContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SpawnContext extends ExperienceContext {
		public Token gestalt;
		public ExperienceContext to_spawn;
		public TerminalNode LSQBRACKET() { return getToken(MotorMusicParser.LSQBRACKET, 0); }
		public TerminalNode RIGHTARROW() { return getToken(MotorMusicParser.RIGHTARROW, 0); }
		public TerminalNode RSQBRACKET() { return getToken(MotorMusicParser.RSQBRACKET, 0); }
		public TerminalNode NAMED_SYMBOL() { return getToken(MotorMusicParser.NAMED_SYMBOL, 0); }
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
		}
		public SpawnContext(ExperienceContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ContainmentContext extends ExperienceContext {
		public ExperienceContext containing;
		public ExperienceContext contained;
		public TerminalNode LCURLY() { return getToken(MotorMusicParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParser.RCURLY, 0); }
		public List<ExperienceContext> experience() {
			return getRuleContexts(ExperienceContext.class);
		}
		public ExperienceContext experience(int i) {
			return getRuleContext(ExperienceContext.class,i);
		}
		public ContainmentContext(ExperienceContext ctx) { copyFrom(ctx); }
	}

	public final ExperienceContext experience() throws RecognitionException {
		return experience(0);
	}

	private ExperienceContext experience(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExperienceContext _localctx = new ExperienceContext(_ctx, _parentState);
		ExperienceContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_experience, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				_localctx = new CouplingContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(30);
				match(LANGLE);
				setState(31);
				((CouplingContext)_localctx).coupling = coupling_list();
				setState(32);
				match(RANGLE);
				}
				break;
			case 2:
				{
				_localctx = new SuccessiveContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(34);
				match(LPAREN);
				setState(35);
				((SuccessiveContext)_localctx).successive_experiences = experience_list();
				setState(36);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new DigestContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(38);
				match(LSQBRACKET);
				setState(39);
				((DigestContext)_localctx).to_be_digested = experience(0);
				setState(40);
				match(RIGHTARROW);
				setState(41);
				((DigestContext)_localctx).gestalt = match(NAMED_SYMBOL);
				setState(42);
				match(RSQBRACKET);
				}
				break;
			case 4:
				{
				_localctx = new SpawnContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(44);
				match(LSQBRACKET);
				setState(45);
				((SpawnContext)_localctx).gestalt = match(NAMED_SYMBOL);
				setState(46);
				match(RIGHTARROW);
				setState(47);
				((SpawnContext)_localctx).to_spawn = experience(0);
				setState(48);
				match(RSQBRACKET);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(59);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ContainmentContext(new ExperienceContext(_parentctx, _parentState));
					((ContainmentContext)_localctx).containing = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_experience);
					setState(52);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(53);
					match(LCURLY);
					setState(54);
					((ContainmentContext)_localctx).contained = experience(0);
					setState(55);
					match(RCURLY);
					}
					} 
				}
				setState(61);
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

	@SuppressWarnings("CheckReturnValue")
	public static class Experience_listContext extends ParserRuleContext {
		public Experience_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_experience_list; }
	 
		public Experience_listContext() { }
		public void copyFrom(Experience_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiExperienceListContext extends Experience_listContext {
		public ExperienceContext top;
		public Experience_listContext rest;
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
		}
		public Experience_listContext experience_list() {
			return getRuleContext(Experience_listContext.class,0);
		}
		public MultiExperienceListContext(Experience_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleExperienceListContext extends Experience_listContext {
		public ExperienceContext top;
		public ExperienceContext experience() {
			return getRuleContext(ExperienceContext.class,0);
		}
		public SingleExperienceListContext(Experience_listContext ctx) { copyFrom(ctx); }
	}

	public final Experience_listContext experience_list() throws RecognitionException {
		Experience_listContext _localctx = new Experience_listContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_experience_list);
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new SingleExperienceListContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				((SingleExperienceListContext)_localctx).top = experience(0);
				}
				break;
			case 2:
				_localctx = new MultiExperienceListContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(63);
				((MultiExperienceListContext)_localctx).top = experience(0);
				setState(64);
				((MultiExperienceListContext)_localctx).rest = experience_list();
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3:
			return experience_sempred((ExperienceContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean experience_sempred(ExperienceContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\rE\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u000f\b\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u0015\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u001c"+
		"\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00033\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003:\b"+
		"\u0003\n\u0003\f\u0003=\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004C\b\u0004\u0001\u0004\u0000\u0001\u0006\u0005\u0000"+
		"\u0002\u0004\u0006\b\u0000\u0000G\u0000\u000e\u0001\u0000\u0000\u0000"+
		"\u0002\u0014\u0001\u0000\u0000\u0000\u0004\u001b\u0001\u0000\u0000\u0000"+
		"\u00062\u0001\u0000\u0000\u0000\bB\u0001\u0000\u0000\u0000\n\u000f\u0005"+
		"\u0000\u0000\u0001\u000b\f\u0003\u0006\u0003\u0000\f\r\u0005\u0000\u0000"+
		"\u0001\r\u000f\u0001\u0000\u0000\u0000\u000e\n\u0001\u0000\u0000\u0000"+
		"\u000e\u000b\u0001\u0000\u0000\u0000\u000f\u0001\u0001\u0000\u0000\u0000"+
		"\u0010\u0015\u0003\u0004\u0002\u0000\u0011\u0012\u0003\u0004\u0002\u0000"+
		"\u0012\u0013\u0003\u0002\u0001\u0000\u0013\u0015\u0001\u0000\u0000\u0000"+
		"\u0014\u0010\u0001\u0000\u0000\u0000\u0014\u0011\u0001\u0000\u0000\u0000"+
		"\u0015\u0003\u0001\u0000\u0000\u0000\u0016\u001c\u0005\u0002\u0000\u0000"+
		"\u0017\u0018\u0005\u000b\u0000\u0000\u0018\u0019\u0003\u0006\u0003\u0000"+
		"\u0019\u001a\u0005\u000b\u0000\u0000\u001a\u001c\u0001\u0000\u0000\u0000"+
		"\u001b\u0016\u0001\u0000\u0000\u0000\u001b\u0017\u0001\u0000\u0000\u0000"+
		"\u001c\u0005\u0001\u0000\u0000\u0000\u001d\u001e\u0006\u0003\uffff\uffff"+
		"\u0000\u001e\u001f\u0005\u0007\u0000\u0000\u001f \u0003\u0002\u0001\u0000"+
		" !\u0005\b\u0000\u0000!3\u0001\u0000\u0000\u0000\"#\u0005\u0005\u0000"+
		"\u0000#$\u0003\b\u0004\u0000$%\u0005\u0006\u0000\u0000%3\u0001\u0000\u0000"+
		"\u0000&\'\u0005\t\u0000\u0000\'(\u0003\u0006\u0003\u0000()\u0005\f\u0000"+
		"\u0000)*\u0005\u0002\u0000\u0000*+\u0005\n\u0000\u0000+3\u0001\u0000\u0000"+
		"\u0000,-\u0005\t\u0000\u0000-.\u0005\u0002\u0000\u0000./\u0005\f\u0000"+
		"\u0000/0\u0003\u0006\u0003\u000001\u0005\n\u0000\u000013\u0001\u0000\u0000"+
		"\u00002\u001d\u0001\u0000\u0000\u00002\"\u0001\u0000\u0000\u00002&\u0001"+
		"\u0000\u0000\u00002,\u0001\u0000\u0000\u00003;\u0001\u0000\u0000\u0000"+
		"45\n\u0003\u0000\u000056\u0005\u0003\u0000\u000067\u0003\u0006\u0003\u0000"+
		"78\u0005\u0004\u0000\u00008:\u0001\u0000\u0000\u000094\u0001\u0000\u0000"+
		"\u0000:=\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000"+
		"\u0000\u0000<\u0007\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		">C\u0003\u0006\u0003\u0000?@\u0003\u0006\u0003\u0000@A\u0003\b\u0004\u0000"+
		"AC\u0001\u0000\u0000\u0000B>\u0001\u0000\u0000\u0000B?\u0001\u0000\u0000"+
		"\u0000C\t\u0001\u0000\u0000\u0000\u0006\u000e\u0014\u001b2;B";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}