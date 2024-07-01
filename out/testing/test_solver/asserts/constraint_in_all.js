"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintInAll = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const asp_input_1 = require("../../test_parser/models/asp_input");
class ConstraintInAll extends assert_1.Assert {
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
            if (o[1].answers.length != 0)
                ret.push(`the constraint ${o[0]} is not satisfied in every answer set (${o[1].answers.length} not satisfying).`);
        });
        return ret;
    }
    constructor(constraints) {
        super();
        this.constraints = constraints;
    }
    preConditions() {
        return new pre_conditions_1.preConditions(["EVERY_ATOM_CONSTRAINT"], "-n0", true);
    }
}
exports.ConstraintInAll = ConstraintInAll;
//# sourceMappingURL=constraint_in_all.js.map