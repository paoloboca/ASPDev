"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoAnswerSet = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const asp_input_1 = require("../../test_parser/models/asp_input");
class NoAnswerSet extends assert_1.Assert {
    fullfilRequirements(rules, input) {
        let tempRules = [];
        rules.forEach((r) => tempRules.push(r.content.stringify()));
        return { "0": new asp_input_1.AspInput(tempRules, input) };
    }
    assert(outputs) {
        let ret = [];
        Object.entries(outputs).forEach((o) => {
            if (o[1].answers.length != 0)
                ret =
                    [`Test failed: there ${(o[1].answers.length == 1) ?
                            "is an answer set." :
                            `are ${o[1].answers.length} answer sets.`}`];
        });
        return ret;
    }
    preConditions() {
        return new pre_conditions_1.preConditions([""], "-n0", true);
    }
}
exports.NoAnswerSet = NoAnswerSet;
//# sourceMappingURL=no_answer_set.js.map