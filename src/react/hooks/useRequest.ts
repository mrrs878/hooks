/*
 * @Author: your name
 * @Date: 2020-12-08 22:50:25
 * @LastEditTime: 2020-12-08 22:57:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\react\hooks\useRequest.ts
 */
import { useEffect, useState, useCallback } from 'react';

function useRequest<P, T>(api: (params: P) => Promise<T>, params?: P, visible = true) :[boolean, T|undefined, (params?: P) => void, () => void] {
  const [res, setRes] = useState<T>();
  const [loading, setLoading] = useState(() => false);
  const [newParams, setNewParams] = useState(() => params);
  const [autoFetch, setAutoFetch] = useState(() => visible);

  const fetch = useCallback(async () => {
    if (!newParams && autoFetch === false) return;
    if (autoFetch) {
      const newNewParams = (newParams || {}) as P;
      setLoading(true);
      const tmp = await api(newNewParams);
      setRes(tmp);
      setLoading(false);
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
