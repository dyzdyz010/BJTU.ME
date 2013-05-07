var router;
define(function(require) {
    var baseUrl = "http://127.0.0.1:3000";
    var loading = "";

    var $ = require('jquery');
    var Backbone = require('backbone');
    var view = require('view');
    var routers = require('router');
    var model = require('model');
    require('md5')($);
    console.log($.md5("abc"));
    $(document).ready(function() {
        //var view = require('view');
        //router.begin();

        $.get(baseUrl + "/loading.html", function(response, status) {
            if(status == "success") {
                loading = response;
                console.log(loading);
            }
        });
        var categoriesView = new view.CategoryView();
        categoriesView.render();
        router = new routers.Router();
        Backbone.history.start();

        console.log(categoriesView);
    });
//    function onLoad() {
//        // Fetch loading page from server
//        initLoading();
//        console.log($.md5("ab"));
//        // Set up model structures.
//        initModels();
//
//        //TODO: Check if the user logged in.
//
//        // Show classes on homepage.
//        initCategories();
//    }
//
//    function initLoading() {
//        $.get(baseUrl + "/loading.html", function(response, status) {
//            if(status == "success") {
//                loading = response;
//                //console.log(loading);
//            }
//        });
//    }
//
//    function initModels() {
//        Category = Backbone.Model.extend({
//            defaults: {
//                img: "",
//                cname: "name",
//                name: "周边信息",
//                intro: "周边信息"
//            },
//            initialize: function(attr) {
//                this.img = attr.img;
//                this.cname = attr.cname;
//                this.name = attr.name;
//                this.intro = attr.intro;
//            }
//
//        });
//
//        CategoryCollection = Backbone.Collection.extend({
//            model: Category,
//            url: baseUrl + "/categories"
//        });
//        categories = new CategoryCollection();
//
//        Router = Backbone.Router.extend({
//            routes: {
//                "login": "login",
//                "login/submit": "loginSubmit",
//                "register": "register",
//                "about": "showAbout",
//                "items/:cname": "showItems"
//            },
//            login: function() {
//                $("#content").fadeOut(function() {
//                    $("#content").html(loading);
//                    $.get(baseUrl + "/login.html", function(response, status) {
//                        $("#content").html(response);
//                        $("#content").fadeIn();
//                    });
//                });
//            },
//            loginSubmit: function() {
//                console.log($("#login-mail").val());
//                $.post(baseUrl+"/login", {mail:$("#login-mail").val(), passwd:$("#login-pass").val()}, function(response, status) {
//                    if(response.code == 0) {
//                        console.log("Login success.");
//                    }
//                });
//            },
//            register: function() {
//                $("#content").fadeOut(function() {
//                    $("#content").html(loading);
//                    $.get(baseUrl + "/register.html", function(response, status) {
//                        $("#content").html(response);
//                        $("#content").fadeIn();
//                    });
//                });
//            },
//            showAbout: function() {
//                alert("This is the router function showAbout.");
//            },
//            showItems: function(cname) {
//                var model = categories.where({cname: cname}).pop();
//                console.log(model);
//                $('#title').fadeOut(200, function() {
//                    $('#title').html(model.name + '<small>' + model.intro + '</small>');
//                });
//                $('#title').fadeIn(200);
//                console.log(model);
//            }
//        });
//        router = new Router();
//        Backbone.history.start();
//    }
//
//    function initCategories() {
//
//        $.get(baseUrl + "/templates/categories.jade", function(response, status) {
//            if(status == "success") {
//                var result = jade.compile(response);
//                console.log(result);
//
//                CategoryView = Backbone.View.extend({
//                    el: $("#content"),
//                    render: function() {
//                        console.log(iview);
//                        iview.$el.html(result({classes:categories.models}));
//                        return iview;
//                    },
//                    initialize: function() {
//                        iview = this;
//                        categories.fetch({success: this.render});
//                    }
//
//                });
//                var categoryView = new CategoryView();
//            }
//        });
//    }
//
//    function checkOnline() {
//
//    }
});
