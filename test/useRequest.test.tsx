import { render, screen } from '@testing-library/react';
import React from 'react';
import useRequest from '../src/react/hooks/useRequest';

interface UserInfoI {
  name: string;
  age: number;
}

const GET_USER_INFO = (): Promise<UserInfoI> => new Promise((resolve) => setTimeout(resolve, 0, { name: 'tom', age: 23 }));

test('test useRequest auto fetch', async () => {
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
  const element = await screen.findByText('tom:23');
  expect(element).toBeInstanceOf(HTMLSpanElement);
});
