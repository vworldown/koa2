const Router = require("koa-router");
const user = new Router();

const handle = require("../routerHandle/user")

// 拿到所有用户信息
user.get('/allInfo', handle.getAllUserInfo);


module.exports = user;