const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Zufuru17!",
    database: "employees"
});

connection.connect((err) => { if (err) throw err; });

module.exports = connection;