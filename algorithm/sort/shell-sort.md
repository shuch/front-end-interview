# 希尔排序：插入排序的优化

```javascript
function shellSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var len = arr.length;
  var gap = Math.floor(len / 2);
  while (gap !== 0) {
    for (var i = gap; i < len; i++) {
      for (var j = i - gap; j >= 0; j = j - gap) {
        if (arr[j + gap] < arr[j]) {
          var tmp = arr[j + gap];
          arr[j + gap] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    
    gap = Math.floor(gap / 2);
  }
  return arr;
}

```
