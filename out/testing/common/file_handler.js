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
exports.getDirContent = exports.isPathFile = exports.isPathDirectory = exports.removeFile = exports.writeFile = exports.readFile = exports.checkPathExist = void 0;
const fs = __importStar(require("fs"));
function checkPathExist(filepath) {
    return fs.existsSync(filepath);
}
exports.checkPathExist = checkPathExist;
function readFile(filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf-8' });
}
exports.readFile = readFile;
function writeFile(filePath, data, flag) {
    return fs.writeFileSync(filePath, data, { encoding: 'utf-8', flag: flag });
}
exports.writeFile = writeFile;
function removeFile(filePath) {
    return fs.unlinkSync(filePath);
}
exports.removeFile = removeFile;
function isPathDirectory(path) {
    return fs.lstatSync(path).isDirectory();
}
exports.isPathDirectory = isPathDirectory;
function isPathFile(path) {
    return fs.lstatSync(path).isFile();
}
exports.isPathFile = isPathFile;
function getDirContent(path) {
    if (!isPathDirectory(path))
        throw new Error(`${path} is not a directory`);
    return fs.readdirSync(path);
}
exports.getDirContent = getDirContent;
//# sourceMappingURL=file_handler.js.map