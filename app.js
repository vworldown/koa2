const Koa = require("koa2");
const app = new Koa();
const port = 9000;
const cors = require("koa2-cors");

// 配置跨域（一定要在路由之前）
app.use(cors());

const router = require("./router/index");
/*
    router.routes() 启动路由
    router.allowedMethods 允许任何请求(get、post、put ...)
*/
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
