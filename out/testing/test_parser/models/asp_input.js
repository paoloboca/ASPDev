"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspInput = void 0;
class AspInput {
    rules;
    atoms;
    constructor(rules, atoms = []) {
        this.rules = rules;
        this.atoms = atoms;
    }
    stringify() {
        let inRules = this.rules.join('\n');
        let inAtoms = this.atoms.map(a => a.stringify()).join('\n');
        return `${inRules}\n${inAtoms}`;
    }
}
exports.AspInput = AspInput;
//# sourceMappingURL=asp_input.js.map