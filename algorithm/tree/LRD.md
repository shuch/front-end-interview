## 后续遍历二叉树
二叉树结构
```js
var nodes = {
  node: 6,
  left: {
    node: 5, 
    left: { 
      node: 4 
    }, 
    right: { 
      node: 3 
    }
  },
  right: { 
    node: 2, 
    right: { 
      node: 1 
    } 
  }
}

```

后续遍历递归版
```js
function lrd(nodes, result = []) {
  nodes.left && lrd(nodes.left, result);
  nodes.right && lrd(nodes.right, result);
  result.push(nodes.node);
  return result;
}

lrd(nodes);// 4 3 5 1 2 6
```

## 参考
* [JavaScript 二叉树遍历专题：算法描述与实现](https://zhuanlan.zhihu.com/p/27307626)
