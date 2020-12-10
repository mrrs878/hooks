/*
 * @Author: mrrs878
 * @Date: 2020-12-07 19:11:14
 * @LastEditTime: 2020-12-10 19:08:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\webpack.config.js
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    react: './src/react/index.ts',
    native: './src/native/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./src/dist', './src/dist-commonjs', './src/dist-esm']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions:['.js','.ts']
  },
  optimization: {
    minimize: true
  },
}