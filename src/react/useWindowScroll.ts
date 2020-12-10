const { useEffect } = require('react');

/*
 * @Author: your name
 * @Date: 2020-12-08 11:16:32
 * @LastEditTime: 2020-12-09 15:08:58
 * @LastEditors: mrrs878
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\react\hooks\useWindowScroll.js
 */
function useWindowScroll(scrollHandler: () => void) {
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
}

export default useWindowScroll;
