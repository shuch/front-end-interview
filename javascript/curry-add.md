## add实现函数柯里化
```js
add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
```

## 递归
```js
function add() {
  var args = [].slice.call(arguments);
  
  var fn = function() {
    var fnArgs = [].slice.call(arguments);
    return fn.apply(null, args.concat(fnArgs));
  }

  fn.toString = function() {
    return args.reduce((a,b) => a + b);
  }
  
  return fn;
}


+add(1)
+add(1)(2)
+add(1)(2)(3)

+add(1)(2,3)
+add(1,2)(3)
+add(1,2,3)

```

## 参考
* [函数柯里化常见应用](https://www.cnblogs.com/yalong/p/10864594.html)
