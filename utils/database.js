const mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

// 连接池
const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    database: "homely_rental_app",
    user: "root",
    password: "123456",
});

const query = (sql, callback) => {
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, rows) => {
            callback(err, rows);
            connection.release() // 中断连接
        });
    });
};

module.exports = query;