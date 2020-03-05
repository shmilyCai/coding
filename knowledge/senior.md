# 前端高难度题

https://juejin.im/post/5ca9de22e51d452b5372ed90#heading-11
https://juejin.im/post/5cb0315f518825215e61ec14
https://juejin.im/post/5cd82463518825692330d440

## http 的状态码中，499 是什么？如何出现 499，如何排查根解决？

## 如何遍历一个 dom 树

## HTTP 的工作原理

## 讲解 HTPPS 对称加密和非对称加密

## 性能优化

## webpack 的打包原理，如何抽取 css 的

## 如何提神 webpack 的编译速度

## 错误收集和错误排查

## 性能监控

## 项目部署

## 前端如何进行 SEO 优化？

1. 合理的 title，description，keywords：搜索对着三项的权重逐个减小
2. 语义化的 html 代码，符合 W3C 规范，语义化代码让搜索引擎容易理解网页
3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，保证重要内容一定会被抓取
4. 重要内容不要用 JS 输出
5. 少用 iframe
6. 非装饰性图片必须加 alt
7. 提高网站速度

前端后分离的项目如何 SEO？

1. 使用 prerender
2. 先去 www.baidu.com/robots.txt 找出常见的爬虫，然后在 nginx 上判断来访问页面用户的 User-Agent 是否是爬虫，如果是爬虫，就用 nginx 方向代理到我们自己用 nodejs + puppeteer 实现的爬虫服务器上，然后用你的爬虫服务器爬自己的前后端分离的前端项目页面，增加扒页面的接收延时，保证异步渲染的接口数据返回，最后得到了页面的数据，返还给来访问的爬虫即可。

## 用户使用网页，发现白屏幕了，可能存在的问题？

以用户打开网页后，需要排查的点：

1. 用户没有打开网络
2. DNS 域名劫持
3. http 劫持
4. cdn 或者是其他资源文件访问出错
5. 服务器错误
6. 接口出错
7. 前端代码出错
8. 浏览器兼容性问题（css 或者是 JS）
9. 用户操作出错

需要像用户收集的信息：

1. 当前的网络状态
2. 运营商
3. 地理位置
4. 访问事件
5. 客户端版本
6. 系统版本
7. 浏览器信息
8. 设备分辨率
9. 页面的来源
10. 用户账号信息
11. 页面访问流程各阶段耗时
12. js 代码报错信息