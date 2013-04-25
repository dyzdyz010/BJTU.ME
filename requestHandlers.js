var fs = require("fs");
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
	db.query('select * from class', function (err, results) {
		if (err) {
			response.writeHead(500);
			response.end();
		}
		console.log(results);
		fs.readFile('Assets/templates/classes.jade', 'utf-8', function (err, data) {
			//console.log(data);
			var d = {
				page: data,
				data: results
			};
			console.log(d);
			var dstr = JSON.stringify(d);
			response.writeHead(200, {"Content-Type": "application/json"});
			response.write(dstr);
			response.end();
		});
	});
}

exports.index = index;
exports.classes = classes;