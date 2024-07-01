"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrueInAll = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const asp_input_1 = require("../../test_parser/models/asp_input");
class TrueInAll extends assert_1.Assert {
    atoms;
    fullfilRequirements(rules, input) {
        let outp = {};
        let stringRules = [];
        rules.forEach((r) => stringRules.push(r.content.stringify()));
        this.atoms.forEach(element => {
            let tempRules = Object.assign([], stringRules);
            tempRules.push(`:- ${element.stringify()}`);
            outp[element.stringify()] = (new asp_input_1.AspInput(tempRules, input));
        });
        return outp;
    }
    assert(outputs) {
        let ret = [];
        Object.entries(outputs).forEach((o) => {
            if (o[1].answers.length != 0)
                ret.push(`the atom ${o[0]} does not appear in every answer set (${o[1].answers.length} without it).`);
        });
        return ret;
    }
    constructor(atoms) {
        super();
        this.atoms = atoms;
    }
    preConditions() {
        return new pre_conditions_1.preConditions(["EVERY_ATOM_CONSTRAINT"], "-n0", true);
    }
}
exports.TrueInAll = TrueInAll;
//# sourceMappingURL=true_in_all.js.map