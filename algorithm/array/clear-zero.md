## 题目
将二维数组0元素所在的行和列都变为0

示例：
```js
var arr = [
    [1,2],
    [3,0],
];
clearZero(arr);
// [1,0]
// [0,0]
```

## 实现
```js
function clearZero(arr) { 
  var row = [];
  var col = [];
  for (var i=0;i<arr.length;i++) {
    for (var j=0;j<arr[0].length;j++) {
      if (arr[i][j] === 0) {
        if (row.indexOf(i) === -1) {
          row.push(i);
        }
        if (col.indexOf(j) === -1) {
          col.push(j);
        }      
      }
    }
  }
  
  for (var i=0;i<arr.length;i++) {
    for (var j=0;j<arr[0].length;j++) {
      if (row.indexOf(i) !== -1 || col.indexOf(j) !== -1) {
         arr[i][j] = 0;
      }
    }
  }
  
  return arr;
}
```

