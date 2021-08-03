/*
 * @Author: your name
 * @Date: 2021-02-02 23:06:26
 * @LastEditTime: 2021-02-02 23:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useCookie.test.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import useCookie, { CookieOptionsT } from '../src/reactHooks/useCookie';

describe('test useCookie', () => {
  it('should be defined', () => {
    expect(useCookie).toBeDefined();
  });

  const setUp = (key: string, options: CookieOptionsT) => renderHook(() => {
    const [state, setState] = useCookie(key, options);
    return {
      state,
      setState,
    } as const;
  });

  it('getKey should work', () => {
    const COOKIE_KEY = 'test-key0';
    const hook = setUp(COOKIE_KEY, { defaultValue: 'A' });
    expect(hook.result.current.state).toEqual('A');
    act(() => {
      hook.result.current.setState('B');
    });
    expect(hook.result.current.state).toEqual('B');
  });

  it('should support null', () => {
    const COOKIE_KEY = 'test-key1';
    const hook = setUp(COOKIE_KEY, { defaultValue: 'null' });
    expect(hook.result.current.state).toEqual('null');
    act(() => {
      hook.result.current.setState(null);
    });
    expect(hook.result.current.state).toEqual(null);
  });

  it('should support empty string', () => {
    const COOKIE_KEY = 'test-key2';
    const hook = setUp(COOKIE_KEY, { defaultValue: 'hello' });
    expect(hook.result.current.state).toEqual('hello');
    act(() => {
      hook.result.current.setState('');
    });
    expect(hook.result.current.state).toEqual('');
  });

  it('should support function updater', () => {
    const COOKIE_KEY = 'test-key3';
    const hook = setUp(COOKIE_KEY, { defaultValue: () => 'hello' });
    expect(hook.result.current.state).toEqual('hello');
    act(() => {
      hook.result.current.setState((pre) => `${pre}, world`);
    });
    expect(hook.result.current.state).toEqual('hello, world');
  });
});
