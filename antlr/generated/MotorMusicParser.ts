// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MotorMusicParserListener from "./MotorMusicParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MotorMusicParser extends Parser {
	public static readonly WS = 1;
	public static readonly NAMED_SYMBOL = 2;
	public static readonly LCURLY = 3;
	public static readonly RCURLY = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly LANGLE = 7;
	public static readonly RANGLE = 8;
	public static readonly LSQBRACKET = 9;
	public static readonly RSQBRACKET = 10;
	public static readonly QUOTE = 11;
	public static readonly RIGHTARROW = 12;
	public static readonly UNRECOGNIZED = 13;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_coupling_list = 1;
	public static readonly RULE_qualia = 2;
	public static readonly RULE_experience = 3;
	public static readonly RULE_experience_list = 4;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "'<'", 
                                                            "'>'", "'['", 
                                                            "']'", "'\"'", 
                                                            "'->'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "NAMED_SYMBOL", 
                                                             "LCURLY", "RCURLY", 
                                                             "LPAREN", "RPAREN", 
                                                             "LANGLE", "RANGLE", 
                                                             "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "QUOTE", "RIGHTARROW", 
                                                             "UNRECOGNIZED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "coupling_list", "qualia", "experience", "experience_list",
	];
	public get grammarFileName(): string { return "MotorMusicParser.g4"; }
	public get literalNames(): (string | null)[] { return MotorMusicParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicParser.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicParser.ruleNames; }
	public get serializedATN(): number[] { return MotorMusicParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MotorMusicParser._ATN, MotorMusicParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MotorMusicParser.RULE_compilationUnit);
		try {
			this.state = 14;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				localctx = new EmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 10;
				(localctx as EmptyProgramContext)._e = this.match(MotorMusicParser.EOF);
				}
				break;
			case 5:
			case 7:
			case 9:
				localctx = new NonEmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 11;
				(localctx as NonEmptyProgramContext)._e = this.experience(0);
				this.state = 12;
				this.match(MotorMusicParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coupling_list(): Coupling_listContext {
		let localctx: Coupling_listContext = new Coupling_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParser.RULE_coupling_list);
		try {
			this.state = 20;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new ParadoxicallySingleCouplingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 16;
				(localctx as ParadoxicallySingleCouplingContext)._top = this.qualia();
				}
				break;
			case 2:
				localctx = new MultiCouplingListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 17;
				(localctx as MultiCouplingListContext)._top = this.qualia();
				this.state = 18;
				(localctx as MultiCouplingListContext)._rest = this.coupling_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualia(): QualiaContext {
		let localctx: QualiaContext = new QualiaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MotorMusicParser.RULE_qualia);
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				localctx = new NamedQualiaContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 22;
				(localctx as NamedQualiaContext)._name = this.match(MotorMusicParser.NAMED_SYMBOL);
				}
				break;
			case 11:
				localctx = new ExperiencedQualiaContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 23;
				this.match(MotorMusicParser.QUOTE);
				this.state = 24;
				(localctx as ExperiencedQualiaContext)._passed = this.experience(0);
				this.state = 25;
				this.match(MotorMusicParser.QUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public experience(): ExperienceContext;
	public experience(_p: number): ExperienceContext;
	// @RuleVersion(0)
	public experience(_p?: number): ExperienceContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExperienceContext = new ExperienceContext(this, this._ctx, _parentState);
		let _prevctx: ExperienceContext = localctx;
		let _startState: number = 6;
		this.enterRecursionRule(localctx, 6, MotorMusicParser.RULE_experience, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				localctx = new CouplingContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 30;
				this.match(MotorMusicParser.LANGLE);
				this.state = 31;
				(localctx as CouplingContext)._coupling = this.coupling_list();
				this.state = 32;
				this.match(MotorMusicParser.RANGLE);
				}
				break;
			case 2:
				{
				localctx = new SuccessiveContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 34;
				this.match(MotorMusicParser.LPAREN);
				this.state = 35;
				(localctx as SuccessiveContext)._successive_experiences = this.experience_list();
				this.state = 36;
				this.match(MotorMusicParser.RPAREN);
				}
				break;
			case 3:
				{
				localctx = new DigestContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 38;
				this.match(MotorMusicParser.LSQBRACKET);
				this.state = 39;
				(localctx as DigestContext)._to_be_digested = this.experience(0);
				this.state = 40;
				this.match(MotorMusicParser.RIGHTARROW);
				this.state = 41;
				(localctx as DigestContext)._gestalt = this.match(MotorMusicParser.NAMED_SYMBOL);
				this.state = 42;
				this.match(MotorMusicParser.RSQBRACKET);
				}
				break;
			case 4:
				{
				localctx = new SpawnContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 44;
				this.match(MotorMusicParser.LSQBRACKET);
				this.state = 45;
				(localctx as SpawnContext)._gestalt = this.match(MotorMusicParser.NAMED_SYMBOL);
				this.state = 46;
				this.match(MotorMusicParser.RIGHTARROW);
				this.state = 47;
				(localctx as SpawnContext)._to_spawn = this.experience(0);
				this.state = 48;
				this.match(MotorMusicParser.RSQBRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 59;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ContainmentContext(this, new ExperienceContext(this, _parentctx, _parentState));
					(localctx as ContainmentContext)._containing = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MotorMusicParser.RULE_experience);
					this.state = 52;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 53;
					this.match(MotorMusicParser.LCURLY);
					this.state = 54;
					(localctx as ContainmentContext)._contained = this.experience(0);
					this.state = 55;
					this.match(MotorMusicParser.RCURLY);
					}
					}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public experience_list(): Experience_listContext {
		let localctx: Experience_listContext = new Experience_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MotorMusicParser.RULE_experience_list);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				localctx = new SingleExperienceListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 62;
				(localctx as SingleExperienceListContext)._top = this.experience(0);
				}
				break;
			case 2:
				localctx = new MultiExperienceListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 63;
				(localctx as MultiExperienceListContext)._top = this.experience(0);
				this.state = 64;
				(localctx as MultiExperienceListContext)._rest = this.experience_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.experience_sempred(localctx as ExperienceContext, predIndex);
		}
		return true;
	}
	private experience_sempred(localctx: ExperienceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,13,69,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,0,3,0,15,8,0,1,1,1,1,1,1,1,
	1,3,1,21,8,1,1,2,1,2,1,2,1,2,1,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,51,8,3,1,3,
	1,3,1,3,1,3,1,3,5,3,58,8,3,10,3,12,3,61,9,3,1,4,1,4,1,4,1,4,3,4,67,8,4,
	1,4,0,1,6,5,0,2,4,6,8,0,0,71,0,14,1,0,0,0,2,20,1,0,0,0,4,27,1,0,0,0,6,50,
	1,0,0,0,8,66,1,0,0,0,10,15,5,0,0,1,11,12,3,6,3,0,12,13,5,0,0,1,13,15,1,
	0,0,0,14,10,1,0,0,0,14,11,1,0,0,0,15,1,1,0,0,0,16,21,3,4,2,0,17,18,3,4,
	2,0,18,19,3,2,1,0,19,21,1,0,0,0,20,16,1,0,0,0,20,17,1,0,0,0,21,3,1,0,0,
	0,22,28,5,2,0,0,23,24,5,11,0,0,24,25,3,6,3,0,25,26,5,11,0,0,26,28,1,0,0,
	0,27,22,1,0,0,0,27,23,1,0,0,0,28,5,1,0,0,0,29,30,6,3,-1,0,30,31,5,7,0,0,
	31,32,3,2,1,0,32,33,5,8,0,0,33,51,1,0,0,0,34,35,5,5,0,0,35,36,3,8,4,0,36,
	37,5,6,0,0,37,51,1,0,0,0,38,39,5,9,0,0,39,40,3,6,3,0,40,41,5,12,0,0,41,
	42,5,2,0,0,42,43,5,10,0,0,43,51,1,0,0,0,44,45,5,9,0,0,45,46,5,2,0,0,46,
	47,5,12,0,0,47,48,3,6,3,0,48,49,5,10,0,0,49,51,1,0,0,0,50,29,1,0,0,0,50,
	34,1,0,0,0,50,38,1,0,0,0,50,44,1,0,0,0,51,59,1,0,0,0,52,53,10,3,0,0,53,
	54,5,3,0,0,54,55,3,6,3,0,55,56,5,4,0,0,56,58,1,0,0,0,57,52,1,0,0,0,58,61,
	1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,59,1,0,0,0,62,67,3,
	6,3,0,63,64,3,6,3,0,64,65,3,8,4,0,65,67,1,0,0,0,66,62,1,0,0,0,66,63,1,0,
	0,0,67,9,1,0,0,0,6,14,20,27,50,59,66];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicParser.__ATN) {
			MotorMusicParser.__ATN = new ATNDeserializer().deserialize(MotorMusicParser._serializedATN);
		}

		return MotorMusicParser.__ATN;
	}


	static DecisionsToDFA = MotorMusicParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_compilationUnit;
	}
	public override copyFrom(ctx: CompilationUnitContext): void {
		super.copyFrom(ctx);
	}
}
export class NonEmptyProgramContext extends CompilationUnitContext {
	public _e!: ExperienceContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNonEmptyProgram) {
	 		listener.enterNonEmptyProgram(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNonEmptyProgram) {
	 		listener.exitNonEmptyProgram(this);
		}
	}
}
export class EmptyProgramContext extends CompilationUnitContext {
	public _e!: Token;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEmptyProgram) {
	 		listener.enterEmptyProgram(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEmptyProgram) {
	 		listener.exitEmptyProgram(this);
		}
	}
}


