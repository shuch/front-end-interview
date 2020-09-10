## 回文
```js
function palidrome(str) {
  for (var i=0,j=str.length-1;i<=j;i++,j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

var s = '12321';
palidrome(s);
```

## 参考
[前端准备篇](http://v2ee.cn/article?id=60)
