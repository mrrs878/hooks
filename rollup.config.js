/*
 * @Author: your name
 * @Date: 2020-12-10 19:11:10
 * @LastEditTime: 2020-12-10 23:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\rollup.config.js
 */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import ts from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default {
  input: {
    'native': './src/native/index.ts',
    'react': './src/react/index.ts'
  },
  output:{
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve({ 
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    commonjs(),
    ts({ tsconfig: path.resolve(__dirname, 'tsconfig.json') }),
    terser(),
  ],
  external: ['react']
}