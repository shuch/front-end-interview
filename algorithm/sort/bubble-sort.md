# 冒泡排序

```javascript

function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var isBubble = false;
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isBubule = true;
      }
    }
    
    if (!isBubble) {
      break;
    }
  }
   
  return arr;
}

const arr = [5,4,3,2,1];
console.log(bubbleSort(arr));// 1,2,3,4,5

```
原理
* 每一轮循环确定一个最大值
* 从头开始，相邻元素比较
* 相等元素比较时不会交互顺序，稳定排序
* 外层循环控制比较次数（每轮结束减一），内层比较大小

改进：
* 在一轮排序完成后，没有元素位置交换，可以认为是有序的，提前退出循环
* 记录每轮交换的位置，作为下次比较的终点，减少已经排好序的冒泡。

```js
function bubbleSort(arr) {
  var i = arr.length - 1;
  while (i > 0) {
    var pos = 0;
    for (var j = 0;j < i; j++) {
      if (arr[j] > arr[j+1]) {
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
        pos = j;
      }
    }
    i = pos;
  }
  return arr;
}

```

特点：
* 平均时间复杂度 O(n<sup>2</sup>)
    - 最好情况有序，只需要一次冒泡，时间复杂度O(n)
    - 最坏情况由大到小，要进行 n 次冒泡，时间复杂度O(n<sup>2</sup>)
* 稳定排序
