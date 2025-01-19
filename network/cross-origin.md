> 跨域方式
## CORS 跨域资源共享
cross origin resource sharing
通过在服务端设置 HTTP 响应头控制跨域
```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST
Access-Control-Allow-Headers: Content-Type
```
* Access-Control-Allow-Origin 控制访问域名
* Access-Control-Allow-Methods 控制访问HTTP方法
* Access-Control-Allow-Headers 控制自定义请求头

## JSONP 跨域
相比 cors，jsonp支持支get请求
通过 <script> 标签，动态设置 src 属性实现跨域
```javascript
function jsonp(req) {
  const calbackName = 'callback' + Date.now();
  script.src = req.url + '?callback=' + callbackName;
  return new Promise((resolve) => {
     const script = document.createElement('script');
     window[calbackName] = function(json)  {
        resolve(json);
     }
  });
}
// 使用
jsonp({
  url: 'https://api.com/get',
}).then(res => {
  console.log(res);
});
```
