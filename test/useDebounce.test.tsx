/*
 * @Author: your name
 * @Date: 2020-12-21 18:56:37
 * @LastEditTime: 2020-12-21 19:36:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useDebounce.test.tsx
 */
import { renderHook,act } from '@testing-library/react-hooks';
import { sleep } from '../src/tools';
import useDebounce from '../src/react/useDebounce';

describe('test useDebounce', () => {
  const fn = (param: number) => param += 1;
  test('run', async () => {
    let cnt = 0;
    const { result } = renderHook(() => useDebounce(fn));
    const [run] = result.current;
  
    await act(async () => {
      run(cnt);
      run(cnt);
      run(cnt);
      expect(cnt).toBe(0);
      await sleep(1000);
      expect(cnt).toBe(1);
    })
  }),
  test('options', async () => {
    let cnt = 0;
    const { result } = renderHook(() => useDebounce(fn, { wait: 2000 }));
    const [run] = result.current;

    run(cnt);
    run(cnt);
    run(cnt);
    expect(cnt).toBe(0);
    await sleep(1000);
    expect(cnt).toBe(0);
    await sleep(1100);
    expect(cnt).toBe(1);
  })
})