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
* 设置内容安全策略`content-security-policy: default-src 'seft'`
* 设置`x-xss-protection: 1;mode=block`
* 设置`httpOnly`，禁止`js`操作`cookie`
* 设置`secure`，在`https header`中发送`cookie`

## `CSRF`
* 跨站请求伪造（`cross site request forgery`）
* 在登录网站A的情况下，访问第三方恶意网站B，冒充正常用户对A发起请求

防范：
* 设置`token`令牌，浏览器会自动带上已登录网站的`cookie`，但不会自动发送`token`
* 检测`origin`和`referer`
* 设置`same-site`策略


