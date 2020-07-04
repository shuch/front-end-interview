## 自定义`iterator`
实现自定义迭代器，自动生成递增的数组序列

```js
function makeRangeIterator(start = 0, end = Infinity) {
  var index = start;
  const it = {
    next: function() {
      if (index < end) {
        return {
          value: index++,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    }
  };
  return it;
}

var rangeIterator = makeRangeIterator(1, 10);
rangeIterator.next(); // { value: 1, done: false }
rangeIterator.next(); // { value: 2, done: false }
...
rangeIterator.next(); // { value: 10, done: false }
rangeIterator.next(); // { value: undefined, done: true }
```

## `generator`迭代器实现
```js
function* makeRangeGenerator(start = 0, end = Infinity) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

var rangeGen = makeRangeGenerator(1, 10);
rangeGen.next(); // { value: 1, done: false }
rangeGen.next(); // { value: 2, done: false }
...
rangeGen.next(); // { value: 10, done: false }
rangeGen.next(); // { value: undefined, done: true }


```
