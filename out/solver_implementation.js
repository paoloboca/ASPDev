"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grounder_Solver = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
class Grounder_Solver {
    runAspSystem(files_paths, options) {
        let pathToSystem;
        switch (process.platform) {
            case "darwin":
                pathToSystem = "bin/dlv2_macos";
                break;
            case "win32":
                pathToSystem = "bin/dlv2_windows.exe";
                break;
            default:
                pathToSystem = "bin/dlv2_linux";
                break;
        }
        const args = options ? files_paths.concat(options) : files_paths;
        const result = (0, child_process_1.spawnSync)(pathToSystem, args, { encoding: "utf-8", cwd: path_1.default.resolve(__dirname, "../") });
        // Verifica se c'è stato un errore nell'esecuzione di spawnSync
        if (result.error) {
            throw result.error;
        }
        // Verifica se ci sono stati errori nella chiamata spawnSync
        if (result.stderr) {
            throw new Error(`Errore durante l'esecuzione di ${pathToSystem}: ${result.stderr}`);
        }
        // Estrae l'output dalla proprietà output dell'oggetto result
        const output = result.output;
        if (!Array.isArray(output) || output.length < 2 || output[1] === null) {
            throw new Error("Output non valido.");
        }
        // Filtra gli elementi null e restituisce solo quelli non null
        return output.slice(1).filter((value) => value !== null);
    }
    ground(files_paths) {
        return this.runAspSystem(files_paths, ["--mode=idlv", "--t"]);
    }
    getAllAnswerSets(files_paths) {
        return this.runAspSystem(files_paths, ["-n 0"]);
    }
    getFirstAnswerSet(files_paths) {
        return this.runAspSystem(files_paths);
    }
    wasp(files_paths) {
        return this.runAspSystem(files_paths, ["--mode=wasp", "--t"]);
    }
}
exports.Grounder_Solver = Grounder_Solver;
//# sourceMappingURL=solver_implementation.js.map