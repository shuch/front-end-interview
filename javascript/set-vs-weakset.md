## `Set`和`WeakSet`
Set
* `Set`成员唯一，无序，不重复
* `Set`健值和健名是一样的
* `Set`可以遍历

WeakSet
* 成员都是对象的弱引用，可以被垃圾回收
* 成员不可以遍历

## `Map`和`WeakMap`
`Map`
* 是键值对集合
* 可以遍历

`WeakMap`
* `WeakMap`健名是一个非空(null)对象，解决了`Object`同名属性冲突问题`clash`。
* `WeakMap`健是弱引用对象，一旦除`Weakmap`之外的引用消失，会自动被回收，避免内存泄漏。
* 不能遍历

## 总结
* `weak*`都是弱引用，处理内存泄漏问题。
* `weak*`由于随时可能被回收，都不能遍历。
