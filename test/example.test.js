/*
 * @Author: your name
 * @Date: 2020-12-07 22:53:01
 * @LastEditTime: 2020-12-08 11:00:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\example.test.js
 */
import React, { useCallback, useRef, useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

test("test example", async () => {
  const App = () => {
    const btnR = useRef(null);
    const [tip, setTip] = useState("");
    const onBtnClick = useCallback(() => {
      setTip("hello world");
    }, []);
    return (<div>
      <span>{tip}</span>
      <button onClick={onBtnClick}>click me</button>
    </div>);
  };
  render(<App />);
  const btn = screen.getByText("click me");
  fireEvent.click(btn);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
