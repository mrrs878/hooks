/*
* @Author: your name
* @Date: 2020-12-14 10:26:52
 * @LastEditTime: 2020-12-18 17:23:45
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\src\react\useImgLazyLoad.ts
*/
import { useCallback, useEffect, useState } from 'react';

interface ConfigI {
  imgUrl: string;
  autoLoad?: false;
  backupImgUrl?: string;
}

const useImgLazyLoad = (config: ConfigI): [boolean, string, string, () => void] => {
  const [load, setLoad] = useState(() => config.autoLoad || true);
  const [loading, setLoading] = useState(() => true);
  const [errMsg, setErrMsg] = useState(() => '');
  const [imgUrl, setImgUrl] = useState(() => (config.backupImgUrl || ''));

  const init = useCallback(() => {
    if (load) {
      const imgEle = new Image();
      imgEle.src = config.imgUrl;
      setLoading(true);
      imgEle.onload = () => {
        setLoading(false);
        setImgUrl('5555');
      };
      imgEle.onerror = (err) => {
        setLoading(false);
        setErrMsg(err.toString);
      };
    }
  }, [load]);

  const getImg = useCallback(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return [loading, imgUrl, errMsg, getImg];
};

export default useImgLazyLoad;
