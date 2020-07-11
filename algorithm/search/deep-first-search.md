## 深度优先遍历
深度优先遍历就是先序遍历

非递归法

```js
function deepFirstSearch(root) {
  var results = [];
  var stack = [root];
  
  while (stack.length) {
    var curNode = stack.pop();
    var childs = curNode.children;
    results.push(curNode);
    
    if (childs && childs.length) {
      for (var i = childs.length; i >= 0; i--) {
        stack.push(childs[i]);
      }
    }
  }
  
  return results;
}


```

递归法
```js
function deepFirstSearch(node, nodes = []) {
  if (node !== null) {
    nodes.push(node);
    var childs = node.children;
    for (var i = 0; i < childs.length; i++) {
      deepFirstSearch(childs[i], nodes);
    }
  }

  return nodes;
}

```







