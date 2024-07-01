// Generated from TEST.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AnnotationListContext } from "./TESTParser";
import { AnnotationExpressionContext } from "./TESTParser";
import { NameDefinitionContext } from "./TESTParser";
import { RuleDefinitionContext } from "./TESTParser";
import { BlockDefinitionContext } from "./TESTParser";
import { TestDefinitionContext } from "./TESTParser";
import { ProgramDefinitionContext } from "./TESTParser";
import { RuleReferenceListContext } from "./TESTParser";
import { RuleReferenceContext } from "./TESTParser";
import { ProgramFilesListContext } from "./TESTParser";
import { ProgramFileContext } from "./TESTParser";
import { InputFilesListContext } from "./TESTParser";
import { InputFileContext } from "./TESTParser";
import { ReferenceListContext } from "./TESTParser";
import { ReferenceContext } from "./TESTParser";
import { AssertListContext } from "./TESTParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TESTParser`.
 */
export interface TESTListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TESTParser.annotationList`.
	 * @param ctx the parse tree
	 */
	enterAnnotationList?: (ctx: AnnotationListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.annotationList`.
	 * @param ctx the parse tree
	 */
	exitAnnotationList?: (ctx: AnnotationListContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.annotationExpression`.
	 * @param ctx the parse tree
	 */
	enterAnnotationExpression?: (ctx: AnnotationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.annotationExpression`.
	 * @param ctx the parse tree
	 */
	exitAnnotationExpression?: (ctx: AnnotationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.nameDefinition`.
	 * @param ctx the parse tree
	 */
	enterNameDefinition?: (ctx: NameDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.nameDefinition`.
	 * @param ctx the parse tree
	 */
	exitNameDefinition?: (ctx: NameDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.ruleDefinition`.
	 * @param ctx the parse tree
	 */
	enterRuleDefinition?: (ctx: RuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.ruleDefinition`.
	 * @param ctx the parse tree
	 */
	exitRuleDefinition?: (ctx: RuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.blockDefinition`.
	 * @param ctx the parse tree
	 */
	enterBlockDefinition?: (ctx: BlockDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.blockDefinition`.
	 * @param ctx the parse tree
	 */
	exitBlockDefinition?: (ctx: BlockDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.testDefinition`.
	 * @param ctx the parse tree
	 */
	enterTestDefinition?: (ctx: TestDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.testDefinition`.
	 * @param ctx the parse tree
	 */
	exitTestDefinition?: (ctx: TestDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.programDefinition`.
	 * @param ctx the parse tree
	 */
	enterProgramDefinition?: (ctx: ProgramDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.programDefinition`.
	 * @param ctx the parse tree
	 */
	exitProgramDefinition?: (ctx: ProgramDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.ruleReferenceList`.
	 * @param ctx the parse tree
	 */
	enterRuleReferenceList?: (ctx: RuleReferenceListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.ruleReferenceList`.
	 * @param ctx the parse tree
	 */
	exitRuleReferenceList?: (ctx: RuleReferenceListContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.ruleReference`.
	 * @param ctx the parse tree
	 */
	enterRuleReference?: (ctx: RuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.ruleReference`.
	 * @param ctx the parse tree
	 */
	exitRuleReference?: (ctx: RuleReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.programFilesList`.
	 * @param ctx the parse tree
	 */
	enterProgramFilesList?: (ctx: ProgramFilesListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.programFilesList`.
	 * @param ctx the parse tree
	 */
	exitProgramFilesList?: (ctx: ProgramFilesListContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.programFile`.
	 * @param ctx the parse tree
	 */
	enterProgramFile?: (ctx: ProgramFileContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.programFile`.
	 * @param ctx the parse tree
	 */
	exitProgramFile?: (ctx: ProgramFileContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.inputFilesList`.
	 * @param ctx the parse tree
	 */
	enterInputFilesList?: (ctx: InputFilesListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.inputFilesList`.
	 * @param ctx the parse tree
	 */
	exitInputFilesList?: (ctx: InputFilesListContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.inputFile`.
	 * @param ctx the parse tree
	 */
	enterInputFile?: (ctx: InputFileContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.inputFile`.
	 * @param ctx the parse tree
	 */
	exitInputFile?: (ctx: InputFileContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.referenceList`.
	 * @param ctx the parse tree
	 */
	enterReferenceList?: (ctx: ReferenceListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.referenceList`.
	 * @param ctx the parse tree
	 */
	exitReferenceList?: (ctx: ReferenceListContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `TESTParser.assertList`.
	 * @param ctx the parse tree
	 */
	enterAssertList?: (ctx: AssertListContext) => void;
	/**
	 * Exit a parse tree produced by `TESTParser.assertList`.
	 * @param ctx the parse tree
	 */
	exitAssertList?: (ctx: AssertListContext) => void;
}

