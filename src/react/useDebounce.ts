/*
 * @Author: your name
 * @Date: 2020-12-21 18:01:32
 * @LastEditTime: 2020-12-21 22:46:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\useDebounce.ts
 */
import _, { DebouncedFunc } from 'lodash';
import { useMemo, useRef } from 'react';

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
  const debounced = debounce<T>(((...args: Array<[]>) => fn(...args)) as T, wait, options);
  return [(debounced as unknown) as T, debounced.cancel, debounced.flush];
}

export default useDebounce;
