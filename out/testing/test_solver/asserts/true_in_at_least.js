"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrueInAtLeast = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const asp_input_1 = require("../../test_parser/models/asp_input");
class TrueInAtLeast extends assert_1.Assert {
    number;
    atoms;
    fullfilRequirements(rules, input) {
        let outp = {};
        let stringRules = [];
        rules.forEach((r) => stringRules.push(r.content.stringify()));
        this.atoms.forEach(element => {
            let tempRules = Object.assign([], stringRules);
            tempRules.push(`:- not ${element.stringify()}`);
            outp[element.stringify()] = (new asp_input_1.AspInput(tempRules, input));
        });
        return outp;
    }
    assert(outputs) {
        let ret = [];
        Object.entries(outputs).forEach((o) => {
            if (o[1].answers.length >= this.number)
                ret.push(`the atom ${o[0]} appears in more than ${this.number} answer sets (${o[1].answers.length}).`);
        });
        return ret;
    }
    preConditions() {
        return new pre_conditions_1.preConditions([""], "-n0", true);
    }
    constructor(number, atoms) {
        super();
        this.number = number;
        this.atoms = atoms;
    }
}
exports.TrueInAtLeast = TrueInAtLeast;
//# sourceMappingURL=true_in_at_least.js.map