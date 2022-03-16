// 所有关于列表的接口
const Router = require("koa-router");
const list = new Router();

const handle = require("../routerHandle/list");

list.get("/", async (ctx) => {
    ctx.body = "首页";
});

list.get("/a", handle.a);

list.get("/b", handle.b);

module.exports = list;