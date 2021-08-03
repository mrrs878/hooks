import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import useInputValue from '../src/reactHooks/useInputValue';

test('test useInputValue', () => {
  const App = () => {
    const [value, onChange] = useInputValue('hello');
    return (
      <input type="text" placeholder={value} value={value} onChange={onChange} />
    );
  };
  render(<App />);
  const element = screen.getByPlaceholderText('hello');
  expect(element.getAttribute('value')).toBe('hello');
  fireEvent.input(element, { target: { value: 'hello world' } });
  expect(element.getAttribute('value')).toBe('hello world');
});
