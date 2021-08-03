/*
 * @Author: your name
 * @Date: 2021-01-09 22:41:26
 * @LastEditTime: 2021-01-11 22:49:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useFocus.test.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useFocus from '../src/reactHooks/useFocus';

describe('test useFocus', () => {
  it('should be defined', () => {
    expect(useFocus).toBeDefined();
  });

  let target: HTMLDivElement;

  beforeEach(() => {
    target = document.createElement('div');
    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
  });

  it('callback', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { result, unmount } = renderHook(() => useFocus(target, {
      onFocus,
      onBlur,
    }));

    act(() => {
      fireEvent.focus(target);
    });
    expect(onFocus).toBeCalled();
    expect(result.current).toBe(true);

    act(() => {
      fireEvent.blur(target);
    });
    expect(onBlur).toBeCalled();
    expect(result.current).toBe(false);

    unmount();
    act(() => {
      fireEvent.focus(target);
    });
    expect(onFocus).toBeCalledTimes(1);
    expect(result.current).toBe(false);
  });
});
