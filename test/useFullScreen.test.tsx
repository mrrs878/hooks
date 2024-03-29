/*
 * @Author: your name
 * @Date: 2021-01-07 22:44:09
 * @LastEditTime: 2021-01-11 22:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useFullScreen.test.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import screenfull from 'screenfull';
import useFullScreen from '../src/reactHooks/useFullScreen';

describe('test useFullScreen', () => {
  it('should be defined', () => {
    expect(useFullScreen).toBeDefined();
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
    const onFull = jest.fn();
    const onExitFull = jest.fn();

    const { result } = renderHook(() => useFullScreen(target, { onFull, onExitFull }));
    const [state, { setFull }, isEnableFullScreen] = result.current;

    if (!isEnableFullScreen) return;

    act(() => {
      setFull();
    });
    expect(onFull).toBeCalled();
  });
});
