## setState 执行
* `react`更新`state`之前会调用，生命周期函数和合成事件，`setState`通过队列形式存放，将多个状态合并以便于批量更新。
* 在自定义事件和`event loop`中是同步执行。
