const query = require("../utils/database");

// 拿到所有用户信息
const getAllUserInfo = async (ctx) => {
    const sql = `select * from user;`;
    query(sql, async (err, data) => {
        if(err) throw err;
        ctx.body = {
            msg: data[0].username,
        };
    });
};

module.exports = {
    getAllUserInfo,
};