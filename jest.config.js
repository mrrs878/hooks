/*
 * @Author: your name
 * @Date: 2020-12-07 22:45:48
 * @LastEditTime: 2020-12-08 13:58:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\jest.config.js
 */
module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/test/**/*.(spec|test).ts?(x)"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js",
  ],
};
