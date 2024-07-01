"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OsPortability = void 0;
class OsPortability {
    static instance = null;
    static TO_WIN_ENDL = /(\n)|(\r\n)/gi;
    static TO_LINUX_MAC_ENDL = /\r\n/gi;
    static TO_WIN_FILE_SEP = /\//gi;
    static os_name = '';
    constructor() {
        if (process.platform === 'win32') {
            OsPortability.os_name = 'win32';
        }
        else if (process.platform === 'linux') {
            OsPortability.os_name = 'linux';
        }
        else if (process.platform === 'darwin') {
            OsPortability.os_name = 'darwin';
        }
    }
    static get_instance() {
        if (this.instance === null) {
            this.instance = new OsPortability();
        }
        return this.instance;
    }
    convert_endl(to_convert) {
        if (OsPortability.os_name === 'win32') {
            to_convert = to_convert.replace(OsPortability.TO_WIN_ENDL, '\r\n');
        }
        else if (OsPortability.os_name === 'linux' || OsPortability.os_name === 'darwin') {
            to_convert = to_convert.replace(OsPortability.TO_LINUX_MAC_ENDL, '\n');
        }
        return to_convert;
    }
    convert_file_sep(to_convert) {
        if (OsPortability.os_name === 'win32') {
            to_convert = to_convert.replace(OsPortability.TO_WIN_FILE_SEP, '\\');
        }
        else if (OsPortability.os_name === 'linux' || OsPortability.os_name === 'darwin') {
            for (let i = 0; i < to_convert.length; ++i) {
                if (to_convert.charAt(i) === '\\') {
                    to_convert = to_convert.substring(0, i) + '/' + to_convert.substring(i + 1, to_convert.length);
                }
            }
        }
        return to_convert;
    }
    get_endl() {
        if (OsPortability.os_name === 'win32') {
            return '\r\n';
        }
        return '\n';
    }
    static set_platform(my_platform) {
        OsPortability.os_name = my_platform;
    }
}
exports.OsPortability = OsPortability;
//# sourceMappingURL=portability_implementation.js.map