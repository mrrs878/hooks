/*
 * @Author: your name
 * @Date: 2020-12-07 22:53:01
 * @LastEditTime: 2020-12-07 23:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\useEventListener.test.js
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../react/components/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
