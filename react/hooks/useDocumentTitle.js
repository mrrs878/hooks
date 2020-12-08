const { useEffect } = require("react");

/*
 * @Author: your name
 * @Date: 2020-12-08 11:01:28
 * @LastEditTime: 2020-12-08 11:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\react\hooks\useDocumentTitle.js
 */
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "hello world";
    };
  }, []);
}

export default useDocumentTitle;
