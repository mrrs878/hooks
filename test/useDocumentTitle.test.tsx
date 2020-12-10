/*
* @Author: your name
* @Date: 2020-12-08 11:02:49
 * @LastEditTime: 2020-12-10 11:13:35
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\test\useDocumentTitle.test.js
*/
import { render } from '@testing-library/react';
import React from 'react';
import useDocumentTitle from '../src/react/useDocumentTitle';

test('test useDocumentTitle', () => {
  const App = () => {
    useDocumentTitle('hello mrrs');
    return <div />;
  };
  render(<App />);
  expect(global.window.document.title).toBe('hello mrrs');
});
