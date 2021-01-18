/*
* @Author: mrrs878@foxmail.com
* @Date: 2020-12-08 11:01:28
 * @LastEditTime: 2020-12-08 13:38:40
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\react\hooks\useDocumentTitle.js
*/
import { useEffect } from 'react';

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'hello world';
    };
  }, [title]);
}

export default useDocumentTitle;
