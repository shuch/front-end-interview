## 返回值
* `useCallback`用来缓存一个函数，`useMemo`用来缓存一个值
* `useCallback`用来返回一个函数，`useMemo`用来返回一个值

```js
function foo() {
  return 'bar';
}

var callback = useCallback(foo, []);
var memo = useMemo(foo, []);

callback;// function foo() { ... }
memo;// foo

callback();//foo
memo();// TypeError:memo is not function 

```

## 关系
```js
useCallback(fn, deps)
```
等价于
```js
useCallback(() => fn, deps)
```

## 参考
* [useCallback vs useMemo](https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60)
* [demo](https://codesandbox.io/s/usecallback-vs-usememo-oinmn)
