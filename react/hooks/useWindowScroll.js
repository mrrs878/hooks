const { useEffect } = require("react");

/*
 * @Author: your name
 * @Date: 2020-12-08 11:16:32
 * @LastEditTime: 2020-12-08 11:17:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\react\hooks\useWindowScroll.js
 */
function useWindowScroll(scrollHandler) {
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
}

export default useWindowScroll;
