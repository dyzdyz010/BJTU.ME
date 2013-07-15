define(function(require, exports) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var View = require('class/view');

    exports.Router = Backbone.Router.extend({
        routes: {
            "login": "login",
            "login/submit": "loginSubmit",
            "register": "register",
            "register/submit": "registerSubmit",
            "items/:cname": "showItems",
            "item/:iname": "showItem",
            "about": "showAbout"
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
        registerSubmit: function() {
            $.post(baseUrl+"/register", {mail:$("#login-mail").val(), passwd:$("#login-pass").val()}, function(response, status) {
                if(response.code == 0) {
                    console.log("Login success.");
                }
            });
        },
        showItems: function(cname) {
            var model = categories.where({cname: cname}).pop();
            var attr = model.attributes;
            $('#title').fadeOut(200, function() {
                $('#title').html(attr.name + '<small>' + attr.intro + '</small>');
                $('#title').fadeIn(200);
            });
//            $('#content').fadeOut(200, function() {
//                $('#content').html(loading);
//                $('#content').fadeIn(200);
//            });
            var itemsView = new View.ItemsView({cname:cname});
        },
        showItem: function(iname) {
            var model = items.where({iname: iname}).pop();
            var attr = model.attributes;
            $('#title').fadeOut(200, function() {
                $('#title').html(attr.name + '<small>' + attr.intro + '</small>');
                $('#title').fadeIn(200);
            });
        },
        showAbout: function() {
            console.log("This is the router function showAbout.");
        }
    });
});