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
	public static readonly NUMBER = 2;
	public static readonly NAMED_SYMBOL = 3;
	public static readonly LCURLY = 4;
	public static readonly RCURLY = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly COLON = 8;
	public static readonly UNRECOGNIZED = 9;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_momentSpecification = 1;
	public static readonly RULE_specification_list = 2;
	public static readonly RULE_specification = 3;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "momentSpecification", "specification_list", "specification",
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
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				localctx = new EmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 8;
				(localctx as EmptyProgramContext)._e = this.match(MotorMusicParser.EOF);
				}
				break;
			case 2:
			case 6:
				localctx = new NonEmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 9;
				(localctx as NonEmptyProgramContext)._specifications = this.specification_list();
				this.state = 10;
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
	public momentSpecification(): MomentSpecificationContext {
		let localctx: MomentSpecificationContext = new MomentSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParser.RULE_momentSpecification);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new ROOMContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				(localctx as ROOMContext)._time = this.match(MotorMusicParser.NUMBER);
				}
				break;
			case 2:
				localctx = new PathPointContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 15;
				(localctx as PathPointContext)._time = this.match(MotorMusicParser.NUMBER);
				this.state = 16;
				this.match(MotorMusicParser.COLON);
				this.state = 17;
				(localctx as PathPointContext)._path = this.match(MotorMusicParser.NAMED_SYMBOL);
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
	public specification_list(): Specification_listContext {
		let localctx: Specification_listContext = new Specification_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MotorMusicParser.RULE_specification_list);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleSpecificationListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 20;
				(localctx as SingleSpecificationListContext)._top = this.specification(0);
				}
				break;
			case 2:
				localctx = new MultiSpecificationListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 21;
				(localctx as MultiSpecificationListContext)._top = this.specification(0);
				this.state = 22;
				(localctx as MultiSpecificationListContext)._rest = this.specification_list();
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

	public specification(): SpecificationContext;
	public specification(_p: number): SpecificationContext;
	// @RuleVersion(0)
	public specification(_p?: number): SpecificationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SpecificationContext = new SpecificationContext(this, this._ctx, _parentState);
		let _prevctx: SpecificationContext = localctx;
		let _startState: number = 6;
		this.enterRecursionRule(localctx, 6, MotorMusicParser.RULE_specification, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				localctx = new MomentContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 27;
				(localctx as MomentContext)._throughThisMoment = this.momentSpecification();
				}
				break;
			case 6:
				{
				localctx = new ParenSeqContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 28;
				this.match(MotorMusicParser.LPAREN);
				this.state = 29;
				(localctx as ParenSeqContext)._specifications = this.specification_list();
				this.state = 30;
				this.match(MotorMusicParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 41;
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
					localctx = new ConContext(this, new SpecificationContext(this, _parentctx, _parentState));
					(localctx as ConContext)._top = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MotorMusicParser.RULE_specification);
					this.state = 34;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 35;
					this.match(MotorMusicParser.LCURLY);
					this.state = 36;
					(localctx as ConContext)._specifications = this.specification_list();
					this.state = 37;
					this.match(MotorMusicParser.RCURLY);
					}
					}
				}
				this.state = 43;
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.specification_sempred(localctx as SpecificationContext, predIndex);
		}
		return true;
	}
	private specification_sempred(localctx: SpecificationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,9,45,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,0,3,0,13,8,0,1,1,1,1,1,1,1,1,3,1,19,8,
	1,1,2,1,2,1,2,1,2,3,2,25,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,33,8,3,1,3,1,3,
	1,3,1,3,1,3,5,3,40,8,3,10,3,12,3,43,9,3,1,3,0,1,6,4,0,2,4,6,0,0,45,0,12,
	1,0,0,0,2,18,1,0,0,0,4,24,1,0,0,0,6,32,1,0,0,0,8,13,5,0,0,1,9,10,3,4,2,
	0,10,11,5,0,0,1,11,13,1,0,0,0,12,8,1,0,0,0,12,9,1,0,0,0,13,1,1,0,0,0,14,
	19,5,2,0,0,15,16,5,2,0,0,16,17,5,8,0,0,17,19,5,3,0,0,18,14,1,0,0,0,18,15,
	1,0,0,0,19,3,1,0,0,0,20,25,3,6,3,0,21,22,3,6,3,0,22,23,3,4,2,0,23,25,1,
	0,0,0,24,20,1,0,0,0,24,21,1,0,0,0,25,5,1,0,0,0,26,27,6,3,-1,0,27,33,3,2,
	1,0,28,29,5,6,0,0,29,30,3,4,2,0,30,31,5,7,0,0,31,33,1,0,0,0,32,26,1,0,0,
	0,32,28,1,0,0,0,33,41,1,0,0,0,34,35,10,1,0,0,35,36,5,4,0,0,36,37,3,4,2,
	0,37,38,5,5,0,0,38,40,1,0,0,0,39,34,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,
	41,42,1,0,0,0,42,7,1,0,0,0,43,41,1,0,0,0,5,12,18,24,32,41];

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
	public _specifications!: Specification_listContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public specification_list(): Specification_listContext {
		return this.getTypedRuleContext(Specification_listContext, 0) as Specification_listContext;
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


export class MomentSpecificationContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_momentSpecification;
	}
	public override copyFrom(ctx: MomentSpecificationContext): void {
		super.copyFrom(ctx);
	}
}
export class PathPointContext extends MomentSpecificationContext {
	public _time!: Token;
	public _path!: Token;
	constructor(parser: MotorMusicParser, ctx: MomentSpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(MotorMusicParser.COLON, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParser.NUMBER, 0);
	}
	public NAMED_SYMBOL(): TerminalNode {
		return this.getToken(MotorMusicParser.NAMED_SYMBOL, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterPathPoint) {
	 		listener.enterPathPoint(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitPathPoint) {
	 		listener.exitPathPoint(this);
		}
	}
}
export class ROOMContext extends MomentSpecificationContext {
	public _time!: Token;
	constructor(parser: MotorMusicParser, ctx: MomentSpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParser.NUMBER, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterROOM) {
	 		listener.enterROOM(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitROOM) {
	 		listener.exitROOM(this);
		}
	}
}


export class Specification_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_specification_list;
	}
	public override copyFrom(ctx: Specification_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleSpecificationListContext extends Specification_listContext {
	public _top!: SpecificationContext;
	constructor(parser: MotorMusicParser, ctx: Specification_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public specification(): SpecificationContext {
		return this.getTypedRuleContext(SpecificationContext, 0) as SpecificationContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSingleSpecificationList) {
	 		listener.enterSingleSpecificationList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSingleSpecificationList) {
	 		listener.exitSingleSpecificationList(this);
		}
	}
}
export class MultiSpecificationListContext extends Specification_listContext {
	public _top!: SpecificationContext;
	public _rest!: Specification_listContext;
	constructor(parser: MotorMusicParser, ctx: Specification_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public specification(): SpecificationContext {
		return this.getTypedRuleContext(SpecificationContext, 0) as SpecificationContext;
	}
	public specification_list(): Specification_listContext {
		return this.getTypedRuleContext(Specification_listContext, 0) as Specification_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterMultiSpecificationList) {
	 		listener.enterMultiSpecificationList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitMultiSpecificationList) {
	 		listener.exitMultiSpecificationList(this);
		}
	}
}


export class SpecificationContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_specification;
	}
	public override copyFrom(ctx: SpecificationContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenSeqContext extends SpecificationContext {
	public _specifications!: Specification_listContext;
	constructor(parser: MotorMusicParser, ctx: SpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public specification_list(): Specification_listContext {
		return this.getTypedRuleContext(Specification_listContext, 0) as Specification_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterParenSeq) {
	 		listener.enterParenSeq(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitParenSeq) {
	 		listener.exitParenSeq(this);
		}
	}
}
export class ConContext extends SpecificationContext {
	public _top!: SpecificationContext;
	public _specifications!: Specification_listContext;
	constructor(parser: MotorMusicParser, ctx: SpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public specification(): SpecificationContext {
		return this.getTypedRuleContext(SpecificationContext, 0) as SpecificationContext;
	}
	public specification_list(): Specification_listContext {
		return this.getTypedRuleContext(Specification_listContext, 0) as Specification_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterCon) {
	 		listener.enterCon(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitCon) {
	 		listener.exitCon(this);
		}
	}
}
export class MomentContext extends SpecificationContext {
	public _throughThisMoment!: MomentSpecificationContext;
	constructor(parser: MotorMusicParser, ctx: SpecificationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public momentSpecification(): MomentSpecificationContext {
		return this.getTypedRuleContext(MomentSpecificationContext, 0) as MomentSpecificationContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterMoment) {
	 		listener.enterMoment(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitMoment) {
	 		listener.exitMoment(this);
		}
	}
}
