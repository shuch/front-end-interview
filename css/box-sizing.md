## 盒模型

* `box-sizing: content-box`标准盒模型
* `box-sizing: border-box`怪异盒模型或IE盒模型

## 标准盒模型
```js
width = contentWidth
heigth = contentHeight
```

## 怪异盒模型
```js
width = contentWidth + padding * 2 + border * 2;
height = contentHeight + padding * 2 + border * 2;
```

注意：
`background`区域包括`width,padding,border`
