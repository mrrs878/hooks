/*
* @Author: your name
* @Date: 2021-01-09 22:35:24
 * @LastEditTime: 2021-01-09 22:42:40
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\src\react\useFocus.ts
*/
import { useCallback, useEffect, useState } from 'react';
import { BasicTarget, getTargetElement } from '../tools/dom';

interface OptionsI {
  onFocus?: () => void;
  onBlur?: () => void;
}
const useFocus = (target: BasicTarget, options: OptionsI) => {
  const { onFocus, onBlur } = options || {};
  const [state, setState] = useState(false);

  const onElementFocus = useCallback(() => {
    if (onFocus) onFocus();
    setState(true);
  }, [onFocus]);
  const onElementBlur = useCallback(() => {
    if (onBlur) onBlur();
    setState(false);
  }, [onBlur]);

  useEffect(() => {
    const element = getTargetElement(target);
    element?.addEventListener('focus', onElementFocus);
    element?.addEventListener('blur', onElementBlur);
    return () => {
      element?.removeEventListener('focus', onElementFocus);
      element?.removeEventListener('blur', onElementBlur);
    };
  }, [target, onElementBlur, onElementFocus]);

  return state;
};

export default useFocus;
