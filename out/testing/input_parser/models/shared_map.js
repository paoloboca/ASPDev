"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedMap = void 0;
class SharedMap {
    rulesByLabel;
    constructor() {
        this.rulesByLabel = new Map();
    }
    addRuleToLabels(rule, labels) {
        let raw_labels = [];
        for (let label of labels) {
            raw_labels.push(label.stringify());
        }
        this.add(rule, new Set(raw_labels));
    }
    add(rule, labels) {
        if (labels.size == 0) {
            throw new Error(`A rule must have at least one label`);
        }
        if (labels.has("")) {
            throw new Error(`a label can't be an empty string`);
        }
        for (let currentLabel of labels) {
            if (!this.rulesByLabel.has(currentLabel)) {
                this.rulesByLabel.set(currentLabel, new Set([rule]));
            }
            else {
                this.rulesByLabel.get(currentLabel)?.add(rule);
            }
        }
    }
    has(key) {
        return this.rulesByLabel.has(key.stringify());
    }
    get(key) {
        return this.rulesByLabel.get(key.stringify());
    }
}
exports.SharedMap = SharedMap;
//# sourceMappingURL=shared_map.js.map