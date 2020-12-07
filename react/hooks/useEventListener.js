/*
* @Author: your name
* @Date: 2020-12-07 22:13:09
 * @LastEditTime: 2020-12-07 22:14:38
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\react\hooks\useEventListener.js
*/
const { useEffect } = require("react");

const useEventListener = (eventType, listener) => {
  useEffect(() => {
    document.addEventListener(eventType, listener);
    return () => {
      document.removeEventListener(eventType, listener);
    };
  });
};

export default useEventListener;
