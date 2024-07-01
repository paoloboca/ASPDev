"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestModelCost = void 0;
const assert_1 = require("../../common/interfaces/assert");
const pre_conditions_1 = require("../../common/pre_conditions");
const utils_1 = require("../../common/utils");
const asp_input_1 = require("../../test_parser/models/asp_input");
class BestModelCost extends assert_1.Assert {
    costs;
    equalToCost = (arr) => { return (0, utils_1.areArrayEqualNoOrder)(arr, this.costs); };
    fullfilRequirements(rules, input) {
        let tempRules = [];
        rules.forEach((r) => tempRules.push(r.content.stringify()));
        return { "0": new asp_input_1.AspInput(tempRules, input) };
    }
    assert(outputs) {
        let ret = [];
        if (Object.keys(outputs).length == 0)
            return ["No answer sets produced"];
        Object.entries(outputs).forEach((o) => {
            let bestAS = o[1].answers.find(e => e.optimum);
            if (!bestAS)
                ret.push('No optimum produced.');
            else {
                if (!this.equalToCost(bestAS.costs)) {
                    let raw_costs = [];
                    for (let i = 0; i < bestAS.costs.length; i++) {
                        raw_costs.push(bestAS.costs[i].stringify());
                    }
                    ret.push(`Model has a different cost (${raw_costs.toString()})`);
                }
            }
        });
        return ret;
    }
    preConditions() {
        return new pre_conditions_1.preConditions();
    }
    constructor(costs) {
        super();
        this.costs = costs;
    }
}
exports.BestModelCost = BestModelCost;
//# sourceMappingURL=best_model_cost.js.map