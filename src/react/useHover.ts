/*
* @Author: mrrs878@foxmail.com
* @Date: 2021-01-05 22:41:58
 * @LastEditTime: 2021-01-05 23:06:47
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\src\react\useHover.ts
*/
import { useCallback, useEffect, useState } from "react"
import { BasicTarget, getTargetElement } from "../tools/dom";
interface PropsI {
  onEnter?: () => void;
  onLeave?: () => void;
}
function useHover(target: BasicTarget, options: PropsI) {
  const { onEnter, onLeave } = options || {};
  const [state, setState] = useState(false);

  const onTargetMouseEnter = useCallback(() => {
    onEnter && onEnter();
    setState(true);
  }, [onEnter]);
  const onTargetMouseLeave = useCallback(() => {
    onLeave && onLeave();
    setState(false);
  }, [onLeave])

  useEffect(() => {
    const targetEle = getTargetElement(target);
    targetEle?.addEventListener('mouseenter', onTargetMouseEnter);
    targetEle?.addEventListener('mouseleave', onTargetMouseLeave);
    return () => {
      targetEle?.removeEventListener('mouseenter', onTargetMouseEnter);
      targetEle?.removeEventListener('mouseleave', onTargetMouseLeave);
    }
  }, [getTargetElement, target, onTargetMouseEnter, onTargetMouseLeave])

  return state;
}

export default useHover;