import { spawnSync, SpawnSyncReturns } from 'child_process';
import { getLinesInTestBlock } from '../code_analyses/syntax_checking_test';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';


export class Grounder_Solver {
    private runAspSystem(files_paths: string[],choose:string, options?: string[],pathToExe?:string,): string[] {
        let pathToSystem:string;
       
        if(!pathToExe){
            switch (process.platform) {
                case "darwin":
                    if(choose=="dlv2"){
                        pathToSystem = "bin/dlv2_macos";
                    }else{
                        pathToSystem = "bin/clingo_macos";
                    }
                   break;
                case "win32":
                    if(choose=="dlv2"){
                        pathToSystem = "bin/dlv2_windows.exe";
                    }else{
                        pathToSystem = "bin/clingo_windows.exe";
                    }
                    break;
                default:
                    if(choose=="dlv2"){
                    pathToSystem = "bin/dlv2_linux";
                    }else{
                        pathToSystem = "bin/clingo_linux"; 
                    }
                    break;
            }

        }
        else{
            pathToSystem=pathToExe;
        }
        
        const tempFilePath = createTempFilesWithoutTestBlocks(files_paths);
    
        
       
        const args = options ? tempFilePath.concat(options) : files_paths;

        
        const result: SpawnSyncReturns<string> = spawnSync(pathToSystem,args,{ encoding: "utf-8", cwd: path.resolve(__dirname, "../") });
       
        
        if (result.error) {
            
            throw result.error;
        }
       
        if (result.stderr) {
            
            throw new Error(`Error during execution of ${pathToSystem}: ${result.stderr}`);
        }
        // Estrae l'output dalla proprietà output dell'oggetto result
        const output: (string | null)[] = result.output;
        if (!Array.isArray(output) || output.length < 2 || output[1] === null) {
            throw new Error("Not valid output.");
        }
       
        // Filtra gli elementi null e restituisce solo quelli non null
        return output.slice(1).filter((value): value is string => value !== null);
    }

    ground(files_paths: string[],pathToExe:string,choose:string): string[] {
        return this.runAspSystem(files_paths,choose,["--mode=idlv", "--t"],pathToExe);
    }

    getAllAnswerSets(files_paths: string[],pathToExe:string,choose:string): string[] {
        return this.runAspSystem(files_paths,choose, ["-n 0"],pathToExe);
    }

    getFirstAnswerSet(files_paths: string[],pathToExe:string,choose:string): string[] {
        return this.runAspSystem(files_paths,choose,[],pathToExe);
    }

    wasp(files_paths: string[],pathToExe:string,choose:string): string[] {
        return this.runAspSystem(files_paths,choose,["--mode=wasp", "--t"],pathToExe);
    }

    





}


// Funzione per leggere il contenuto di un file e rimuovere i blocchi di test
function removeTestBlocksFromFile(filePath: string): string {
    const doc = vscode.workspace.textDocuments.find(doc => doc.fileName === filePath);
    if (!doc) {
        throw new Error(`Il documento ${filePath} non è aperto nell'editor.`);
    }

    const blocks = getLinesInTestBlock(doc);
    const lines = doc.getText().split('\n');
    const linesWithoutTests = lines.filter((line, index) => {
        return !blocks.some(block => index >= block.startLine && index <= block.endLine);
    });

    return linesWithoutTests.join('\n');
}

// Funzione per creare un file temporaneo senza i blocchi di test
export function createTempFilesWithoutTestBlocks(filePaths: string[]): string[] {
    const tempFilePaths: string[] = [];

    for (const filePath of filePaths) {
        const fileExtension = path.extname(filePath);
        if (fileExtension === '.asp' || fileExtension === '.dlv') {
            const content = removeTestBlocksFromFile(filePath);
            const tempDir = path.join(__dirname, 'out', 'output');
            const fileName = "temp.asp"
            const tempFilePath = path.join(tempDir, fileName);
            // Verifica se la directory temporanea esiste, altrimenti creala
            if (!fs.existsSync(tempDir)) {
               try {
                    fs.mkdirSync(tempDir, { recursive: true });
                    } catch (error) {
                        vscode.window.showErrorMessage(`Errore durante la creazione della directory temporanea ${tempDir}`);
                    }
            }
            try {
                    fs.writeFileSync(tempFilePath, content);
                    tempFilePaths.push(tempFilePath);
                } catch (error) {
                    console.error(`Errore durante la scrittura del file temporaneo ${tempFilePath}:`, error);
                }
        }else{
        vscode.window.showErrorMessage("Open file with extension .asp or .dlv")
        }
    }

    return tempFilePaths;
}

