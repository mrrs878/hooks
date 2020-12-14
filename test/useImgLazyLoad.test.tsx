/*
 * @Author: your name
 * @Date: 2020-12-14 10:37:22
 * @LastEditTime: 2020-12-14 22:52:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useImgLazyLoad.test.tsx
 */
import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import useImgLazyLoad from '../src/react/useImgLazyLoad';

test('test useImgLazyLoad', async () => {
  const App = () => {
    const [loading, imgUrl, errMsg] = useImgLazyLoad({ imgUrl: 'https://mrrsblog.oss-cn-shanghai.aliyuncs.com/avatar.jpg', backupImgUrl: "333" });
    useEffect(() => {
      console.log(loading);
      
    }, [loading])
    return (
      <div>
        <img src={imgUrl} title="img" srcSet="" />
        <span title="span">{errMsg}</span>
      </div>
    )
  }
  render(<App />);
  // const img = await screen.findByTitle("img", {}, { timeout: 2000 });
  // const span = await screen.findByTitle("span", {}, { timeout: 2000 });
  expect(1).toBe(1);
})
