/*
 * @Author: your name
 * @Date: 2021-01-04 22:12:19
 * @LastEditTime: 2021-01-04 22:41:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useClickAway.test.ts
 */
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useClickAway from '../src/react/useClickAway';

describe('test useClickAway', () => {
  it('should be defined', () => {
    expect(useClickAway).toBeDefined();
  })

  let container: HTMLDivElement;
  let container1: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    container1 = document.createElement('div');
    container1.setAttribute('id', 'ele');
    document.body.appendChild(container);
    document.body.appendChild(container1);
  });

  afterEach(() => {
    document.body.removeChild(container);
    document.body.removeChild(container1);
  });

  it('test on dom optional', async () => {
    let state = 0;
    const { rerender, unmount } = renderHook((dom: any) =>
      useClickAway(() => {
        state += 1;
      }, dom),
    );

    rerender(() => container);
    fireEvent.click(container)
    expect(state).toEqual(0);
    fireEvent.click(document.body);
    expect(state).toEqual(1);

    rerender(() => container1);
    fireEvent.click(container1);
    expect(state).toEqual(1);
    fireEvent.click(document.body);
    expect(state).toEqual(2);

    unmount();
    fireEvent.click(document.body);
    expect(state).toEqual(2);
  });

  it('should works on multiple target', async () => {
    let state = 0;

    const { rerender, unmount } = renderHook((dom: any) => 
      useClickAway(() => {
        state += 1;
      }, dom),
    );

      rerender([container, container1]);
      fireEvent.click(container);
      expect(state).toEqual(0);
      fireEvent.click(container1);
      expect(state).toEqual(0);
      fireEvent.click(document.body);
      expect(state).toEqual(1);

      unmount();
      fireEvent.click(document.body);
      expect(state).toEqual(1);
  })
})