/*
 * @Author: mrrs878@foxmail.com
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
export function after(origin: Function, fn: Function, ...fnArgs: Array<any>) {
  return (...originArgs: Array<any>) => {
    origin(...originArgs);
    return fn(...fnArgs);
  };
}

/**
 * @description: 返回一个在给定函数执行之前执行特定函数的函数
 * @param  origin 原函数
 * @param  fn 需要执行的函数
 * @param  fnArgs 需要执行的函数的参数
 * @return 包裹后的函数
 */
export function before(origin: Function, fn: Function, ...fnArgs: Array<any>) {
  return (...originArgs: Array<any>) => {
    const res = fn(...fnArgs);
    origin(...originArgs);
    return res;
  };
}
