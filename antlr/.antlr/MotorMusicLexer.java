// Generated from /Users/zacksussman/Documents/code/motormusic/motormusic2.0/motormusic2.0-runtime/antlr/MotorMusicLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MotorMusicLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, NUMBER=2, NAMED_SYMBOL=3, LCURLY=4, RCURLY=5, LPAREN=6, RPAREN=7, 
		COLON=8, UNRECOGNIZED=9;
	public static final int
		WS_CHANNEL=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WS_CHANNEL"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "NUMBER", "NAMED_SYMBOL", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"COLON", "UNRECOGNIZED"
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


	public MotorMusicLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MotorMusicLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\tU\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0001\u0000\u0001\u0000\u0004\u0000\u0016"+
		"\b\u0000\u000b\u0000\f\u0000\u0017\u0001\u0000\u0004\u0000\u001b\b\u0000"+
		"\u000b\u0000\f\u0000\u001c\u0001\u0000\u0004\u0000 \b\u0000\u000b\u0000"+
		"\f\u0000!\u0001\u0000\u0004\u0000%\b\u0000\u000b\u0000\f\u0000&\u0003"+
		"\u0000)\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0004\u0001.\b\u0001"+
		"\u000b\u0001\f\u0001/\u0001\u0001\u0001\u0001\u0004\u00014\b\u0001\u000b"+
		"\u0001\f\u00015\u0001\u0001\u0001\u0001\u0004\u0001:\b\u0001\u000b\u0001"+
		"\f\u0001;\u0001\u0001\u0004\u0001?\b\u0001\u000b\u0001\f\u0001@\u0003"+
		"\u0001C\b\u0001\u0001\u0002\u0004\u0002F\b\u0002\u000b\u0002\f\u0002G"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0000"+
		"\u0000\t\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0001\u0000\u0004\u0002\u0000\t\t  \u0001"+
		"\u000009\u0001\u0000..\u0005\u0000\'\'-.AZ^_azb\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0001(\u0001\u0000\u0000\u0000\u0003B\u0001\u0000\u0000\u0000\u0005E"+
		"\u0001\u0000\u0000\u0000\u0007I\u0001\u0000\u0000\u0000\tK\u0001\u0000"+
		"\u0000\u0000\u000bM\u0001\u0000\u0000\u0000\rO\u0001\u0000\u0000\u0000"+
		"\u000fQ\u0001\u0000\u0000\u0000\u0011S\u0001\u0000\u0000\u0000\u0013\u0014"+
		"\u0005\r\u0000\u0000\u0014\u0016\u0005\n\u0000\u0000\u0015\u0013\u0001"+
		"\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000\u0000\u0017\u0015\u0001"+
		"\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000\u0000\u0018)\u0001\u0000"+
		"\u0000\u0000\u0019\u001b\u0005\r\u0000\u0000\u001a\u0019\u0001\u0000\u0000"+
		"\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000"+
		"\u0000\u001c\u001d\u0001\u0000\u0000\u0000\u001d)\u0001\u0000\u0000\u0000"+
		"\u001e \u0005\n\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000 !\u0001"+
		"\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000"+
		"\u0000\")\u0001\u0000\u0000\u0000#%\u0007\u0000\u0000\u0000$#\u0001\u0000"+
		"\u0000\u0000%&\u0001\u0000\u0000\u0000&$\u0001\u0000\u0000\u0000&\'\u0001"+
		"\u0000\u0000\u0000\')\u0001\u0000\u0000\u0000(\u0015\u0001\u0000\u0000"+
		"\u0000(\u001a\u0001\u0000\u0000\u0000(\u001f\u0001\u0000\u0000\u0000("+
		"$\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000*+\u0006\u0000\u0000"+
		"\u0000+\u0002\u0001\u0000\u0000\u0000,.\u0007\u0001\u0000\u0000-,\u0001"+
		"\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000"+
		"/0\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u000013\u0007\u0002\u0000"+
		"\u000024\u0007\u0001\u0000\u000032\u0001\u0000\u0000\u000045\u0001\u0000"+
		"\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u00006C\u0001"+
		"\u0000\u0000\u000079\u0007\u0002\u0000\u00008:\u0007\u0001\u0000\u0000"+
		"98\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000"+
		"\u0000;<\u0001\u0000\u0000\u0000<C\u0001\u0000\u0000\u0000=?\u0007\u0001"+
		"\u0000\u0000>=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@>\u0001"+
		"\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000AC\u0001\u0000\u0000\u0000"+
		"B-\u0001\u0000\u0000\u0000B7\u0001\u0000\u0000\u0000B>\u0001\u0000\u0000"+
		"\u0000C\u0004\u0001\u0000\u0000\u0000DF\u0007\u0003\u0000\u0000ED\u0001"+
		"\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000"+
		"GH\u0001\u0000\u0000\u0000H\u0006\u0001\u0000\u0000\u0000IJ\u0005{\u0000"+
		"\u0000J\b\u0001\u0000\u0000\u0000KL\u0005}\u0000\u0000L\n\u0001\u0000"+
		"\u0000\u0000MN\u0005(\u0000\u0000N\f\u0001\u0000\u0000\u0000OP\u0005)"+
		"\u0000\u0000P\u000e\u0001\u0000\u0000\u0000QR\u0005:\u0000\u0000R\u0010"+
		"\u0001\u0000\u0000\u0000ST\t\u0000\u0000\u0000T\u0012\u0001\u0000\u0000"+
		"\u0000\f\u0000\u0017\u001c!&(/5;@BG\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}