/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-07 23:09:08
 * @LastEditTime: 2020-12-08 10:33:59
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
