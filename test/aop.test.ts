/*
 * @Author: mrrs878
 * @Date: 2020-12-09 16:50:08
 * @LastEditTime: 2020-12-09 18:37:29
 * @LastEditors: mrrs878
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\aop.test.ts
 */
import { before, after } from '../src/native/aop';

test('test aop:before', () => {
  const tom: any = {};
  function setName(name: string) {
    tom.name = name;
  }
  function setAgeAndSex(age: number, sex: string) {
    tom.age = age;
    tom.sex = sex;
  }

  setName('tom');
  expect(tom).toEqual({ name: 'tom' });
  const fn = before(setName, setAgeAndSex, 21, 'male');
  fn('tom');
  expect(tom).toEqual({ name: 'tom', age: 21, sex: 'male' });
});

test('test aop:after', () => {
  const tom: any = {};
  function setName(name: string) {
    tom.name = name;
  }
  function setAgeAndSex(age: number, sex: string) {
    tom.age = age;
    tom.sex = sex;
  }

  const fn = after(setName, setAgeAndSex, 21, 'female');
  fn('tom');
  expect(tom).toEqual({ name: 'tom', age: 21, sex: 'female' });
});
