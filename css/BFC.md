## `BFC`
块级格式上下文（`Block Format Context`）

#### 作用
* 阻止被浮动元素覆盖 [demo](https://4gb7w.csb.app/)
* 包含浮动子元素（浮动子元素撑开容器高度）[demo](https://4gb7w.csb.app/contain-float.html)
* 阻止相邻块级元素`margin`重叠 [demo](https://4gb7w.csb.app/margin-overlaping.html)

#### 生成
* `html`根元素
* `position: absolute`，`position: fixed`
* `display`
  - `display: flex`
  - `display: inline-block`
  - `display: table`
  - `display: grid`
  - `display: flow-root`
    
* `overflow`不是默认的`visible`属性
* `contain`
  - `layout`
  - `strict`
  - `paint`
