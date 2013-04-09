var server = require("./server.js");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/login"] = requestHandlers.login;
handle["/classes"] = requestHandlers.classes;

server.start(router.route, handle);