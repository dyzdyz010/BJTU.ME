var fs = require("fs");
/*
 * GET home page.
 */

exports.index = function(req, res){
    fs.readFile("views/index.html", function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end();
    });
};