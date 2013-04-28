var db = require("./db").db;

/*
 * GET categories information.
 */

exports.list = function(req, res) {
    var queryStr = 'select * from category';
    db.query(queryStr, function(err, results) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(results));
        res.end();
    });
};