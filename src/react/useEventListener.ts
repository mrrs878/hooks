import { KeyPairKeyObjectResult } from 'crypto';
import { useEffect } from 'react';

/*
 * @Author: mrrs878
 * @Date: 2020-12-18 18:27:45
 * @LastEditTime: 2020-12-18 23:37:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\useEventListener.ts
 */
interface PropsI<K extends keyof WindowEventMap> {
  event: K;
  handler: (this: Window, ev: WindowEventMap[K]) => any;
  target?: (() => HTMLElement) | HTMLElement | React.MutableRefObject<any> | Window | Document;
  once?: boolean;
}

function useEventListener(props: PropsI<any>) {
  const target = props.target || window;

  useEffect(() => {
    const { event, handler } = props;
    if (target instanceof Window) {
      window.addEventListener(event, handler);
    } else if (target instanceof HTMLElement) {
      target.addEventListener(event, handler);
    } else if (target instanceof Document) {
      document.addEventListener(event, handler);
    }
  });
}

export default useEventListener;
