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

function Classes() {
	var _this = this;
	_this.getList = function (func) {
		var queryStr = 'select * from class';
		db.query(queryStr, func);
	};
}
exports.Classes = Classes;

function Items() {
	var _this = this;
	_this.getList = function (cname, func) {
		var queryStr = 'select * from item where cname="' + cname + '"';
		db.query(queryStr, func);
	};
}
exports.Items = Items;

var items = new Items();
items.getList('*', function (err, results) {
	for (i in results) {
		console.log(results[i].name);
	}
})