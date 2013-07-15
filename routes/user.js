var db = require("./db").db;

/*
 * Requests handling about users
 */

exports.list = function(req, res){
    res.send("respond with a resource");
};

exports.login = function(req, res){
    console.log(req.body);
    res.send({code:0});
};

exports.register = function(req, res) {
    var queryStr = "insert into user(mail,password) values(" + req.params.mail + "," + req.params.passwd + ")";
    db.query(queryStr, function(err, results) {

    });
}