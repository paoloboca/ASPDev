"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const annotation_1 = require("../../common/interfaces/annotation");
const asp_rule_1 = require("../domain_primitives/asp_rule");
const label_1 = require("../domain_primitives/label");
class Rule extends annotation_1.Annotation {
    labels;
    content;
    constructor(labels, content) {
        super();
        this.labels = labels;
        this.content = content;
    }
    static get regex() {
        return /^%\*\*\s*@(rule)\(name="[^"]*",\s*block="([^"]*)"\s*\)\s*\*\*%\n(.+)/m;
    }
    static tranform(match) {
        let raw_labels = new Set(match[2].split(','));
        let labels = new Set();
        for (let raw_label of raw_labels) {
            labels.add(new label_1.Label(raw_label));
        }
        let content = match[3];
        let asp_rule = new asp_rule_1.AspRule(content);
        return new Rule(labels, asp_rule);
    }
    stringify() {
        return `${this.content}`;
    }
}
exports.Rule = Rule;
//# sourceMappingURL=rule.js.map