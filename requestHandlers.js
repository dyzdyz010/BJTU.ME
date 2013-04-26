var fs = require("fs");
var model = require("./model");
var querystring = require("querystring");
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

function index(request, response, postData) {
	fs.readFile('Assets/index.html', function (err, data) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(data);
		response.end();
	});
}

function classes(request, response, postData) {
	var classes = new model.Classes();
	classes.getList( function (err, results) {
		if (err) {
			response.writeHead(500);
			response.end();
		}
		console.log(results);
		var rstr = JSON.stringify(results);
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(rstr);
		response.end();
	});
}

exports.index = index;
exports.classes = classes;