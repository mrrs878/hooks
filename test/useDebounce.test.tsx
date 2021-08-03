/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-21 18:56:37
 * @LastEditTime: 2021-01-11 22:48:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useDebounce.test.tsx
 */
import { renderHook, act } from '@testing-library/react-hooks';
import { sleep } from '../src/tools';
import useDebounce from '../src/reactHooks/useDebounce';

describe('test useDebounce', () => {
  const fn = (param: number) => param + 1;
  test('run', async () => {
    let cnt = 0;
    const { result } = renderHook(() => useDebounce(fn));
    const [run] = result.current;

    await act(async () => {
      cnt = run(cnt) || 0;
      expect(cnt).toBe(0);
      await sleep(1100);
      cnt = run(cnt);
      expect(cnt).toBe(1);
    });
  });
  test('options', async () => {
    let cnt = 0;
    const { result } = renderHook(() => useDebounce(fn, { wait: 2000 }));
    const [run] = result.current;

    await act(async () => {
      cnt = run(cnt) || 0;
      expect(cnt).toBe(0);
      await sleep(1000);
      cnt = run(cnt) || 0;
      expect(cnt).toBe(0);
      await sleep(2100);
      cnt = run(cnt) || 0;
      expect(cnt).toBe(1);
    });
  });
});
