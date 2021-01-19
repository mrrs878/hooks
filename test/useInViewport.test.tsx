/*
 * @Author: your name
 * @Date: 2021-01-19 22:10:25
 * @LastEditTime: 2021-01-19 22:29:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useInViewport.tsx
 */
import { renderHook } from '@testing-library/react-hooks';
import useInViewport from '../src/react/useInViewport';

describe('test useInViewport', () => {
  it('should be defined', () => {
    expect(useInViewport).toBeDefined();
  });

  it('with argument', () => {
    const { result } = renderHook(() => useInViewport(document.documentElement));
    expect(result.current).toEqual(false);
  });
});
