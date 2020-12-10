/*
* @Author: your name
* @Date: 2020-12-08 11:01:28
 * @LastEditTime: 2020-12-08 13:38:40
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\react\hooks\useDocumentTitle.js
*/
import { useEffect } from 'react';
function useDocumentTitle(title) {
    useEffect(function () {
        document.title = title;
        return function () {
            document.title = 'hello world';
        };
    }, []);
}
export default useDocumentTitle;
