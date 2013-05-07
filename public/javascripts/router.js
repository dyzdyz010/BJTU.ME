define(function(require, exports) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var baseUrl = "http://127.0.0.1:3000";

    exports.Router = Backbone.Router.extend({
        routes: {
            "login": "login",
            "login/submit": "loginSubmit",
            "register": "register",
            "about": "showAbout",
            "items/:cname": "showItems"
        },
        login: function() {
            $("#content").fadeOut(function() {
                $("#content").html(loading);
                $.get(baseUrl + "/login.html", function(response, status) {
                    $("#content").html(response);
                    $("#content").fadeIn();
                });
            });
        },
        loginSubmit: function() {
            console.log($("#login-mail").val());
            $.post(baseUrl+"/login", {mail:$("#login-mail").val(), passwd:$("#login-pass").val()}, function(response, status) {
                if(response.code == 0) {
                    console.log("Login success.");
                }
            });
        },
        register: function() {
            $("#content").fadeOut(function() {
                $("#content").html(loading);
                $.get(baseUrl + "/register.html", function(response, status) {
                    $("#content").html(response);
                    $("#content").fadeIn();
                });
            });
        },
        showAbout: function() {
            alert("This is the router function showAbout.");
        },
        showItems: function(cname) {
            var model = categories.where({cname: cname}).pop();
            console.log(model);
            $('#title').fadeOut(200, function() {
                $('#title').html(model.name + '<small>' + model.intro + '</small>');
            });
            $('#title').fadeIn(200);
            console.log(model);
        }
    });
});