/*
 * @Author: your name
 * @Date: 2020-12-09 22:55:06
 * @LastEditTime: 2020-12-09 23:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsLibrary\src\native\PublishSubscribe.ts
 */
interface PublishSubscribeI {
  readonly events: { [propName: string]: Array<Function> };
  maxWatchers: number;
  on(event: string, handler: Function): void;
  addEventListener(event: string, handler: Function): void;
  once(event: string, handler: Function): void;
  removeHandler(event: string, handler: Function): void;
  removeAllHandlers(event: string): void;
  setMaxWatchers(maxWatchers: number): void;
  emit(event: string, ...rest: Array<any>): void;
}

const PublishSubscribe: PublishSubscribeI = {
  events: {},
  maxWatchers: 10,
  on(event: string, handler: Function) {
    if (this.events[event]) {
      if (this.events[event].length >= this.maxWatchers) {
        console.error(`${event} watchers too much`);
        return;
      }
      this.events[event].push(handler);
    } else this.events[event] = [handler];
  },
  addEventListener(event: string, handler: Function) {
    this.on(event, handler);
  },
  once(event: string, handler: Function) {
    const wrapper = (...rest: Array<any>) => {
      handler.apply(this, rest);
      this.removeHandler(event, wrapper);
    };
    this.on(event, wrapper);
  },
  removeHandler(event: string, handler: Function) {
    const events = this.events[event];
    if (!events) return;
    this.events[event] = events.filter((item) => item !== handler);
  },
  removeAllHandlers(event: string) {
    this.events[event] = [];
  },
  setMaxWatchers(maxWatchers: number) {
    this.maxWatchers = maxWatchers;
  },
  emit(event: string, ...rest: Array<any>) {
    const events = this.events[event];
    if (!events) return;
    events.forEach((item) => item.apply(this, rest));
  },
};

export default PublishSubscribe;
