## 爬楼梯问题
> 有一段楼梯台阶有11级台阶，以友友的脚力一步最多只能跨3级，请问友友登上这段楼梯有多少种不同的走法？

## 分析
1. 共一级台阶，只有一种跨法
2. 共二级台阶，有两种，第一步跨一级，或第一步跨两级
3. 共三级台阶，共四种
  * 第一步跨一级，第二步跨二级
  * 第一步跨二级，第二步跨一级
4. 共四级台阶，共7种
  * 第一步跨一级，还剩三级，根据第三步，共4种方法
  * 第二步跨二级，还剩二级，根据第二步，有2种方法
  * 第二步跨三级，还剩一级，根据第一步，有1种方法
  
...

得到递推公式：
`a(n) = a(n-1) + a(n-2) + a(n-3)`

## 递归实现
```js
function climbStairs(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  
  if (n === 3) {
    return 4;
  }
  
  return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
}
```

## 迭代实现
```js
function climbStairs() {
  var f1 = 1;
  var f2 = 2;
  var f3 = 4;
  var result = 0;
  for (var i = 4; i <= 11; i++) {
    result = f1 + f2 + f3;
    f1 = f2;
    f2 = f3;
    f3 = result;
  }
  return result;
}
```

## 参考
[跨台阶](https://www.nowcoder.com/questionTerminal/db9a4e02316f4844803f39cd9a85420d)
