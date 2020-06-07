# 插入排序
```javascript

function insertSort(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 1; i < len; i++) {// 提取未排序的元素
    for (var j = i; j > 0; j--) {// 和已排序的比较
      if (arr[j] < arr[j-1]) { // 找到比a[i]大的元素，插入到他前面
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else { // 如果插入的值比上个值大，顺序不变，提取下一个未排序元素
        break;
      }
    }
  }
  
  return arr;
}

```

原理：
* 从有序序列的末尾开始，依次与前一个元素比较，插入到比他大的元素后面
* 如果有相等的元素，不会交换顺序，是稳定排序

> 类似抓扑克牌，第一张有序，将抓到的牌依次和手上的牌比较

特点：
* 时间复杂度 O(n^2)
* 稳定排序
