/*
 * @Author: your name
 * @Date: 2020-12-09 16:49:26
 * @LastEditTime: 2020-12-09 18:37:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\native\aop.ts
 */
/**
 * @description: 返回一个在给定函数执行之后执行特定函数的函数
 * @param  origin 原函数
 * @param  fn 需要执行的函数
 * @param  fnArgs 需要执行的函数的参数
 * @return 包裹后的函数
 */
export function after(origin, fn) {
    var fnArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fnArgs[_i - 2] = arguments[_i];
    }
    return function () {
        var originArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            originArgs[_i] = arguments[_i];
        }
        origin.apply(void 0, originArgs);
        return fn.apply(void 0, fnArgs);
    };
}
/**
 * @description: 返回一个在给定函数执行之前执行特定函数的函数
 * @param  origin 原函数
 * @param  fn 需要执行的函数
 * @param  fnArgs 需要执行的函数的参数
 * @return 包裹后的函数
 */
export function before(origin, fn) {
    var fnArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fnArgs[_i - 2] = arguments[_i];
    }
    return function () {
        var originArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            originArgs[_i] = arguments[_i];
        }
        var res = fn.apply(void 0, fnArgs);
        origin.apply(void 0, originArgs);
        return res;
    };
}
