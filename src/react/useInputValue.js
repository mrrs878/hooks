/*
 * @Author: your name
 * @Date: 2020-12-08 16:55:08
 * @LastEditTime: 2020-12-08 17:01:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\hooks\useInputValue.ts
 */
import { useCallback, useState } from 'react';
function useInputValue(initValue) {
    var _a = useState(initValue), value = _a[0], setValue = _a[1];
    var onChange = useCallback(function (e) {
        setValue(e.currentTarget.value);
    }, []);
    return [value, onChange, setValue];
}
export default useInputValue;
