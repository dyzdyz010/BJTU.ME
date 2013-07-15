var router;
var loading = "";
var baseUrl = "http://127.0.0.1:3000";
define(function(require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var routers = require('class/router');
    require('categoriesview');
    require('md5')($);
    //console.log($.md5("abc"));

    $(document).ready(function() {
        $.get(baseUrl + "/loading.html", function(response, status) {
            if(status == "success") {
                loading = response;
            }
        });
        //var categoriesView = require('categoriesview').categoriesView;
        router = new routers.Router();
        Backbone.history.start();

        //console.log(categoriesView);
    });
});
