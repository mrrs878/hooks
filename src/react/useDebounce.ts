/*
 * @Author: your name
 * @Date: 2020-12-21 18:01:32
 * @LastEditTime: 2020-12-23 15:13:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\useDebounce.ts
 */
import { debounce } from 'lodash';
import { useMemo, useRef } from 'react';

type Fn = (...args: any) => any;

interface PropsI {
  wait?: number;
  leading?: boolean;
  maxWait?: number;
  trailing?: boolean;
}
function useDebounce<T extends Fn>(fn: T, options?: PropsI): [T, () => void, () => void] {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;
  const wait = options?.wait || 1000;
  const debounced = useMemo(
    () => debounce<T>(((...args: Array<[]>) => fn(...args)) as T, wait, options),
    [],
  );
  return [
    (debounced as unknown) as T,
    debounced.cancel,
    debounced.flush,
  ];
}

export default useDebounce;
