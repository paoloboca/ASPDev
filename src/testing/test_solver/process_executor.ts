
import { exec, execSync } from "child_process";
import * as path from 'path';
import { promisify } from "util";
import { OutputMapper } from "../dlv_output_parser/output_mapper";
import { Config } from "../common/config";
import { checkPathExist } from "../common/file_handler";
import { DlvOutputParser } from "../dlv_output_parser/dlv_output_parser";
import { Output } from "../dlv_output_parser/models/output";

export class ProcessExecutor {

    public static async exec_solver(InputFilePath: string , AllAnswerSets : boolean, solver : 'dlv2' | 'clingo'): Promise<Output> {
        let binPath="";

        switch (process.platform) {
            case "darwin":
                if(solver=="dlv2"){
                    binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_macos');
                }else{
                  
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_macos"');
                }
               break;
            case "win32":
                if(solver=="dlv2"){
                    binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_windows.exe');
                }else{
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_windows.exe');
                }
                
                break;
            default:
                if(solver=="dlv2"){
               
                   binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_linux');
                }else{
                
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_linux');
                }
                break;
        }
       
       
        if (!checkPathExist(binPath))
            throw new Error("Could not find the path to the exe")

        if (!checkPathExist(InputFilePath))
            throw new Error("Could not find the generated input file")

        // se sono in clingo aggiungo -V0
        // se servono run multiple aggiungo l'opzione in base al solver
        let exePath =binPath; 
        let defaultOpt = solver === 'clingo' ? "-V0 " : "--silent"
        let allAnswersets = AllAnswerSets == true ? (solver == "dlv2" ? "-n0 ": "--models=0 ") : ""
        let cmdString = `${exePath} ${InputFilePath} ${defaultOpt} ${allAnswersets}`; 
        let raw_output = (await this.execPromise(cmdString)).toString();

        if(raw_output.trim() === ""){
            return new Output([])
        }

        let output = solver == 'dlv2' ? raw_output : OutputMapper.clingoToDlv(raw_output);       

        return DlvOutputParser.parse(output);

    }

    static execPromise(cmdString : string){
        return new Promise<string>((resolve, reject) => {
            exec(cmdString, (error, stdout, stderr) => {
                resolve(stdout)
            })
        })
    }

}