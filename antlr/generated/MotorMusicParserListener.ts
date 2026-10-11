// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EmptyProgramContext } from "./MotorMusicParser.js";
import { NonEmptyProgramContext } from "./MotorMusicParser.js";
import { ROOMContext } from "./MotorMusicParser.js";
import { PathPointContext } from "./MotorMusicParser.js";
import { SingleSpecificationListContext } from "./MotorMusicParser.js";
import { MuultiSpecificationListContext } from "./MotorMusicParser.js";
import { ConContext } from "./MotorMusicParser.js";
import { MomentContext } from "./MotorMusicParser.js";
import { SeqContext } from "./MotorMusicParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MotorMusicParser`.
 */
export default class MotorMusicParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `NonEmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyProgram?: (ctx: NonEmptyProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `NonEmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyProgram?: (ctx: NonEmptyProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `ROOM`
	 * labeled alternative in `MotorMusicParser.momentSpecification`.
	 * @param ctx the parse tree
	 */
	enterROOM?: (ctx: ROOMContext) => void;
	/**
	 * Exit a parse tree produced by the `ROOM`
	 * labeled alternative in `MotorMusicParser.momentSpecification`.
	 * @param ctx the parse tree
	 */
	exitROOM?: (ctx: ROOMContext) => void;
	/**
	 * Enter a parse tree produced by the `PathPoint`
	 * labeled alternative in `MotorMusicParser.momentSpecification`.
	 * @param ctx the parse tree
	 */
	enterPathPoint?: (ctx: PathPointContext) => void;
	/**
	 * Exit a parse tree produced by the `PathPoint`
	 * labeled alternative in `MotorMusicParser.momentSpecification`.
	 * @param ctx the parse tree
	 */
	exitPathPoint?: (ctx: PathPointContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleSpecificationList`
	 * labeled alternative in `MotorMusicParser.specification_list`.
	 * @param ctx the parse tree
	 */
	enterSingleSpecificationList?: (ctx: SingleSpecificationListContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleSpecificationList`
	 * labeled alternative in `MotorMusicParser.specification_list`.
	 * @param ctx the parse tree
	 */
	exitSingleSpecificationList?: (ctx: SingleSpecificationListContext) => void;
	/**
	 * Enter a parse tree produced by the `MuultiSpecificationList`
	 * labeled alternative in `MotorMusicParser.specification_list`.
	 * @param ctx the parse tree
	 */
	enterMuultiSpecificationList?: (ctx: MuultiSpecificationListContext) => void;
	/**
	 * Exit a parse tree produced by the `MuultiSpecificationList`
	 * labeled alternative in `MotorMusicParser.specification_list`.
	 * @param ctx the parse tree
	 */
	exitMuultiSpecificationList?: (ctx: MuultiSpecificationListContext) => void;
	/**
	 * Enter a parse tree produced by the `Con`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	enterCon?: (ctx: ConContext) => void;
	/**
	 * Exit a parse tree produced by the `Con`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	exitCon?: (ctx: ConContext) => void;
	/**
	 * Enter a parse tree produced by the `Moment`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	enterMoment?: (ctx: MomentContext) => void;
	/**
	 * Exit a parse tree produced by the `Moment`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	exitMoment?: (ctx: MomentContext) => void;
	/**
	 * Enter a parse tree produced by the `Seq`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSeq?: (ctx: SeqContext) => void;
	/**
	 * Exit a parse tree produced by the `Seq`
	 * labeled alternative in `MotorMusicParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSeq?: (ctx: SeqContext) => void;
}

