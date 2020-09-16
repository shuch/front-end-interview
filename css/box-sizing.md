## 盒模型

* `box-sizing: content-box`标准盒模型
* `box-sizing: border-box`怪异盒模型或IE盒模型

## 标准盒模型
```js
width = contentWidth
```
元素宽高等于实际内容宽高

## 怪异盒模型
盒子宽度
```js
width = contentWidth + padding * 2 + border * 2 + margin * 2
```
元素宽高等于实际内容宽高，内边距，边框宽度之和

注意：
`background`区域包括`width,padding,border`

## 参考
* [CSS-可视化格式模型](https://www.zhiqiang2726.com/2019/03/23/CSS-%E5%8F%AF%E8%A7%86%E5%8C%96%E6%A0%BC%E5%BC%8F%E6%A8%A1%E5%9E%8B/#more)
