/*
* @Author: your name
* @Date: 2020-12-14 10:26:52
 * @LastEditTime: 2020-12-14 14:42:53
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\src\react\useImgLazyLoad.ts
*/
import { useCallback, useState } from 'react';

interface ConfigI {
  imgUrl: string;
  backupImgUrl?: string;
}

const useImgLazyLoad = (config: ConfigI): [boolean, string, string] => {
  const [loading, setLoading] = useState(() => true);
  const [errMsg, setErrMsg] = useState(() => '');
  const [imgUrl, setImgUrl] = useState(() => (config.backupImgUrl || ''));

  const imgEle = new Image();
  imgEle.src = config.imgUrl;
  imgEle.addEventListener('load', () => {
    setLoading(false);
    setImgUrl(config.imgUrl);
  });
  imgEle.onerror = (err) => {
    setLoading(false);
    setErrMsg(err.toString);
  };

  return [loading, imgUrl, errMsg];
};

export default useImgLazyLoad;
