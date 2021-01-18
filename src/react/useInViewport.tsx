/*
 * @Author: your name
 * @Date: 2021-01-18 22:49:48
 * @LastEditTime: 2021-01-18 23:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\useInViewport.tsx
 */
import { useEffect, useState } from 'react';
import 'intersection-observer';
import { BasicTarget, getTargetElement } from '../tools/dom';

type InViewport = boolean | undefined;

function isInViewport(el: HTMLElement): InViewport {
  if (!el) {
    return undefined;
  }

  const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
  const rect = el.getBoundingClientRect();

  if (rect) {
    const {
      top, bottom, left, right,
    } = rect;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }

  return false;
}

function useInViewport(target: BasicTarget): InViewport {
  const [inViewPort, setInViewport] = useState<InViewport>(() => {
    const el = getTargetElement(target);
    return isInViewport(el as HTMLElement);
  });

  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInViewport(entry.isIntersecting);
      });
    });

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return inViewPort;
}

export default useInViewport;
