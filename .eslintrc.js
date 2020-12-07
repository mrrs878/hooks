/*
 * @Author: your name
 * @Date: 2020-12-07 19:14:46
 * @LastEditTime: 2020-12-07 22:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\.eslintrc.js
 */
module.exports = {
  parserOptions: {
    sourceType: "module",
    createDefaultProgram: true,
    ecmaVersion: 11,
    experimentalObjectRestSpread: true,
    ecmaFeatures: {
      jsx: true,
    },
    parser: "babel-eslint",
  },
  plugins: [
    "react-hooks",
  ],
  extends: [
    "airbnb-base",
    "eslint:recommended",
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "linebreak-style": "off",
    "no-alert": "off",
    "react-hooks/rules-of-hooks": "error",
    "consistent-return": "off",
    "camelcase": "off",
    "quotes": ["error", "double"],
    "max-len": ["error", { code: 300 }],
    "no-bitwise": "off",
    "indent": ["error", 2],
    "no-unused-vars": "off",
  },
};
