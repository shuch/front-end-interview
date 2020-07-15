## `BFC`
块级格式上下文（`Block Format Context`）

#### 作用
* 清除浮动`float`
* 防止`margin`重叠

#### 生成
* `html`根元素
* `position: absolute`，`position: fixed`
* `display`
  - `flex`
  - `inline-block`
  - `display: table`
  - `display: grid`
  - `display: flow-root`
    
* `overflow`不是默认的`visible`属性
* `contain`
  - `layout`
  - `strict`
  - `paint`
