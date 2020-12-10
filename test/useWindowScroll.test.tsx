/*
 * @Author: your name
 * @Date: 2020-12-08 11:18:31
 * @LastEditTime: 2020-12-10 11:13:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useWindowScroll.test.js
 */
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useWindowScroll from '../src/react/useWindowScroll';

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
