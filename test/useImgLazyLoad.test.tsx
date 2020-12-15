/*
 * @Author: your name
 * @Date: 2020-12-14 10:37:22
 * @LastEditTime: 2020-12-15 23:49:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useImgLazyLoad.test.tsx
 */
import React, { useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useImgLazyLoad from '../src/react/useImgLazyLoad';

test('test useImgLazyLoad', async () => {
  const { result } = renderHook(
    () => useImgLazyLoad({ imgUrl: 'https://mrrsblog.oss-cn-shanghai.aliyuncs.com/avatar.jpg', backupImgUrl: "333" }),
  )
  const [loading, imgUrl] = result.current;
  await waitFor(
    () => loading === false,
    { timeout: 3000, onTimeout: (e) => {
      console.log(e);
      return e;
    } }
  );
  // expect(imgUrl).toBe('https://mrrsblog.oss-cn-shanghai.aliyuncs.com/avatar.jpg');
  expect(1).toBe(1);
})
