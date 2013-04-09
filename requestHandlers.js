var fs = require("fs");
var querystring = require("querystring");
//var ip = require("./ip.js");
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
		var body = "";
		for (i = 0; i < results.length; i++) {
			body += "<div class='span3'>" + 
			 	 "<div class='tile' onclick='classClicked(\"" + results[i].sname + "\")'>" +
				 	 "<img class='tile-image big-illustration' src=\"" + 
					results[i].img + "\" />" +
					 "<h3 class='tile-title'>" + results[i].name + "</h3>" +
					 "<p>" + results[i].intro + "</p>" +
				 "</div>" +
			 "</div>";
		}
		response.writeHead(200, {"Content-Type": "text/html"});
		//response.write(body);
		response.end(body);
	});
}

exports.index = index;
exports.classes = classes;