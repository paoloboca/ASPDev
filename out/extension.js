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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const syntax_checking_asp_1 = require("./code_analyses/syntax_checking_asp");
const solver_implementation_1 = require("./solver/solver_implementation");
const portability_implementation_1 = require("./solver/portability_implementation");
const autocompletion_1 = require("./autocompletion/autocompletion");
const syntax_checking_test_1 = require("./code_analyses/syntax_checking_test");
const file_handler_1 = require("./testing/common/file_handler");
const output_panel_1 = require("./utility/output_panel");
const path = __importStar(require("path"));
const test_parser_1 = require("./testing/test_parser/test_parser");
const test_solver_1 = require("./testing/test_solver/test_solver");
let logFilePath;
let outputPanel;
function activate(context) {
    vscode.window.showInformationMessage("Congratulations, your extension ASPDev is now active!");
    const Diagnostics = vscode.languages.createDiagnosticCollection("diagnostic");
    const Diagnostics2 = vscode.languages.createDiagnosticCollection("diagnostic2");
    context.subscriptions.push(Diagnostics, Diagnostics2);
    (0, syntax_checking_asp_1.subscribeToDocumentChanges)(context, Diagnostics);
    (0, syntax_checking_test_1.subscribeToDocumentChangesTest)(context, Diagnostics2);
    outputPanel = output_panel_1.OutputPanel.getInstance();
    let disposable = vscode.commands.registerCommand('extension.executeFile', async () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            const filePath = activeEditor.document.uri.fsPath;
            const osPortability = portability_implementation_1.OsPortability.get_instance();
            const convertedFilePath = osPortability.convert_file_sep(filePath);
            const finalPath = osPortability.convert_endl(convertedFilePath);
            let pathToExe = "";
            let exe_choose = "";
            let executable = "";
            const executableOption = await vscode.window.showQuickPick(['Use the default executable', 'Enter the path to the executable'], { placeHolder: 'Select the executable option.' });
            if (executableOption === 'Enter the path to the executable') {
                const inputPath = await vscode.window.showInputBox({ placeHolder: 'Enter the path to the executable' });
                pathToExe = inputPath || "";
            }
            else {
                exe_choose = await vscode.window.showQuickPick(['dlv2', 'clingo'], { placeHolder: 'Seleet the executable' });
            }
            const selectedMethod = await vscode.window.showQuickPick(['Ground', 'Get All Answer Sets', 'Get First Answer Set', 'Wasp'], { placeHolder: 'Select option' });
            const solver = new solver_implementation_1.Grounder_Solver();
            if (exe_choose == 'dlv2') {
                executable = "dlv2";
            }
            else if (exe_choose == "clingo") {
                executable = "clingo";
            }
            let result;
            switch (selectedMethod) {
                case 'Ground':
                    result = solver.ground([finalPath], pathToExe, executable);
                    break;
                case 'Get All Answer Sets':
                    result = solver.getAllAnswerSets([finalPath], pathToExe, executable);
                    break;
                case 'Get First Answer Set':
                    result = solver.getFirstAnswerSet([finalPath], pathToExe, executable);
                    break;
                case 'Wasp':
                    result = solver.wasp([finalPath], pathToExe, executable);
                    break;
                default:
                    vscode.window.showErrorMessage('Metodh not valid.');
                    return;
            }
            if (result.length > 0) {
                if (outputPanel) {
                    outputPanel.updateWebviewContent(result[0]);
                }
            }
        }
        else {
            vscode.window.showErrorMessage('Open file to execute.');
        }
    });
    context.subscriptions.push(disposable);
    let disposable2 = vscode.commands.registerCommand('extension.executeTestFile', async () => {
        if (vscode.window.activeTextEditor) {
            const filePath = vscode.window.activeTextEditor.document.fileName;
            const osPortability = portability_implementation_1.OsPortability.get_instance();
            const convertedFilePath = osPortability.convert_file_sep(filePath);
            const finalPath = osPortability.convert_endl(convertedFilePath);
            const selectedMethod = await vscode.window.showQuickPick(['dlv2', 'clingo'], { placeHolder: 'Select the executable' });
            if (selectedMethod == 'dlv2') {
                try {
                    solveTests(finalPath, 'dlv2');
                }
                catch (error) {
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    vscode.window.showErrorMessage(errorMessage);
                }
            }
            else if (selectedMethod == 'clingo') {
                try {
                    solveTests(finalPath, 'clingo');
                }
                catch (error) {
                    // Gestisci l'errore e stampalo nell'output channel
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    vscode.window.showErrorMessage(errorMessage);
                }
            }
            else {
                vscode.window.showErrorMessage('Selection cancelled');
            }
        }
    });
    context.subscriptions.push(disposable2);
    context.subscriptions.push(vscode.commands.registerCommand('extension.clearPanel', () => {
        if (outputPanel) {
            outputPanel.clearWebviewContent(); // Chiamata per pulire il pannello
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.showOutputPanel', () => {
        if (outputPanel) {
            outputPanel.showPanel();
        }
    }));
    //Autocompletion
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', (0, autocompletion_1.getASPIntellisenseProvider)(context), '#', '&'));
    context.subscriptions.push(vscode.languages.registerHoverProvider("asp", (0, autocompletion_1.getASPHoverProvider)(context)));
    (0, autocompletion_1.fillDictionaryWithDynamicPredicates)();
    return context;
}
exports.activate = activate;
async function solveTests(inputPath, solver) {
    let filePaths = [];
    if (!(0, file_handler_1.checkPathExist)(inputPath))
        throw new Error(`${inputPath} does not exist`);
    if ((0, file_handler_1.isPathFile)(inputPath))
        filePaths = [inputPath];
    if ((0, file_handler_1.isPathDirectory)(inputPath))
        filePaths = (0, file_handler_1.getDirContent)(inputPath).map(c => path.resolve(path.join(inputPath, c)));
    for (let k = 0; k < filePaths.length; k++) {
        let filePath = filePaths[k];
        let test_wrapper = test_parser_1.TestParser.parse_test_file(filePath);
        for (let i = 0; i < test_wrapper.tests.length; i++) {
            let test = test_wrapper.tests[i];
            const obj = await test_solver_1.TestSolver.solve(test, solver);
            const stringRepresentation = objectToString(obj);
            if (outputPanel) {
                outputPanel.updateWebviewContent("Executed file= " + filePath + "Output: " + stringRepresentation);
            }
        }
    }
}
function objectToString(obj) {
    let result = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'boolean') {
                result += `${key}: ${value ? 'true' : 'false'}, `;
            }
            else if (Array.isArray(value)) {
                result += `${key}: [${value.join(', ')}], `;
            }
        }
    }
    // Rimuovi l'eventuale virgola finale e restituisci il risultato
    return result.replace(/, $/, '');
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map