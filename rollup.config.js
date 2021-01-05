/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-10 19:11:10
 * @LastEditTime: 2020-12-11 11:30:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\rollup.config.js
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
      dir: 'dist/esm',
      format: 'esm',
    },
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      resolve({ extensions }),
      commonjs(),
      ts({ tsconfig }),
    ],
    external: ['react']
  },
  {
    input: './src/index.ts',
    output: {
      dir: 'dist/umd',
      format: 'umd',
      name: 'MJSLibrary',
      globals: {
        react: 'React'
      }
    },
    plugins: [
      resolve({ 
        extensions
      }),
      commonjs(),
      ts({ 
        tsconfigOverride: { compilerOptions: { declaration: false } }, 
        tsconfig
      }),
    ],
    external: ['react']
  }
]