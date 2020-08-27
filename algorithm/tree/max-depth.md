## 二叉树最大高度
```js
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  var leftDepth = maxDepth(root.left);
  var rightDepth = maxDepth(root.right);
  var depth = leftDepth > rightDepth ? leftDepth : rightDepth;
  return depth + 1;
}

var tree = {
    value: 3,
    left: {
        value: 9,
        left: null,
        right: null,
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: null,
            right: null,
        },
        right: {
            value: 7,
            left: null,
            right: null,
        },
    },
};

maxDepth(tree)// 3
```

## 参考
[104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
