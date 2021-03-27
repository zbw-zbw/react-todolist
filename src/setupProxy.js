/*
 * @Author: your name
 * @Date: 2021-02-28 20:11:38
 * @LastEditTime: 2021-02-28 20:21:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todo-list\src\setupProxy.js
 */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		proxy("/api1", {  //遇到前缀为api1就会触发该代理配置
			target: "http://localhost:5000",  //要转发的服务器地址
			changeOrigin: true, //控制服务器收到的请求头中Host的值
			pathRewrite: { "^/api1": "" } //重写请求路径
		}),
		proxy("/api2", {
			target: "http://localhost:5001",
			changeOrigin: true,
			pathRewrite: { "^/api2": "" }
		}),
	);
};
