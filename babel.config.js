/*
 * @Author: your name
 * @Date: 2020-12-15 23:23:11
 * @LastEditTime: 2021-01-11 22:50:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ],
  ];
  const presets = ["@babel/preset-env", "@babel/preset-react"];

  return {
    plugins,
    presets,
  };
};
