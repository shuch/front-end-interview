# 插入排序
```javascript

function insertSort(arr) {
  if (!arr || !arr.length) {
    return arr;
  }
  
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) { // 将arr[j]依次插入有序段中
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else { // 如果插入的值比上个值大，则插入下一个元素
        break;
      }
    }
  }
  
  return arr;
}

```

原理：
* 类似抓扑克牌，第一张有序，将抓到的牌依次和手上的牌比较
* 从第二个开始，依次和前面的数比较，插入到第一个比他大的前面

特点：
* 时间复杂度 O(n^2)
* 稳定排序
* 类似抓扑克牌，第一张有序，将抓到的牌依次和手上的牌比较
