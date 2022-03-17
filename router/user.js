// user.js 用来存放所有和用户相关的接口
const Router = require("koa-router");
const user = new Router();

const handle = require("../routerHandle/user")

// 拿到所有用户信息
user.get("/allUserInfo", handle.getAllUserInfo);

// 用户登录
user.get("/login", async (ctx) => {
    ctx.body = '登录';
});

module.exports = user;