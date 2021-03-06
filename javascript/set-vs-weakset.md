## `Set`和`WeakSet`
`Set`非重复元素集合
* `Set`成员唯一，无序，不重复
* `Set`健值和健名是一样的，健值是任意类型
 - 若是引用类型，地址不能重复
 - 若是基础类型，值不能重复
* `Set`可以遍历

WeakSet
* 健名是引用类型
* 健名是对象的弱引用，可以被垃圾回收
* 成员不可以遍历

## `Map`和`WeakMap`
`Map`是`Object`类型扩展
* 健值是任意类型
* 可以遍历

`WeakMap`
* `WeakMap`健名是一个非空(`null`)对象，解决了`Object`同名属性冲突问题`clash`。
* `WeakMap`健是弱引用对象，一旦除`Weakmap`之外的引用消失，会自动被回收，避免内存泄漏。
* 不能遍历

## 总结
* `set`内容不重复
* `set`和`map`健值是任意类型，`weakset`和`weakmap`健值是引用类型
* `weak*`都是弱引用，利于垃圾回收。

## 参考
[介绍下 Set、Map、WeakSet 和 WeakMap 的区别？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/6)
