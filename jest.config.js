/*
 * @Author: your name
 * @Date: 2020-12-07 22:45:48
 * @LastEditTime: 2020-12-07 23:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\jest.config.js
 */
module.exports = {
  testMatch: ["<rootDir>/test/**/*.(spec|test).js?(x)"],
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
