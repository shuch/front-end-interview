## `reduce` 实现
```js
Array.prototype.reduce2 = function(fn, initVal) {
  var emptyInitVal = initVal === undefined;
  if (this.length === 0) {
    if (emptyInitVal) {
      throw new Error('reduce without initval');
      return;
    }
    return initVal;
  }
  var pre = emptyInitVal ? this[0] : initVal;
  var index = emptyInitVal ? 1 : 0;
  for (var i = index; i < this.length; i++) {
    pre = fn(pre, this[i]);
  }

  return pre;
}

var arr = [];
arr.reduce2(()=>{});// error:reduce without initval
arr = [1,2,3];
arr.reduce2((pre,cur)=>pre+cur);
arr.reduce2((pre,cur)=>pre+cur, 4);

```

## 参考
[JavaScript高阶函数 reduce方法的应用和原理分析](https://blog.csdn.net/u014634869/article/details/77985694)
