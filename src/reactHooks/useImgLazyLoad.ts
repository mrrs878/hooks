/*
* @Author: mrrs878@foxmail.com
* @Date: 2020-12-14 10:26:52
 * @LastEditTime: 2021-08-03 19:32:23
 * @LastEditors: mrrs878@foxmail.com
* @Description: In User Settings Edit
 * @FilePath: d:\Data\Personal\MyPro\js_library\src\react\useImgLazyLoad.ts
*/
import { useCallback, useEffect, useState } from 'react';

export interface IUseImgLazyLoadConfig {
  imgUrl: string;
  autoLoad?: false;
  backupImgUrl?: string;
}

const useImgLazyLoad = (config: IUseImgLazyLoadConfig): [boolean, string, string, () => void] => {
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
  }, [config.imgUrl, load]);

  const getImg = useCallback(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return [loading, imgUrl, errMsg, getImg];
};

export default useImgLazyLoad;
