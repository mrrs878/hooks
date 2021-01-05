/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-01-05 22:47:57
 * @LastEditTime: 2021-01-05 23:21:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useHover.test.ts
 */
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useHover from '../src/react/useHover';

describe('test usHover', () => {
  it('should be defined', () => {
    expect(useHover).toBeDefined();
  });

  let target: HTMLDivElement;

  beforeEach(() => {
    target = document.createElement('div');
    target.innerText = '';
    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
  })

  it('hover', async () => {
    const { unmount } = renderHook(() => useHover(target, {
      onEnter() {
        target.innerText = 'enter'
      },
      onLeave() {
        target.innerText = 'leave'
      },
    }));

    expect(target.innerText).toEqual('');
    fireEvent.mouseEnter(target);
    expect(target.innerText).toEqual('enter');
    fireEvent.mouseLeave(target);
    expect(target.innerText).toEqual('leave');

    unmount();
    fireEvent.mouseEnter(target);
    expect(target.innerText).toEqual('leave');
  })
})