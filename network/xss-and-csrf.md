## `XSS`
* 跨站脚本攻击（`Cross Site Script`）区别于`css`(`Cascade Style Sheet`)
* 通过输入注入`script`，运行恶意代码

来源：
* `URL`
* `ugc(input, textarea)`
* `refer`
* `cookie`
* 第三方链接

防范：
* 对输入字符转义
* 设置内容安全策略 `Content-Security-Policy: script-src 'self' https://trusted-scripts.com`
* 设置`x-xss-protection: 1;mode=block`
* 设置`httpOnly`，禁止`js`操作`cookie` 例如 `Set-Cookie: sessionId=abc123; HttpOnly`
* 设置`secure`，确保在`cookie` 通过 `https`连接发送，防止`http`请求在传输中被拦截或篡改。`Set-Cookie: sessionId=abc123; Secure`

## `CSRF`
* 跨站请求伪造（`cross site request forgery`）
* 在登录网站A的情况下，拿着A网站的`cookie`，访问恶意网站B，冒充A伪造非法请求。

防范：
* 设置`token`令牌，浏览器会自动带上已登录网站的`cookie`，但不会自动发送`token`
* 检测`origin`和`referer`
* 设置`same-site`策略

`token`存放位置
* 可以放在`cookie`中，发送请求时，从cookie中取值，放入请求头或请求参数中，即使请求会带上`cookie`，但`cookie`跨站无法访问
* `localStorage`/`sessionStorage`
* 放在`window`对象下
* 放在表单中存储


