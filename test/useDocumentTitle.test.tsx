/*
* @Author: mrrs878@foxmail.com
* @Date: 2020-12-08 11:02:49
 * @LastEditTime: 2021-01-21 23:05:06
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \jsLibrary\test\useDocumentTitle.test.js
*/
import { render } from '@testing-library/react';
import React from 'react';
import useDocumentTitle from '../src/react/useDocumentTitle';

describe('test useDocumentTitle', () => {
  it('should be defined', () => {
    expect(useDocumentTitle).toBeDefined();
  });

  it('with parameter', () => {
    const App = () => {
      useDocumentTitle('hello mrrs');
      return <div />;
    };
    render(<App />);
    expect(global.window.document.title).toBe('hello mrrs');
  });
});
