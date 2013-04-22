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

function classes() {
	var _this = this;
	_this.getList = function (func) {
		var queryStr = 'select * from class';
		db.query(queryStr, func);
	};
}

var c = new classes();
c.getList(function (err, results) {
	console.log(results);
});