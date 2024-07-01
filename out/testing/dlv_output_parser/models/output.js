"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const dlv_model_1 = require("../../common/interfaces/dlv_model");
const utils_1 = require("../../common/utils");
const answer_set_1 = require("./answer_set");
class Output extends dlv_model_1.DlvOutputModel {
    answers;
    constructor(answers) {
        super();
        this.answers = answers;
    }
    static get regex() {
        return /^(\{\})|(INCOHERENT)|{((?:(?:[a-z]\w*)\((?:\w+(?:,\w+)*)\)[,\s]*)+)}(?:\nCOST ((?:\d+@\d+[\s\n]*)+))*\n*(OPTIMUM)*/gm;
    }
    static tranform(matches) {
        if (matches.length === 1 && matches[0] === "INCOHERENT")
            return new Output([]);
        if (matches.length === 1 && matches[0] === "{}")
            return new Output([]);
        let answer_sets = matches.map((raw_answer) => answer_set_1.AnswerSet.parse(raw_answer));
        if (answer_sets.length <= 1)
            new Output(answer_sets);
        for (let i = 0; i < answer_sets.length; i++) {
            for (let j = i + 1; j < answer_sets.length; j++) {
                let first = answer_sets[i];
                let second = answer_sets[j];
                //if there are two answer set with same atoms
                if ((0, utils_1.areArrayEqualNoOrder)(first.atoms, second.atoms)) {
                    //merge costs & optimatility into first
                    first.costs = (0, utils_1.fillMissingValues)(second.costs, first.costs);
                    first.optimum = second.optimum || first.optimum;
                    //remove second
                    answer_sets.splice(j, 1);
                }
            }
        }
        //'dall'ultimo che ha un costo fino in fondo hanno tutti lo stesso costo e sono tutti ottimi
        let ultimoConCosto = Output.getUltimoConCosto(answer_sets);
        if (ultimoConCosto !== undefined) {
            let propagator = answer_sets[ultimoConCosto];
            for (let i = ultimoConCosto; i < answer_sets.length; i++) {
                const as = answer_sets[i];
                as.optimum = true;
                as.costs = propagator.costs;
            }
        }
        return new Output(answer_sets);
    }
    stringify() {
        return `${this.answers.map(ans => ans.stringify()).join("\n\n")}`;
    }
    static getUltimoConCosto(answers) {
        for (let i = answers.length - 1; i > -1; i--) {
            const answer = answers[i];
            if (answer.costs.length > 0)
                return i;
        }
        return undefined;
    }
}
exports.Output = Output;
//# sourceMappingURL=output.js.map