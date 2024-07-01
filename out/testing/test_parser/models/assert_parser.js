"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertParser = void 0;
const parser_1 = require("../../common/interfaces/parser");
const atom_1 = require("../../dlv_output_parser/models/atom");
const cost_1 = require("../../dlv_output_parser/models/cost");
const best_model_cost_1 = require("../../test_solver/asserts/best_model_cost");
const constraint_in_all_1 = require("../../test_solver/asserts/constraint_in_all");
const constraint_in_at_least_1 = require("../../test_solver/asserts/constraint_in_at_least");
const constraint_in_at_most_1 = require("../../test_solver/asserts/constraint_in_at_most");
const constraint_in_exactly_1 = require("../../test_solver/asserts/constraint_in_exactly");
const no_answer_set_1 = require("../../test_solver/asserts/no_answer_set");
const true_in_all_1 = require("../../test_solver/asserts/true_in_all");
const true_in_at_least_1 = require("../../test_solver/asserts/true_in_at_least");
const true_in_at_most_1 = require("../../test_solver/asserts/true_in_at_most");
const true_in_exactly_1 = require("../../test_solver/asserts/true_in_exactly");
class AssertParser extends parser_1.Parser {
    constructor() {
        super();
    }
    static assertion(k, parsedAssertion) {
        let atoms = parsedAssertion.atoms ? (parsedAssertion.atoms.split(' ').map((atom_raw) => atom_1.Atom.parse(atom_raw)) ?? []) : [];
        let constraints = parsedAssertion.constraints ? (parsedAssertion.constraints.replace(" ", "").split('.')) ?? [] : [];
        let costs = parsedAssertion.costs ? (parsedAssertion.costs.split(' ').map((raw_cost) => cost_1.Cost.parse(raw_cost)) ?? []) : [];
        let assertions = {
            "@noAnswerSet": new no_answer_set_1.NoAnswerSet(),
            "@trueInExactly": new true_in_exactly_1.TrueInExactly(parsedAssertion.number, atoms),
            "@trueInAll": new true_in_all_1.TrueInAll(atoms),
            "@trueInAtLeast": new true_in_at_least_1.TrueInAtLeast(parsedAssertion.number, atoms),
            "@trueInAtMost": new true_in_at_most_1.TrueInAtMost(parsedAssertion.number, atoms),
            "@constraintInAll": new constraint_in_all_1.ConstraintInAll(constraints),
            "@constraintInAtLeast": new constraint_in_at_least_1.ConstraintInAtLeast(parsedAssertion.number, constraints),
            "@constraintInAtMost": new constraint_in_at_most_1.ConstraintInAtMost(parsedAssertion.number, constraints),
            "@constraintInAtExactly": new constraint_in_exactly_1.ConstraintInExactly(parsedAssertion.number, constraints),
            "@bestModelCost": new best_model_cost_1.BestModelCost(costs)
        };
        return assertions[k];
    }
    static get regex() {
        return /(@\w+)\s*(\{[-a-z :0-9,().'\[\]@]*\})/gm;
    }
    static tranform(match) {
        let assertions = [];
        for (let i = 0; i < match.length; i++) {
            let groups = match[i].match(/(@\w+)\s*(\{[-a-z :0-9,().'\[\]@]*\})/m);
            if (groups !== null) {
                let convertedString = groups[2].replace(/'/g, '"');
                let assertion = AssertParser.assertion(groups[1], JSON.parse(convertedString));
                assertions.push(assertion);
            }
        }
        return assertions;
    }
}
exports.AssertParser = AssertParser;
//# sourceMappingURL=assert_parser.js.map