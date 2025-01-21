## fiber 说明
- 当 `react` 节点渲染时，会构建`virtual-dom`树，通过`diff`算法实现对比，更新UI。
- `fiber` `react 16`发布的，针对 `diff` 过程的调度算法优化，异步更新UI，不阻塞用户响应，提升UI流畅度。

## 实现
- 采用链表的方式存储 `v-dom`替换原来递归的数据结构
- 将耗时长的任务，拆分成时间片执行
- 通过 `requestIdleCallback` 或 `react polyfill` 实现在主线程空闲的时候去更新dom。
- 在更新过程中，根据任务的优先级来执行渲染


```js
function performWorkUntilDeadline() {
  // 获取当前时间
  const currentTime = performance.now();

  // 如果当前时间 - 上次执行时间 超过了 sliceTime，说明需要中断
  if (currentTime - lastTime >= sliceTime) {
    // 中断任务，等待主线程空闲时再继续
    requestIdleCallback(performWorkUntilDeadline);
  } else {
    // 执行任务的一个分片
    const work = getNextUnitOfWork();
    if (work) {
      performUnitOfWork(work); // 执行当前的 Fiber 节点任务
    }

    // 递归调用，继续处理下一分片
    performWorkUntilDeadline();
  }

  // 更新上次执行时间
  lastTime = performance.now();
}
```

## 对比
原来是同步更新，在fiber中是异步更新dom

## 引用
* [React Fiber 的作用和原理](https://cloud.tencent.com/developer/article/1882296)
* [理解 React Fiber](https://segmentfault.com/a/1190000039682751)
