"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const path_1 = __importDefault(require("path"));
class Config {
    static getExePath(solver) {
        let so = () => process.platform.includes('darwin') ? 'macos' : process.platform.includes('win32') ? 'windows.exe' : 'linux';
        return path_1.default.resolve(`./bin/${solver}_${so()}`);
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map