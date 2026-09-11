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
		WS=1, NAMED_SYMBOL=2, LCURLY=3, RCURLY=4, LPAREN=5, RPAREN=6, LANGLE=7, 
		RANGLE=8, LSQBRACKET=9, RSQBRACKET=10, QUOTE=11, RIGHTARROW=12, UNRECOGNIZED=13;
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
			"WS", "NAMED_SYMBOL", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
			"RANGLE", "LSQBRACKET", "RSQBRACKET", "QUOTE", "RIGHTARROW", "UNRECOGNIZED"
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
		"\u0004\u0000\rP\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0004\u0000\u001e"+
		"\b\u0000\u000b\u0000\f\u0000\u001f\u0001\u0000\u0004\u0000#\b\u0000\u000b"+
		"\u0000\f\u0000$\u0001\u0000\u0004\u0000(\b\u0000\u000b\u0000\f\u0000)"+
		"\u0001\u0000\u0004\u0000-\b\u0000\u000b\u0000\f\u0000.\u0003\u00001\b"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0004\u00016\b\u0001\u000b"+
		"\u0001\f\u00017\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0000\u0000\r\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u0001\u0000\u0002\u0002"+
		"\u0000\t\t  \u0005\u0000-.09AZ^_azW\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u00010\u0001"+
		"\u0000\u0000\u0000\u00035\u0001\u0000\u0000\u0000\u00059\u0001\u0000\u0000"+
		"\u0000\u0007;\u0001\u0000\u0000\u0000\t=\u0001\u0000\u0000\u0000\u000b"+
		"?\u0001\u0000\u0000\u0000\rA\u0001\u0000\u0000\u0000\u000fC\u0001\u0000"+
		"\u0000\u0000\u0011E\u0001\u0000\u0000\u0000\u0013G\u0001\u0000\u0000\u0000"+
		"\u0015I\u0001\u0000\u0000\u0000\u0017K\u0001\u0000\u0000\u0000\u0019N"+
		"\u0001\u0000\u0000\u0000\u001b\u001c\u0005\r\u0000\u0000\u001c\u001e\u0005"+
		"\n\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000"+
		"\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000"+
		"\u0000 1\u0001\u0000\u0000\u0000!#\u0005\r\u0000\u0000\"!\u0001\u0000"+
		"\u0000\u0000#$\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000$%\u0001"+
		"\u0000\u0000\u0000%1\u0001\u0000\u0000\u0000&(\u0005\n\u0000\u0000\'&"+
		"\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000"+
		"\u0000)*\u0001\u0000\u0000\u0000*1\u0001\u0000\u0000\u0000+-\u0007\u0000"+
		"\u0000\u0000,+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000.,\u0001"+
		"\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/1\u0001\u0000\u0000\u0000"+
		"0\u001d\u0001\u0000\u0000\u00000\"\u0001\u0000\u0000\u00000\'\u0001\u0000"+
		"\u0000\u00000,\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000023\u0006"+
		"\u0000\u0000\u00003\u0002\u0001\u0000\u0000\u000046\u0007\u0001\u0000"+
		"\u000054\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u000075\u0001\u0000"+
		"\u0000\u000078\u0001\u0000\u0000\u00008\u0004\u0001\u0000\u0000\u0000"+
		"9:\u0005{\u0000\u0000:\u0006\u0001\u0000\u0000\u0000;<\u0005}\u0000\u0000"+
		"<\b\u0001\u0000\u0000\u0000=>\u0005(\u0000\u0000>\n\u0001\u0000\u0000"+
		"\u0000?@\u0005)\u0000\u0000@\f\u0001\u0000\u0000\u0000AB\u0005<\u0000"+
		"\u0000B\u000e\u0001\u0000\u0000\u0000CD\u0005>\u0000\u0000D\u0010\u0001"+
		"\u0000\u0000\u0000EF\u0005[\u0000\u0000F\u0012\u0001\u0000\u0000\u0000"+
		"GH\u0005]\u0000\u0000H\u0014\u0001\u0000\u0000\u0000IJ\u0005\"\u0000\u0000"+
		"J\u0016\u0001\u0000\u0000\u0000KL\u0005-\u0000\u0000LM\u0005>\u0000\u0000"+
		"M\u0018\u0001\u0000\u0000\u0000NO\t\u0000\u0000\u0000O\u001a\u0001\u0000"+
		"\u0000\u0000\u0007\u0000\u001f$).07\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}