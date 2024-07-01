"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSolver = void 0;
const file_handler_1 = require("../common/file_handler");
const process_executor_1 = require("./process_executor");
class TestSolver {
    static async solve(asptest, solver) {
        var out = {};
        for (let i = 0; i < asptest.assert.length; i++) {
            const assert = asptest.assert[i];
            let outModels = {};
            let nestedArray = Object.entries(assert.fullfilRequirements(asptest.rules(), asptest.input));
            for (let j = 0; j < nestedArray.length; j++) {
                const ob = nestedArray[j];
                let TEMP_FILE_PATH = `temp${i}${j}.txt`;
                (0, file_handler_1.writeFile)(TEMP_FILE_PATH, ob[1].stringify(), 'w');
                outModels[ob[0]] = await process_executor_1.ProcessExecutor.exec_solver(TEMP_FILE_PATH, assert.preConditions().AllAnswerSets, solver);
                (0, file_handler_1.removeFile)(TEMP_FILE_PATH);
            }
            let asserted = assert.assert(outModels);
            out[`${i + 1}_${assert.constructor.name}`] = asserted.length != 0 ? asserted : true;
        }
        return out;
    }
}
exports.TestSolver = TestSolver;
//# sourceMappingURL=test_solver.js.map