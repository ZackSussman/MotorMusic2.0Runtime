// Generated from ./MotorMusicLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MotorMusicLexer extends Lexer {
	public static readonly WS = 1;
	public static readonly NUMBER = 2;
	public static readonly NAMED_SYMBOL = 3;
	public static readonly LCURLY = 4;
	public static readonly RCURLY = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly COLON = 8;
	public static readonly UNRECOGNIZED = 9;
	public static readonly EOF = Token.EOF;
	public static readonly WS_CHANNEL = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                                      "WS_CHANNEL" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "NUMBER", "NAMED_SYMBOL", 
                                                             "LCURLY", "RCURLY", 
                                                             "LPAREN", "RPAREN", 
                                                             "COLON", "UNRECOGNIZED" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "NUMBER", "NAMED_SYMBOL", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
		"COLON", "UNRECOGNIZED",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MotorMusicLexer._ATN, MotorMusicLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MotorMusicLexer.g4"; }

	public get literalNames(): (string | null)[] { return MotorMusicLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicLexer.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicLexer.ruleNames; }

	public get serializedATN(): number[] { return MotorMusicLexer._serializedATN; }

	public get channelNames(): string[] { return MotorMusicLexer.channelNames; }

	public get modeNames(): string[] { return MotorMusicLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,9,85,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,
	0,4,0,22,8,0,11,0,12,0,23,1,0,4,0,27,8,0,11,0,12,0,28,1,0,4,0,32,8,0,11,
	0,12,0,33,1,0,4,0,37,8,0,11,0,12,0,38,3,0,41,8,0,1,0,1,0,1,1,4,1,46,8,1,
	11,1,12,1,47,1,1,1,1,4,1,52,8,1,11,1,12,1,53,1,1,1,1,4,1,58,8,1,11,1,12,
	1,59,1,1,4,1,63,8,1,11,1,12,1,64,3,1,67,8,1,1,2,4,2,70,8,2,11,2,12,2,71,
	1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,
	5,11,6,13,7,15,8,17,9,1,0,4,2,0,9,9,32,32,1,0,48,57,1,0,46,46,5,0,39,39,
	45,46,65,90,94,95,97,122,98,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
	0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,40,
	1,0,0,0,3,66,1,0,0,0,5,69,1,0,0,0,7,73,1,0,0,0,9,75,1,0,0,0,11,77,1,0,0,
	0,13,79,1,0,0,0,15,81,1,0,0,0,17,83,1,0,0,0,19,20,5,13,0,0,20,22,5,10,0,
	0,21,19,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,41,1,0,0,0,
	25,27,5,13,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,
	29,41,1,0,0,0,30,32,5,10,0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,
	33,34,1,0,0,0,34,41,1,0,0,0,35,37,7,0,0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,
	36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,21,1,0,0,0,40,26,1,0,0,0,40,31,
	1,0,0,0,40,36,1,0,0,0,41,42,1,0,0,0,42,43,6,0,0,0,43,2,1,0,0,0,44,46,7,
	1,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,
	0,0,49,51,7,2,0,0,50,52,7,1,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,
	0,53,54,1,0,0,0,54,67,1,0,0,0,55,57,7,2,0,0,56,58,7,1,0,0,57,56,1,0,0,0,
	58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,67,1,0,0,0,61,63,7,1,0,0,62,
	61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,45,
	1,0,0,0,66,55,1,0,0,0,66,62,1,0,0,0,67,4,1,0,0,0,68,70,7,3,0,0,69,68,1,
	0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,6,1,0,0,0,73,74,5,123,
	0,0,74,8,1,0,0,0,75,76,5,125,0,0,76,10,1,0,0,0,77,78,5,40,0,0,78,12,1,0,
	0,0,79,80,5,41,0,0,80,14,1,0,0,0,81,82,5,58,0,0,82,16,1,0,0,0,83,84,9,0,
	0,0,84,18,1,0,0,0,12,0,23,28,33,38,40,47,53,59,64,66,71,1,0,2,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}