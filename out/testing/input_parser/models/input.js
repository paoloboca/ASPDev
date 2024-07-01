"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const annotation_1 = require("../../common/interfaces/annotation");
const rule_1 = require("./rule");
const shared_map_1 = require("./shared_map");
class Input extends annotation_1.Annotation {
    annotations;
    constructor(annotations) {
        super();
        this.annotations = annotations;
    }
    static get regex() {
        return /^%\*\*\s*@(rule)\(name="[^"]*",\s*block="([^"]*)"\s*\)\s*\*\*%\n(.+)|(?:@rule)/mg;
    }
    static tranform(matches) {
        let annotations = new shared_map_1.SharedMap();
        for (let i = 0; i < matches.length; i++) {
            if (!matches[i].match(rule_1.Rule.regex)) {
                throw new Error(`sintax error: annotation ` + matches[i]);
            }
            let rule = rule_1.Rule.parse(matches[i]);
            annotations.addRuleToLabels(rule, rule.labels);
        }
        return new Input(annotations);
    }
    stringify() {
        return `"rules":"${this.annotations}"`;
    }
}
exports.Input = Input;
//# sourceMappingURL=input.js.map