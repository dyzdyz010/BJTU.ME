/**
 * Created with JetBrains WebStorm.
 * User: DYZ
 * Date: 13-5-14
 * Time: 下午3:21
 * To change this template use File | Settings | File Templates.
 */
var db = require("./db").db;

/*
 * GET categories information.
 */

exports.list = function(req, res) {
    var category = req.query.category;
    var queryStr = 'select * from item where cname="'+category+'"';
    db.query(queryStr, function(err, results) {
        console.log(results);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(results));
        res.end();
    });
};