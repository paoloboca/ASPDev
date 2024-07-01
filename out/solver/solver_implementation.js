"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTempFilesWithoutTestBlocks = exports.Grounder_Solver = void 0;
const child_process_1 = require("child_process");
const syntax_checking_test_1 = require("../code_analyses/syntax_checking_test");
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class Grounder_Solver {
    runAspSystem(files_paths, choose, options, pathToExe) {
        let pathToSystem;
        if (!pathToExe) {
            switch (process.platform) {
                case "darwin":
                    if (choose == "dlv2") {
                        pathToSystem = "bin/dlv2_macos";
                    }
                    else {
                        pathToSystem = "bin/clingo_macos";
                    }
                    break;
                case "win32":
                    if (choose == "dlv2") {
                        pathToSystem = "bin/dlv2_windows.exe";
                    }
                    else {
                        pathToSystem = "bin/clingo_windows.exe";
                    }
                    break;
                default:
                    if (choose == "dlv2") {
                        pathToSystem = "bin/dlv2_linux";
                    }
                    else {
                        pathToSystem = "bin/clingo_linux";
                    }
                    break;
            }
        }
        else {
            pathToSystem = pathToExe;
        }
        const tempFilePath = createTempFilesWithoutTestBlocks(files_paths);
        const args = options ? tempFilePath.concat(options) : files_paths;
        const result = (0, child_process_1.spawnSync)(pathToSystem, args, { encoding: "utf-8", cwd: path.resolve(__dirname, "../") });
        if (result.error) {
            throw result.error;
        }
        if (result.stderr) {
            throw new Error(`Error during execution of ${pathToSystem}: ${result.stderr}`);
        }
        // Estrae l'output dalla proprietà output dell'oggetto result
        const output = result.output;
        if (!Array.isArray(output) || output.length < 2 || output[1] === null) {
            throw new Error("Not valid output.");
        }
        // Filtra gli elementi null e restituisce solo quelli non null
        return output.slice(1).filter((value) => value !== null);
    }
    ground(files_paths, pathToExe, choose) {
        return this.runAspSystem(files_paths, choose, ["--mode=idlv", "--t"], pathToExe);
    }
    getAllAnswerSets(files_paths, pathToExe, choose) {
        return this.runAspSystem(files_paths, choose, ["-n 0"], pathToExe);
    }
    getFirstAnswerSet(files_paths, pathToExe, choose) {
        return this.runAspSystem(files_paths, choose, [], pathToExe);
    }
    wasp(files_paths, pathToExe, choose) {
        return this.runAspSystem(files_paths, choose, ["--mode=wasp", "--t"], pathToExe);
    }
}
exports.Grounder_Solver = Grounder_Solver;
// Funzione per leggere il contenuto di un file e rimuovere i blocchi di test
function removeTestBlocksFromFile(filePath) {
    const doc = vscode.workspace.textDocuments.find(doc => doc.fileName === filePath);
    if (!doc) {
        throw new Error(`Il documento ${filePath} non è aperto nell'editor.`);
    }
    const blocks = (0, syntax_checking_test_1.getLinesInTestBlock)(doc);
    const lines = doc.getText().split('\n');
    const linesWithoutTests = lines.filter((line, index) => {
        return !blocks.some(block => index >= block.startLine && index <= block.endLine);
    });
    return linesWithoutTests.join('\n');
}
// Funzione per creare un file temporaneo senza i blocchi di test
function createTempFilesWithoutTestBlocks(filePaths) {
    const tempFilePaths = [];
    for (const filePath of filePaths) {
        const fileExtension = path.extname(filePath);
        if (fileExtension === '.asp' || fileExtension === '.dlv') {
            const content = removeTestBlocksFromFile(filePath);
            const tempDir = path.join(__dirname, 'out', 'output');
            const fileName = "temp.asp";
            const tempFilePath = path.join(tempDir, fileName);
            // Verifica se la directory temporanea esiste, altrimenti creala
            if (!fs.existsSync(tempDir)) {
                try {
                    fs.mkdirSync(tempDir, { recursive: true });
                }
                catch (error) {
                    vscode.window.showErrorMessage(`Errore durante la creazione della directory temporanea ${tempDir}`);
                }
            }
            try {
                fs.writeFileSync(tempFilePath, content);
                tempFilePaths.push(tempFilePath);
            }
            catch (error) {
                console.error(`Errore durante la scrittura del file temporaneo ${tempFilePath}:`, error);
            }
        }
        else {
            vscode.window.showErrorMessage("Open file with extension .asp or .dlv");
        }
    }
    return tempFilePaths;
}
exports.createTempFilesWithoutTestBlocks = createTempFilesWithoutTestBlocks;
//# sourceMappingURL=solver_implementation.js.map