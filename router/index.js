// router的入口文件
// 引入路由
const Router = require("koa-router");
const router = new Router();

const user = require("./user");

// 只要访问的路径前缀是 /user 就调用这个中间件
router.use("/user", user.routes(), user.allowedMethods());

// 如果访问 /，后端就会重定向到 /list
// router.redirect("/", "/list");

// 导出router给app.js使用
module.exports = router;