<!--
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-15 23:23:11
 * @LastEditTime: 2020-12-29 22:44:32
 * @LastEditors: mrrs878@foxmail.com
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\README.md
-->

# jsLibrary

![Node.js CI](https://github.com/mrrs878/jsLibrary/workflows/Node.js%20CI/badge.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/mrrs878/jsLibrary)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/mrrs878/jsLibrary/dev/rollup/master)

轮子，自用js函数库

## native

- aop.js，包含`before`和`after`函数，分别目标函数之前/之后执行函数

- Chain.js，职责链模式

- PublishSubscribe.js， 发布订阅模式

## react

- useRequest.js，发送异步请求hook，功能包括自动执行/返回请求状态/重复执行

- useDocumentTitle.js，更改`document.title`hook

- useInputValue.js，`input`双向绑定

- useWindowScroll.js，`window.scroll`事件发生时执行目标函数

## 单元测试

```js
describe('xxx', () => {
  // 测试函数是否定义
  it('should be defined', () => {
    expect(xxx).toBeDefined();
  });
  // 测试函数是否被调用
  it('should be called', () => {
    expect(xxx).toBeCalled();
  });

});
```
