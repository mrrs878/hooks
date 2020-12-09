/*
 * @Author: mrrs878
 * @Date: 2020-12-09 18:51:21
 * @LastEditTime: 2020-12-09 19:19:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\native\Chain.ts
 */
const NEXT_SUCCESSOR = 'nextSuccessor';

class Chain {
  private fn: Function;

  private successor: Chain|null;

  constructor(fn: Function) {
    this.fn = fn;
    this.successor = null;
  }

  setNextSuccessor(successor: Chain) {
    this.successor = successor;
  }

  passRequest(...args: Array<any>): any {
    const res = this.fn.call(this, ...args);
    if (res === NEXT_SUCCESSOR) {
      return this.successor?.passRequest.call(this.successor, ...args);
    }
    return res;
  }
}

export { NEXT_SUCCESSOR };
export default Chain;
