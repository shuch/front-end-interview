## 广度优先搜索
树的横向搜索


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
