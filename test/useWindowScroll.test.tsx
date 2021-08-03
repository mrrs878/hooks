/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-08 11:18:31
 * @LastEditTime: 2021-08-03 19:45:56
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: d:\Data\Personal\MyPro\js_library\test\useWindowScroll.test.tsx
 */
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useWindowScroll from '../src/reactHooks/useWindowScroll';

test('test useWindowScroll', () => {
  const App = () => {
    const [tip, setTip] = useState('');
    useWindowScroll(() => {
      setTip('scrolling...');
    });
    return (
      <div>
        <span>{tip}</span>
      </div>
    );
  };
  render(<App />);
  fireEvent.scroll(global.window.document);
  const element = screen.getByText('scrolling...');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});
