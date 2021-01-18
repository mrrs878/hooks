/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-07 19:14:46
 * @LastEditTime: 2021-01-18 23:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 11
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "linebreak-style": "off",
    "no-alert": "off",
    "react-hooks/rules-of-hooks": "error",
    "consistent-return": "off",
    "camelcase": "off",
    "max-len": ["error", { code: 300 }],
    "no-bitwise": "off",
    "indent": ["error", 2],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.spec.ts"]}]
  },
};
