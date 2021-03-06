## 性能优化
1. 页面级优化
 - 减少http请求数（合理利用缓存）
   - 使用cach-control或expires这类强缓存时，缓存不过期的情况下，不向服务器发送请求。强缓存过期时，会使用last-modified或etag这类协商缓存，向服务器发送请求，如果资源没有变化，则服务器返回304响应，浏览器继续从本地缓存加载资源；如果资源更新了，则服务器将更新后的资源发送到浏览器，并返回200响应
 - 资源合并与压缩
 - CSS Sprites
2. 代码级优化
 - 减少dom操作  字符串拼接不使用+，使用join
 - 压缩图片（雪碧图  base64  使用字体文件）
 - CSS的@import会造成额外的请求 避免使用空的src和href
3. 优化网络连接
 - 【持久连接】使用keep-alive或presistent来建立持久连接，持久连接降低了时延和连接建立的开销，将连接保持在已调谐状态，而且减少了打开连接的潜在数量
 -【管道化连接】在HTTP2协议中，可以开启管道化连接，即单条连接的多路复用，每条连接中并发传输多个资源，这里就不需要添加域名来增加并发数了
 4. 防抖和节流

5. 参考： https://www.cnblogs.com/xiaohuochai/p/9178390.html
