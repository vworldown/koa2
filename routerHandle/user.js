const query = require("../utils/database");

// 拿到所有用户信息
const getAllUserInfo = async (ctx) => {
    ctx.body = "获取所有用户信息";
};

// 用户登录
const userLogin = async (ctx) => {
    ctx.body = "登录";
};

module.exports = {
    getAllUserInfo,
    userLogin,
};