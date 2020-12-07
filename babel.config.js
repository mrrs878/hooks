/*
 * @Author: your name
 * @Date: 2020-12-07 23:09:08
 * @LastEditTime: 2020-12-07 23:10:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  const plugins = [];
  const presets = ["@babel/preset-env", "@babel/preset-react"];

  return {
    plugins,
    presets,
  };
};
