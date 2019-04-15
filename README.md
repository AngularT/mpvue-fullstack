VUE + Koa2 开发一款全栈小程序 实战练习

内容包括：个人中心、图书列表、图书详情、图书评论、个人评论列表

技术栈：小程序、Vuejs、koa2、koa-router、mysql

2019-04-09

---

### 环境搭建
[后台地址](https://mp.weixin.qq.com)
[文档地址](https://developers.weixin.qq.com/miniprogram/dev/index.html)
[开发工具下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)


### 官方文档
[mpvue 官网](http://mpvue.com/)
[mpvue Github 地址](https://github.com/Meituan-Dianping/mpvue)
[vue](https://cn.vuejs.org/v2/guide/)
[微信小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html)

---

1. 初始化项目

```js
sudo npm install -g vue-cli

vue init webpack vue-demo  // 有一些配置项，按照需求选择即可，我的配置项如下

cd vue-demo

npm run dev
```

以下是我的初始化配置选择

```js
? Project name vue-demo
? Project description A Vue.js project
? Author zhenzhen lin <linzhenzhen@smartisan.com>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been creat
ed? (recommended) npm
```

`npm run dev `启动时遇到的问题, 80 端口被占用, 解决办法，可以去 `config/index.js` 中把 `port` 重新修改个端口号重启即可。

```js
Error: listen EADDRNOTAVAIL 10.3.51.12:8080
    at Object._errnoException (util.js:1022:11)
    at _exceptionWithHostPort (util.js:1044:20)
    at Server.setupListenHandle [as _listen2] (net.js:1350:19)
    at listenInCluster (net.js:1408:12)
    at GetAddrInfoReqWrap.doListen [as callback] (net.js:1517:7)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:97:10)
```

2. Koa 入门认识

基于 nodejs 平台的下一代 web 开发框架

- Express 原班人马打造，更精简
- Async + await 处理异步
- 洋葱圈型的中间件机制

```js
// 简单的 koa 用法
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'hello imooc!'
})

app.listen(9092);
```

3. 开通腾讯云后台

`前提概要`开通腾讯云提供了小程序全栈一体化的好处，解决方案是 koa2 + mysql + wafer + sdk, 集成微信开发工具一键上传部署, 调试免费域名+环境。

1.注册一个腾讯云账号，付费0.1元 [腾讯云官网](https://console.qcloud.com/)

2.扫码绑定微信开发平台账号

3.登录[微信公众平台](https://mp.weixin.qq.com) 

4.左侧菜单点击开发

5.顶部点击开发者工具，主界面有显示一个 `腾讯云` 已开通状态的板块

6.点击腾讯云

7.点击后台管理进入腾讯云专属小程序开发的后台 [最后目标地址](https://console.qcloud.com/lav2/dev)

8.按照腾讯云后台提供的7个步骤完成开通，点击页底部 `前往管理页面`

第 8 个步骤间遇到的问题，在微信开发者工具右上没有找到 `腾讯云` 按钮。可以按照以下步骤进行设置：

1.先检查微信开发者工具更新到最新版本（是个黑色主题）
2.在工具栏空白住右键
3.勾选`腾讯云`即可
4.另外推荐使用左上的`云开发`图形界面
5.[参考解决地址](https://www.jianshu.com/p/5dd5c2d885ec)