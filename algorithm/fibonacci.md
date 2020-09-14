## 斐波那契数列
`0,1,1,2,3,5,8,13...`

`f(0)=1`

`f(1)=1`

`f(n)=f(n-1)+f(n-2)`

## 递归方式
```js
function fib(n) {
  if (n <= 1) {
    return n;
  }
  
  return fib(n - 2) + fib(n - 1);
}
```
缺点，重复计算
`f(5) = f(4) + f(3)`
`f(4) = f(3) + f(2)`
`f(3)`会计算两次

## 尾递归优化
当n很大，每一层函数执行都会创建参数，到时内存溢出，浏览器卡死。
解决方式，在函数参数中计算值
```js
function fib(n, n1 = 0, n2 = 1) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return n2;
  }

  return fib(n - 1, n2, n1 + n2);
}
```

## 循环
```js
function fib(n) {
  var n1 = 0;
  var n2 = 1;
  var tmp;

  for (var i = 0; i < n; i++) {
    tmp = n1;
    n1 = n2;
    n2 = tmp + n2;
  }

  return n1;
}
```

## 参考
* [写斐波那契数列的几种方法](https://www.cnblogs.com/superlizhao/p/11603158.html)
* [斐波那契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)
