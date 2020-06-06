# 选择排序

```javascript

function selectSort(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {    
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    var temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  
  return arr;
}

```

原理：
* 外层依次每一个元素，内层找出剩下的元素中的最小值，并和前一个值交换

特点：
* 时间复杂度 O(n²)
* 不稳定排序
