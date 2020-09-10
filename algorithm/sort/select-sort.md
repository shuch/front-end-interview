## 选择排序

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
    // 当前元素不是最小的，则交换
    if (min !== i) {
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;    
    }
  }
  
  return arr;
}


var arr = [5,4,5,2,1];
console.log(selectSort(arr));
// [1, 2, 4, 5, 5]
```

## 原理：
* 把第一个没有排序过的元素设置为最小值
* 遍历每个未排序的元素
* 如果比现在最小值小，将其更变为新的最小值
* 将最小值和第一个没有排序的值互换

## 特点：
* 时间复杂度 O(n<sup>2</sup>)
* 相等元素相对位置改变，是不稳定排序

## 参考
[选择排序](https://visualgo.net/zh/sorting)
