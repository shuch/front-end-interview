## 广度优先搜索
树的横向搜索（层次遍历），采用队列的形式实现


```js
function breadthFirstSearch(node) {
  var nodes = [];
  var queue = [node];
  
  while (queue.length) {
    var curNode = queue.shift();
    nodes.push(curNode);
  
    var childs = curNode.children;
    if (childs && childs.length) {
      for (var i = 0; i < childs.length; i++) {
        queue.push(childs[i]);
      }
    }
  }
  
  return nodes;
}

```

## 参考
[介绍下深度优先遍历和广度优先遍历，如何实现？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)
