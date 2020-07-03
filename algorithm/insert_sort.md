# 插入排序
```javascript

function insertSort(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 1; i < len; i++) {// 无序区
    var temp = arr[i];
    for (var j = i - 1; j >= 0; j--) {// 有序区：从大往小比较
      if (arr[j] > temp) { // 找到比要插入值大的元素，交换顺序
        arr[j+1] = arr[j];
      } else { // 如果插入的值比上个值大，证明有序，退出循环
        break;
      }
    }
    arr[j] = temp;
  }
  
  return arr;
}

```

原理：
* 从有序序列的末尾开始，依次与前一个元素比较，插入到比他大的元素后面
* 如果有相等的元素，不会交换顺序，是稳定排序

特点：
* 时间复杂度 O(n<sup>2</sup>)
* 稳定排序

> 类似抓扑克牌，第一张有序，将抓到的牌依次和手上的牌比较

参考：
  [JS实现插入排序](https://segmentfault.com/a/1190000015489767)
