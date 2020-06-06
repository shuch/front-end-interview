# 冒泡排序

```javascript

function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
   
  return arr;
}

```
test

```
const arr = [5,4,3,2,1];
console.log(bubbleSort(arr));// 1,2,3,4,5
```

时间复杂度 O(n^2)
稳定排序
