"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputMapper = void 0;
class OutputMapper {
    static clingoToDlv(raw) {
        raw = raw.replace("UNSATISFIABLE", "INCOHERENT");
        raw = raw.replace("SATISFIABLE", "");
        raw = raw.replace("OPTIMUM FOUND", "OPTIMUM");
        raw = raw.replaceAll("Optimization:", "COST");
        let costs = raw.match(/COST\s((?:\d+ *)*)/g);
        costs?.forEach(cost => {
            let raw_costs = cost.trim();
            let clingo_costs = raw_costs.split(' ');
            clingo_costs.shift();
            let dlv_costs = clingo_costs.map((w, i) => `${w}@${clingo_costs.length - i}`);
            raw = raw.replace(cost, `COST ${dlv_costs.join(' ')}`);
        });
        let lines = raw.split('\n').map(line => line.trim());
        lines = lines.map(line => {
            let match = line.match(/^(?:[a-z]\w*\(\w+(?:,\w+)*\) *)+$/);
            return match ? `{${line.replaceAll(' ', ', ')}}` : line;
        });
        return lines.join('\n');
    }
}
exports.OutputMapper = OutputMapper;
//# sourceMappingURL=output_mapper.js.map