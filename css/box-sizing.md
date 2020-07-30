## 盒模型

* `box-sizing: content-box`标准盒模型
* `box-sizing: border-box`怪异盒模型或IE盒模型

## 标准盒模型
```js
width = contentWidth
heigth = contentHeight
```
元素宽高等于实际内容宽高

## 怪异盒模型
```js
width = contentWidth + padding * 2 + border * 2;
height = contentHeight + padding * 2 + border * 2;
```
元素宽高等于实际内容宽高，内边距，边框宽度之和

注意：
`background`区域包括`width,padding,border`
