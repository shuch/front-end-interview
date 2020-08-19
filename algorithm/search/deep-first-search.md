## 深度优先遍历
深度优先遍历属于树的纵向搜索。

二叉树先序遍历就是深度优先搜索的一种特殊情况。

非递归采用栈的形式实现

```js
function deepFirstSearch(root) {
  var results = [];
  var stack = [root];
  
  while (stack.length) {
    var curNode = stack.pop();
    results.push(curNode);

    var childs = curNode.children;
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


## 参考
[介绍下深度优先遍历和广度优先遍历，如何实现？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9)




