import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import useRequest from '../src/react/useRequest';

interface UserInfoI {
  name: string;
  age: number;
}

const USER_INFOS: any = {
  1: {
    name: 'Tom', age: 23,
  },
  2: {
    name: 'Jerry', age: 24,
  },
  3: {
    name: 'Green', age: 25,
  },
};

const GET_USER_INFO = (): Promise<UserInfoI> => new Promise((resolve) => setTimeout(resolve, 0, USER_INFOS[1]));
const GET_USER_INFO_BY_ID = (id: string): Promise<UserInfoI> => new Promise((resolve) => setTimeout(resolve, 0, USER_INFOS[id]));

test('test useRequest auto fetch without params', async () => {
  const App = () => {
    const [loading, userInfo] = useRequest<any, UserInfoI>(GET_USER_INFO);
    return (
      <div>
        <span>{loading}</span>
        <span>
          {userInfo?.name}
          :
          {userInfo?.age}
        </span>
      </div>
    );
  };
  render(<App />);
  const element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});

test('test useRequest trigger manual without params', async () => {
  const App = () => {
    const [, userInfo, getUserInfo] = useRequest<any, UserInfoI>(GET_USER_INFO, false);
    return (
      <div>
        <span>
          {userInfo?.name}
          :
          {userInfo?.age}
        </span>
        <button type="button" onClick={() => getUserInfo()}>click me</button>
      </div>
    );
  };
  render(<App />);
  const btn = screen.getByText('click me');
  fireEvent.click(btn);
  const element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});

test('test useRequest auto fetch with params', async () => {
  const App = () => {
    const [, userInfo] = useRequest(GET_USER_INFO_BY_ID, true, '1');
    return (
      <div>
        <span>
          {userInfo?.name}
          :
          {userInfo?.age}
        </span>
      </div>
    );
  };
  render(<App />);
  const element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});

test('test useRequest trigger manual with params', async () => {
  const App = () => {
    const [, userInfo, getUserInfo] = useRequest(GET_USER_INFO_BY_ID, false);
    return (
      <div>
        <span>
          {userInfo?.name}
          :
          {userInfo?.age}
        </span>
        <button type="button" onClick={() => getUserInfo('1')}>click me</button>
      </div>
    );
  };
  render(<App />);
  const btn = screen.getByText('click me');
  fireEvent.click(btn);
  const element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});

test('test useRequest trigger manual & reGet Function & new params', async () => {
  const App = () => {
    const [, userInfo, getUserInfo, reGetUserInfo] = useRequest<string, UserInfoI>(GET_USER_INFO_BY_ID, true, '1');
    return (
      <div>
        <span>
          {userInfo?.name}
          :
          {userInfo?.age}
        </span>
        <button type="button" onClick={() => getUserInfo('2')}>click me</button>
        <button type="button" onClick={() => reGetUserInfo()}>click me again</button>
      </div>
    );
  };
  render(<App />);
  const btn1 = screen.getByText('click me');
  const btn2 = screen.getByText('click me again');
  // test manual trigger
  let element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
  // test reGet Function
  fireEvent.click(btn2);
  element = await screen.findByText('Tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
  // test manual trigger with new params
  fireEvent.click(btn1);
  element = await screen.findByText('Jerry:24');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});
