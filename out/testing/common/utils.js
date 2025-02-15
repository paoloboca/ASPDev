"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultExtrasForSolver = exports.throwExpression = exports.arrayContainsAll = exports.fillMissingValues = exports.areArrayEqualNoOrder = exports.areObjectEqual = void 0;
function areObjectEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
exports.areObjectEqual = areObjectEqual;
//consider two array equals if they have the same elements but not necessarily in the same order
function areArrayEqualNoOrder(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.find((obj2) => areObjectEqual(arr1[i], obj2)))
            return false;
    }
    return true;
}
exports.areArrayEqualNoOrder = areArrayEqualNoOrder;
function fillMissingValues(source, target) {
    let retVal = [...source];
    for (let i = 0; i < target.length; i++) {
        const objTarget = target[i];
        if (!retVal.find((objSource) => areObjectEqual(objSource, objTarget)))
            retVal.push(objTarget);
    }
    return retVal;
}
exports.fillMissingValues = fillMissingValues;
function arrayContainsAll(array, values) {
    return values.every(val => array.find(obj => areObjectEqual(obj, val)));
}
exports.arrayContainsAll = arrayContainsAll;
function throwExpression(errorMessage) {
    throw new Error(errorMessage);
}
exports.throwExpression = throwExpression;
function addDefaultExtrasForSolver(extras, solver) {
    let def = solver === 'dlv2' ? ['silent'] : ['V0'];
    return new Array(new Set(extras.concat(def))).map(o => `-${o}`).join(' ');
}
exports.addDefaultExtrasForSolver = addDefaultExtrasForSolver;
//# sourceMappingURL=utils.js.map