// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EmptyProgramContext } from "./MotorMusicParser.js";
import { NonEmptyProgramContext } from "./MotorMusicParser.js";
import { ParadoxicallySingleCouplingContext } from "./MotorMusicParser.js";
import { MultiCouplingListContext } from "./MotorMusicParser.js";
import { NamedQualiaContext } from "./MotorMusicParser.js";
import { ExperiencedQualiaContext } from "./MotorMusicParser.js";
import { SuccessiveContext } from "./MotorMusicParser.js";
import { DigestContext } from "./MotorMusicParser.js";
import { CouplingContext } from "./MotorMusicParser.js";
import { SpawnContext } from "./MotorMusicParser.js";
import { ContainmentContext } from "./MotorMusicParser.js";
import { SingleExperienceListContext } from "./MotorMusicParser.js";
import { MultiExperienceListContext } from "./MotorMusicParser.js";


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
	 * Enter a parse tree produced by the `ParadoxicallySingleCoupling`
	 * labeled alternative in `MotorMusicParser.coupling_list`.
	 * @param ctx the parse tree
	 */
	enterParadoxicallySingleCoupling?: (ctx: ParadoxicallySingleCouplingContext) => void;
	/**
	 * Exit a parse tree produced by the `ParadoxicallySingleCoupling`
	 * labeled alternative in `MotorMusicParser.coupling_list`.
	 * @param ctx the parse tree
	 */
	exitParadoxicallySingleCoupling?: (ctx: ParadoxicallySingleCouplingContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiCouplingList`
	 * labeled alternative in `MotorMusicParser.coupling_list`.
	 * @param ctx the parse tree
	 */
	enterMultiCouplingList?: (ctx: MultiCouplingListContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiCouplingList`
	 * labeled alternative in `MotorMusicParser.coupling_list`.
	 * @param ctx the parse tree
	 */
	exitMultiCouplingList?: (ctx: MultiCouplingListContext) => void;
	/**
	 * Enter a parse tree produced by the `NamedQualia`
	 * labeled alternative in `MotorMusicParser.qualia`.
	 * @param ctx the parse tree
	 */
	enterNamedQualia?: (ctx: NamedQualiaContext) => void;
	/**
	 * Exit a parse tree produced by the `NamedQualia`
	 * labeled alternative in `MotorMusicParser.qualia`.
	 * @param ctx the parse tree
	 */
	exitNamedQualia?: (ctx: NamedQualiaContext) => void;
	/**
	 * Enter a parse tree produced by the `ExperiencedQualia`
	 * labeled alternative in `MotorMusicParser.qualia`.
	 * @param ctx the parse tree
	 */
	enterExperiencedQualia?: (ctx: ExperiencedQualiaContext) => void;
	/**
	 * Exit a parse tree produced by the `ExperiencedQualia`
	 * labeled alternative in `MotorMusicParser.qualia`.
	 * @param ctx the parse tree
	 */
	exitExperiencedQualia?: (ctx: ExperiencedQualiaContext) => void;
	/**
	 * Enter a parse tree produced by the `Successive`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	enterSuccessive?: (ctx: SuccessiveContext) => void;
	/**
	 * Exit a parse tree produced by the `Successive`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	exitSuccessive?: (ctx: SuccessiveContext) => void;
	/**
	 * Enter a parse tree produced by the `Digest`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	enterDigest?: (ctx: DigestContext) => void;
	/**
	 * Exit a parse tree produced by the `Digest`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	exitDigest?: (ctx: DigestContext) => void;
	/**
	 * Enter a parse tree produced by the `Coupling`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	enterCoupling?: (ctx: CouplingContext) => void;
	/**
	 * Exit a parse tree produced by the `Coupling`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	exitCoupling?: (ctx: CouplingContext) => void;
	/**
	 * Enter a parse tree produced by the `Spawn`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	enterSpawn?: (ctx: SpawnContext) => void;
	/**
	 * Exit a parse tree produced by the `Spawn`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	exitSpawn?: (ctx: SpawnContext) => void;
	/**
	 * Enter a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	enterContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParser.experience`.
	 * @param ctx the parse tree
	 */
	exitContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleExperienceList`
	 * labeled alternative in `MotorMusicParser.experience_list`.
	 * @param ctx the parse tree
	 */
	enterSingleExperienceList?: (ctx: SingleExperienceListContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleExperienceList`
	 * labeled alternative in `MotorMusicParser.experience_list`.
	 * @param ctx the parse tree
	 */
	exitSingleExperienceList?: (ctx: SingleExperienceListContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiExperienceList`
	 * labeled alternative in `MotorMusicParser.experience_list`.
	 * @param ctx the parse tree
	 */
	enterMultiExperienceList?: (ctx: MultiExperienceListContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiExperienceList`
	 * labeled alternative in `MotorMusicParser.experience_list`.
	 * @param ctx the parse tree
	 */
	exitMultiExperienceList?: (ctx: MultiExperienceListContext) => void;
}

