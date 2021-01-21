/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2020-12-09 18:57:00
 * @LastEditTime: 2021-01-21 23:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\test\Chain.test.ts
 */
import Chain, { NEXT_SUCCESSOR } from '../src/native/Chain';

interface UserInfoI {
  name: string;
  age: number;
  sex: string;
}

describe('test chain', () => {
  it('should be defined', () => {
    expect(Chain).toBeDefined();
  });

  it('pass none', () => {
    const tom: UserInfoI = { name: 'tom', age: 32, sex: 'female' };

    const setAge = new Chain((info: any, newInfo: any) => {
      if (info.name === 'tom') return NEXT_SUCCESSOR;
      tom.age = newInfo.age;
    });
    const setSex = new Chain((info: any, newInfo: any) => {
      if (info.name === 'tom') return NEXT_SUCCESSOR;
      tom.sex = newInfo.sex;
    });
    setAge.setNextSuccessor(setSex);
    const updateUserInfo = (info: UserInfoI, newInfo: UserInfoI) => setAge.passRequest(info, newInfo);
    updateUserInfo(tom, { name: 'tom', age: 23, sex: 'male' });
    expect(tom).toEqual(tom);
  });

  it('passthrough', () => {
    const tom: UserInfoI = { name: 'tom', age: 32, sex: 'female' };
    const setAge = new Chain((info: UserInfoI, newInfo: UserInfoI) => {
      if (info.name === 'tom') return NEXT_SUCCESSOR;
      tom.age = newInfo.age;
    });
    const setSex = new Chain((info: UserInfoI, newInfo: UserInfoI) => {
      if (info.name !== 'tom') return NEXT_SUCCESSOR;
      tom.sex = newInfo.sex;
    });
    setAge.setNextSuccessor(setSex);
    const updateUserInfo = (info: UserInfoI, newInfo: UserInfoI) => setAge.passRequest(info, newInfo);
    updateUserInfo(tom, { name: 'tom', age: 23, sex: 'male' });
    expect(tom).toEqual({ name: 'tom', age: 32, sex: 'male' });
  });

  it('pass some', () => {
    const tom: UserInfoI = { name: 'tom', age: 32, sex: 'female' };
    const setAge = new Chain((info: UserInfoI, newInfo: UserInfoI) => {
      if (info.name !== 'tom') return NEXT_SUCCESSOR;
      tom.age = newInfo.age;
    });
    const setSex = new Chain((info: UserInfoI, newInfo: UserInfoI) => {
      if (info.name !== 'tom') return NEXT_SUCCESSOR;
      tom.sex = newInfo.sex;
    });
    setAge.setNextSuccessor(setSex);
    const updateUserInfo = (info: UserInfoI, newInfo: UserInfoI) => setAge.passRequest(info, newInfo);
    updateUserInfo(tom, { name: 'tom', age: 23, sex: 'male' });
    expect(tom).toEqual({ name: 'tom', age: 23, sex: 'female' });
  });
});