export class Coupling_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_coupling_list;
	}
	public override copyFrom(ctx: Coupling_listContext): void {
		super.copyFrom(ctx);
	}
}
export class ParadoxicallySingleCouplingContext extends Coupling_listContext {
	public _top!: QualiaContext;
	constructor(parser: MotorMusicParser, ctx: Coupling_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualia(): QualiaContext {
		return this.getTypedRuleContext(QualiaContext, 0) as QualiaContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterParadoxicallySingleCoupling) {
	 		listener.enterParadoxicallySingleCoupling(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitParadoxicallySingleCoupling) {
	 		listener.exitParadoxicallySingleCoupling(this);
		}
	}
}
export class MultiCouplingListContext extends Coupling_listContext {
	public _top!: QualiaContext;
	public _rest!: Coupling_listContext;
	constructor(parser: MotorMusicParser, ctx: Coupling_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualia(): QualiaContext {
		return this.getTypedRuleContext(QualiaContext, 0) as QualiaContext;
	}
	public coupling_list(): Coupling_listContext {
		return this.getTypedRuleContext(Coupling_listContext, 0) as Coupling_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterMultiCouplingList) {
	 		listener.enterMultiCouplingList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitMultiCouplingList) {
	 		listener.exitMultiCouplingList(this);
		}
	}
}


export class QualiaContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_qualia;
	}
	public override copyFrom(ctx: QualiaContext): void {
		super.copyFrom(ctx);
	}
}
export class NamedQualiaContext extends QualiaContext {
	public _name!: Token;
	constructor(parser: MotorMusicParser, ctx: QualiaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAMED_SYMBOL(): TerminalNode {
		return this.getToken(MotorMusicParser.NAMED_SYMBOL, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNamedQualia) {
	 		listener.enterNamedQualia(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNamedQualia) {
	 		listener.exitNamedQualia(this);
		}
	}
}
export class ExperiencedQualiaContext extends QualiaContext {
	public _passed!: ExperienceContext;
	constructor(parser: MotorMusicParser, ctx: QualiaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUOTE_list(): TerminalNode[] {
	    	return this.getTokens(MotorMusicParser.QUOTE);
	}
	public QUOTE(i: number): TerminalNode {
		return this.getToken(MotorMusicParser.QUOTE, i);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterExperiencedQualia) {
	 		listener.enterExperiencedQualia(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitExperiencedQualia) {
	 		listener.exitExperiencedQualia(this);
		}
	}
}


export class ExperienceContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_experience;
	}
	public override copyFrom(ctx: ExperienceContext): void {
		super.copyFrom(ctx);
	}
}
export class SuccessiveContext extends ExperienceContext {
	public _successive_experiences!: Experience_listContext;
	constructor(parser: MotorMusicParser, ctx: ExperienceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public experience_list(): Experience_listContext {
		return this.getTypedRuleContext(Experience_listContext, 0) as Experience_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSuccessive) {
	 		listener.enterSuccessive(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSuccessive) {
	 		listener.exitSuccessive(this);
		}
	}
}
export class DigestContext extends ExperienceContext {
	public _to_be_digested!: ExperienceContext;
	public _gestalt!: Token;
	constructor(parser: MotorMusicParser, ctx: ExperienceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParser.LSQBRACKET, 0);
	}
	public RIGHTARROW(): TerminalNode {
		return this.getToken(MotorMusicParser.RIGHTARROW, 0);
	}
	public RSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParser.RSQBRACKET, 0);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public NAMED_SYMBOL(): TerminalNode {
		return this.getToken(MotorMusicParser.NAMED_SYMBOL, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterDigest) {
	 		listener.enterDigest(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitDigest) {
	 		listener.exitDigest(this);
		}
	}
}
export class CouplingContext extends ExperienceContext {
	public _coupling!: Coupling_listContext;
	constructor(parser: MotorMusicParser, ctx: ExperienceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLE(): TerminalNode {
		return this.getToken(MotorMusicParser.LANGLE, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParser.RANGLE, 0);
	}
	public coupling_list(): Coupling_listContext {
		return this.getTypedRuleContext(Coupling_listContext, 0) as Coupling_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterCoupling) {
	 		listener.enterCoupling(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitCoupling) {
	 		listener.exitCoupling(this);
		}
	}
}
export class SpawnContext extends ExperienceContext {
	public _gestalt!: Token;
	public _to_spawn!: ExperienceContext;
	constructor(parser: MotorMusicParser, ctx: ExperienceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParser.LSQBRACKET, 0);
	}
	public RIGHTARROW(): TerminalNode {
		return this.getToken(MotorMusicParser.RIGHTARROW, 0);
	}
	public RSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParser.RSQBRACKET, 0);
	}
	public NAMED_SYMBOL(): TerminalNode {
		return this.getToken(MotorMusicParser.NAMED_SYMBOL, 0);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSpawn) {
	 		listener.enterSpawn(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSpawn) {
	 		listener.exitSpawn(this);
		}
	}
}
export class ContainmentContext extends ExperienceContext {
	public _containing!: ExperienceContext;
	public _contained!: ExperienceContext;
	constructor(parser: MotorMusicParser, ctx: ExperienceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public experience_list(): ExperienceContext[] {
		return this.getTypedRuleContexts(ExperienceContext) as ExperienceContext[];
	}
	public experience(i: number): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, i) as ExperienceContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterContainment) {
	 		listener.enterContainment(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitContainment) {
	 		listener.exitContainment(this);
		}
	}
}


export class Experience_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_experience_list;
	}
	public override copyFrom(ctx: Experience_listContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiExperienceListContext extends Experience_listContext {
	public _top!: ExperienceContext;
	public _rest!: Experience_listContext;
	constructor(parser: MotorMusicParser, ctx: Experience_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public experience_list(): Experience_listContext {
		return this.getTypedRuleContext(Experience_listContext, 0) as Experience_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterMultiExperienceList) {
	 		listener.enterMultiExperienceList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitMultiExperienceList) {
	 		listener.exitMultiExperienceList(this);
		}
	}
}
export class SingleExperienceListContext extends Experience_listContext {
	public _top!: ExperienceContext;
	constructor(parser: MotorMusicParser, ctx: Experience_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public experience(): ExperienceContext {
		return this.getTypedRuleContext(ExperienceContext, 0) as ExperienceContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSingleExperienceList) {
	 		listener.enterSingleExperienceList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSingleExperienceList) {
	 		listener.exitSingleExperienceList(this);
		}
	}
}
