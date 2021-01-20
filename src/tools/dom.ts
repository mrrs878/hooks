/*
* @Author: mrrs878@foxmail.com
* @Date: 2020-12-31 12:48:41
 * @LastEditTime: 2021-01-20 23:12:44
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: /jsLibrary/src/tools/dom.ts
*/
import { MutableRefObject } from 'react';

export type BasicTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

type TargetElement = HTMLElement | Element | Document | Window;

export function getTargetElement(
  target?: BasicTarget<TargetElement>,
  defaultElement?: TargetElement,
): TargetElement | undefined | null {
  if (!target) return defaultElement;
  let targetElement: TargetElement | undefined | null;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
