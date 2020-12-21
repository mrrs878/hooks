/*
 * @Author: your name
 * @Date: 2020-12-21 18:01:32
 * @LastEditTime: 2020-12-21 19:06:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\useDebounce.ts
 */
import _, { DebouncedFunc } from 'lodash';

const { debounce } = _;

type Fn = (...args: any) => any;

interface PropsI {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}
function useDebounce<T extends Fn>(fn: T, options?: PropsI): [T, () => void, () => void] {
  const wait = options?.wait || 1000;
  const debounced = debounce<T>(fn, wait, options);
  return [debounced as unknown as T, debounced.cancel, debounced.flush];
}

export default useDebounce;
