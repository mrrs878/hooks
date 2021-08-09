/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-10 19:11:10
 * @LastEditTime: 2021-08-09 19:26:00
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: d:\Data\Personal\MyPro\js_library\rollup.config.js
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import ts from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const tsconfig = path.resolve(__dirname, 'tsconfig.json');

export default [
  {
    input: './src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      resolve({ extensions, rootDir: './src' }),
      commonjs(),
      ts({ tsconfig }),
    ],
    external: ['react']
  }
]