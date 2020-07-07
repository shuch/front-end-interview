## 浏览器性能指标
* 白屏时间
* 首屏时间

## 白屏时间
从浏览器地址栏输入网址回车，到页面第一个元素显示的时间。
<br>
一般认为是页面`head`加载完成，或开始解析`body`为白屏结束时间
```html
<html>
  <head>
    <script>window.pageStart = new Date()</script>
    <link rel="stylesheet" href="style.css" />
    <script>
      window.firstPaint = new Date();
      var whiteTime = pageStart - firstPaint;
    </script>
  </head>
  ...
</html>
```

## 首屏时间
从浏览器地址栏输入网址回车，到第一屏展示完成的时间。
```html
<html>
  <head>
    <script>window.pageStart = new Date()</script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div>第一屏</div>
    <script>
      window.firstPaint = new Date();
      var fistPageTime = pageStart - firstPaint;
    </script>
    <div>第二屏</div>
    <div>第三屏</div>
  </body>
</html>

```
