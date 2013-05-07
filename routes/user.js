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