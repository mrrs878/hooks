var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
 * @Author: mrrs878
 * @Date: 2020-12-09 18:51:21
 * @LastEditTime: 2020-12-09 19:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\native\Chain.ts
 */
var NEXT_SUCCESSOR = 'nextSuccessor';
var Chain = /** @class */ (function () {
    function Chain(fn) {
        this.fn = fn;
        this.successor = null;
    }
    Chain.prototype.setNextSuccessor = function (successor) {
        this.successor = successor;
    };
    Chain.prototype.passRequest = function () {
        var _a, _b;
        var _c;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var res = (_a = this.fn).call.apply(_a, __spreadArrays([this], args));
        if (res === NEXT_SUCCESSOR) {
            return (_c = this.successor) === null || _c === void 0 ? void 0 : (_b = _c.passRequest).call.apply(_b, __spreadArrays([this.successor], args));
        }
        return res;
    };
    return Chain;
}());
export { NEXT_SUCCESSOR };
export default Chain;
