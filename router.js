var path = require("path");
var fs = require("fs");
var mime = require("./mime").types;

function route(request, handle, pathname, response, postData) {
	//console.log("About to route a request for " + pathname);
	
	if (typeof handle[pathname] === 'function') {
		handle[pathname](request, response, postData);
	} else {
		checkStaticFile(pathname, response);
	}
}

function checkStaticFile(pathname, response) {
	var ext = path.extname(pathname);
	filename = './Assets' + pathname;
	//console.log("File request: " + filename);
	if (fs.existsSync(filename)) {
		var content = fs.readFileSync(filename);
		if (content) {
			response.writeHead(200, { 'Content-Type': mime[ext.slice(1)] });
			response.write(content);
			response.end();
		} else {
			response.writeHead(500);
			response.end();
		}
	} else {
		response.writeHead(404);
		response.end();
	}
	
}

exports.route = route;