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
exports.ProcessExecutor = void 0;
const child_process_1 = require("child_process");
const path = __importStar(require("path"));
const output_mapper_1 = require("../dlv_output_parser/output_mapper");
const file_handler_1 = require("../common/file_handler");
const dlv_output_parser_1 = require("../dlv_output_parser/dlv_output_parser");
const output_1 = require("../dlv_output_parser/models/output");
class ProcessExecutor {
    static async exec_solver(InputFilePath, AllAnswerSets, solver) {
        let binPath = "";
        switch (process.platform) {
            case "darwin":
                if (solver == "dlv2") {
                    binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_macos');
                }
                else {
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_macos"');
                }
                break;
            case "win32":
                if (solver == "dlv2") {
                    binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_windows.exe');
                }
                else {
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_windows.exe');
                }
                break;
            default:
                if (solver == "dlv2") {
                    binPath = path.resolve(__dirname, '..', 'bin', 'dlv2_linux');
                }
                else {
                    binPath = path.resolve(__dirname, '..', 'bin', 'clingo_linux');
                }
                break;
        }
        if (!(0, file_handler_1.checkPathExist)(binPath))
            throw new Error("Could not find the path to the exe");
        if (!(0, file_handler_1.checkPathExist)(InputFilePath))
            throw new Error("Could not find the generated input file");
        // se sono in clingo aggiungo -V0
        // se servono run multiple aggiungo l'opzione in base al solver
        let exePath = binPath;
        let defaultOpt = solver === 'clingo' ? "-V0 " : "--silent";
        let allAnswersets = AllAnswerSets == true ? (solver == "dlv2" ? "-n0 " : "--models=0 ") : "";
        let cmdString = `${exePath} ${InputFilePath} ${defaultOpt} ${allAnswersets}`;
        let raw_output = (await this.execPromise(cmdString)).toString();
        if (raw_output.trim() === "") {
            return new output_1.Output([]);
        }
        let output = solver == 'dlv2' ? raw_output : output_mapper_1.OutputMapper.clingoToDlv(raw_output);
        return dlv_output_parser_1.DlvOutputParser.parse(output);
    }
    static execPromise(cmdString) {
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(cmdString, (error, stdout, stderr) => {
                resolve(stdout);
            });
        });
    }
}
exports.ProcessExecutor = ProcessExecutor;
//# sourceMappingURL=process_executor.js.map