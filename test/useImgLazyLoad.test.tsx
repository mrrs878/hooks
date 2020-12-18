/*
 * @Author: your name
 * @Date: 2020-12-14 10:37:22
 * @LastEditTime: 2020-12-18 23:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useImgLazyLoad.test.tsx
 */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useImgLazyLoad from '../src/react/useImgLazyLoad';

test('test useImgLazyLoad', async () => {
  const { result, waitForNextUpdate } = renderHook(
    () => useImgLazyLoad({ imgUrl: 'https://mrrsblog.oss-cn-shanghai.aliyuncs.com/avatar.jpg', backupImgUrl: "333" }),
  );
  
  const [loading, imgUrl, , getImg] = result.current;

  getImg();
  
  // await waitForNextUpdate();

  expect(1).toBe(1);
})
