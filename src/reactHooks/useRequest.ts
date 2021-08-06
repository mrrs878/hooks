/*
 * @Author: mrrs878
 * @Date: 2020-12-08 22:50:25
 * @LastEditTime: 2021-08-05 10:12:33
 * @LastEditors: mrrs878@foxmail.com
 * @Description: useRequest hook
 * @FilePath: d:\Data\Personal\MyPro\js_library\src\reactHooks\useRequest.ts
 */
import { useEffect, useState, useCallback } from 'react';

/**
 * @param api 发送请求的函数
 * @param visible 是否自动触发
 * @param params 请求的参数
 * @returns 是否在请求中
 * @returns 接口返回值
 * @returns 手动发送请求
 * @returns 重新发送请求(使用上一次的参数)
*/
function useRequest<P, T>(api: (params: P) => Promise<T>, visible = true, params?: P)
  : [boolean, T|undefined, (params?: P) => void, () => void] {
  const [res, setRes] = useState<T>();
  const [loading, setLoading] = useState(() => false);
  const [newParams, setNewParams] = useState(() => params);
  const [autoFetch, setAutoFetch] = useState(() => visible);

  const fetch = useCallback(async () => {
    if (autoFetch) {
      try {
        const param = (newParams || {}) as P;
        setLoading(true);
        const tmp = await api(param);
        setRes(tmp);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setRes(e);
      }
    }
  }, [api, autoFetch, newParams]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const doFetch = useCallback((rest = null) => {
    setNewParams(rest);
    setAutoFetch(true);
  }, []);

  return [loading, res, doFetch, fetch];
}

export default useRequest;
