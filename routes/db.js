var mysql = require("mysql");
var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bjtu_me'
});
db.connect(function (err, rows) {
    if (err) {
        console.log("Mysql connection error: " + err);
    }
});
exports.db = db;