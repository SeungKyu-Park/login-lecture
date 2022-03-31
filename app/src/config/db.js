const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "login_lecture",
});

db.connect();

module.exports = db;