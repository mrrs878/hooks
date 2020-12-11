/*
 * @Author: your name
 * @Date: 2020-12-10 19:11:10
 * @LastEditTime: 2020-12-11 11:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\rollup.config.js
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import ts from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      dir: 'dist/iife',
      name: 'MJSLibrary',
      format: 'iife',
    },
  ],
  plugins: [
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    resolve({ 
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    commonjs(),
    ts({ tsconfig: path.resolve(__dirname, 'tsconfig.json') }),
  ],
  external: ['react']
}