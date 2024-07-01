"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintInAtMost = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const asp_input_1 = require("../../test_parser/models/asp_input");
class ConstraintInAtMost extends assert_1.Assert {
    number;
    constraints;
    fullfilRequirements(rules, input) {
        let outp = {};
        let stringRules = [];
        rules.forEach((r) => stringRules.push(r.content.stringify()));
        this.constraints.forEach(element => {
            if (element == '')
                return;
            let tempRules = Object.assign([], stringRules);
            tempRules.push(`constrAux(1) ${element}.`);
            tempRules.push(":- not constrAux(1).");
            outp[element] = (new asp_input_1.AspInput(tempRules, input));
        });
        return outp;
    }
    assert(outputs) {
        let ret = [];
        Object.entries(outputs).forEach((o) => {
            if (o[1].answers.length > this.number)
                ret.push(`the constraint ${o[0]} is not satisfied in at most ${this.number} answer set (${o[1].answers.length}).`);
        });
        return ret;
    }
    constructor(number, constraints) {
        super();
        this.number = number;
        this.constraints = constraints;
    }
    preConditions() {
        return new pre_conditions_1.preConditions(["EVERY_ATOM_CONSTRAINT"], "-n0", true);
    }
}
exports.ConstraintInAtMost = ConstraintInAtMost;
//# sourceMappingURL=constraint_in_at_most.js.map