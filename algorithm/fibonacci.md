## 斐波那契数列
1,1,2,3,5,8,13...
数列前两项为1，从第三项开始，每项的值等于前两项之和，求第n个数的值
```js
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  
  return fib(n - 2) + fib(n - 1);
}
```
