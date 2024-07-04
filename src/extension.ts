import * as vscode from 'vscode';
import { subscribeToDocumentChanges } from './code_analyses/syntax_checking_asp';
import { Grounder_Solver } from './solver/solver_implementation';
import { OsPortability } from './solver/portability_implementation';
import { getASPIntellisenseProvider,getASPHoverProvider,fillDictionaryWithDynamicPredicates} from './autocompletion/autocompletion';
import { subscribeToDocumentChangesTest } from './code_analyses/syntax_checking_test';
import {readFile,checkPathExist,isPathDirectory,isPathFile,getDirContent} from './testing/common/file_handler'
import { OutputPanel } from './utility/output_panel';
import * as path from 'path';
import { TestParser } from './testing/test_parser/test_parser';
import { TestSolver } from './testing/test_solver/test_solver';

type Method = 'dlv2' | 'clingo';
let logFilePath: string;
let outputPanel: OutputPanel | undefined;
export function activate(context: vscode.ExtensionContext) {
  
    vscode.window.showInformationMessage("Congratulations, your extension ASPDev is now active!");
    const Diagnostics = vscode.languages.createDiagnosticCollection("diagnostic");
    const Diagnostics2 = vscode.languages.createDiagnosticCollection("diagnostic2");
	context.subscriptions.push(Diagnostics,Diagnostics2);
	subscribeToDocumentChanges(context,Diagnostics);
    subscribeToDocumentChangesTest(context,Diagnostics2);
    outputPanel = OutputPanel.getInstance();

    let disposable = vscode.commands.registerCommand('extension.executeFile', async () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
             const filePath = activeEditor.document.uri.fsPath;
             const osPortability = OsPortability.get_instance();
             const convertedFilePath = osPortability.convert_file_sep(filePath);
             const finalPath=osPortability.convert_endl(convertedFilePath);
             let pathToExe:string="";
             let exe_choose:string|undefined="";
             let executable:string="";
            const executableOption = await vscode.window.showQuickPick(
            ['Use the default executable', 'Enter the path to the executable'], 
            { placeHolder: 'Select the executable option.' });
            if (executableOption === 'Enter the path to the executable') {
                    const inputPath = await vscode.window.showInputBox({ placeHolder: 'Enter the path to the executable' });
                    pathToExe = inputPath || ""; 
                    
                }
            
            else{
                exe_choose = await vscode.window.showQuickPick(['dlv2', 'clingo'], { placeHolder: 'Seleet the executable' });
            }
            
            const selectedMethod = await vscode.window.showQuickPick(['Ground', 'Get All Answer Sets', 'Get First Answer Set'], { placeHolder: 'Select option' });

            const solver = new Grounder_Solver();
            if(exe_choose=='dlv2'){
                executable="dlv2";
            }else if(exe_choose=="clingo"){
                executable="clingo";
            }
            
            let result: string[];
            switch (selectedMethod) {
                case 'Ground':
                    result = solver.ground([finalPath],pathToExe,executable);
                    break;
                case 'Get All Answer Sets':
                    result = solver.getAllAnswerSets([finalPath],pathToExe,executable);
                    
                    break;
                case 'Get First Answer Set':
                    result = solver.getFirstAnswerSet([finalPath],pathToExe,executable);
                    break;
                default:
                    vscode.window.showErrorMessage('Metodh not valid.');
                    return;
            }

            
            if (result.length > 0) {
                if(outputPanel){
                    outputPanel.updateWebviewContent(result[0]);
                }
                
                
            }
        } else {
            vscode.window.showErrorMessage('Open file to execute.');
        }
    });
    context.subscriptions.push(disposable);

    let disposable2 = vscode.commands.registerCommand('extension.executeTestFile', async () => {
        if (vscode.window.activeTextEditor) {
            const filePath = vscode.window.activeTextEditor.document.fileName;
           
            const osPortability = OsPortability.get_instance();
            const convertedFilePath = osPortability.convert_file_sep(filePath);
            const finalPath=osPortability.convert_endl(convertedFilePath);
            const selectedMethod = await vscode.window.showQuickPick(['dlv2', 'clingo'], { placeHolder: 'Select the executable' });
            
            if (selectedMethod=='dlv2') {
                try {
                    solveTests(finalPath,'dlv2');
                } catch (error) {
                   
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    vscode.window.showErrorMessage(errorMessage);
                }    
            } else if(selectedMethod=='clingo') {
                try {
                    solveTests(finalPath,'clingo');
                } catch (error) {
                    // Gestisci l'errore e stampalo nell'output channel
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    vscode.window.showErrorMessage(errorMessage);
                }
            }
            else{
                vscode.window.showErrorMessage('Selection cancelled');
            }
            
            
        
        }
    });
    context.subscriptions.push(disposable2);
    

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.clearPanel', () => {
            if (outputPanel) {
                outputPanel.clearWebviewContent(); // Chiamata per pulire il pannello
            }
        })
    );

    context.subscriptions.push(vscode.commands.registerCommand('extension.showOutputPanel', () => {
        if(outputPanel){
            outputPanel.showPanel();
        }
        
    }));
    

   

    //Autocompletion
	
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', getASPIntellisenseProvider(context), '#', '&'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", getASPHoverProvider(context)));

	fillDictionaryWithDynamicPredicates();
    

    
    return context;



}

async function solveTests(inputPath: string, solver:Method) {
    let filePaths: string[] = [];
    if (!checkPathExist(inputPath))
      throw new Error(`${inputPath} does not exist`);
    if (isPathFile(inputPath))
      filePaths = [inputPath];
    if (isPathDirectory(inputPath))
      filePaths = getDirContent(inputPath).map(c => path.resolve(path.join(inputPath, c)));
  
    for (let k = 0; k < filePaths.length; k++) {
      let filePath = filePaths[k];
      let test_wrapper = TestParser.parse_test_file(filePath);
      for (let i = 0; i < test_wrapper.tests.length; i++) {
        let test = test_wrapper.tests[i];
        const obj = await TestSolver.solve(test, solver);
        const stringRepresentation = objectToString(obj);
        if(outputPanel){
            outputPanel.updateWebviewContent("Executed file= "+filePath+"Output: "+stringRepresentation);
        }
        
        
      }
    }
  }

  function objectToString(obj: { [id: string]: boolean | string[] }): string {
    let result = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'boolean') {
                result += `${key}: ${value ? 'true' : 'false'}, `;
            } else if (Array.isArray(value)) {
                result += `${key}: [${value.join(', ')}], `;
            }
        }
    }
    // Rimuovi l'eventuale virgola finale e restituisci il risultato
    return result.replace(/, $/, '');
}



// This method is called when your extension is deactivated
export function deactivate() {}
