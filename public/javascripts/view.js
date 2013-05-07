/**
 * Created with JetBrains WebStorm.
 * User: DYZ
 * Date: 13-5-2
 * Time: 下午3:30
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports) {
    var baseUrl = "http://127.0.0.1:3000";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var collection = require('collection');
    var jade = require('jade');
    exports.CategoryView = Backbone.View.extend({
        //iview: this,
        el: $("#content"),
        render: function() {
            console.log(categories);
            $.get(baseUrl + "/templates/categories.jade", function(response, status) {
                if (status == "success") {
                    var template = jade.compile(response);
                    iview.$el.html(template({classes:categories.models}));
                }
                return iview;
            });
            //var template = jade.compile(this.template);
        },
        //template: $.get(baseUrl + "/templates/categories.jade"),
        initialize: function() {
            iview = this;
            categories = new collection.Categories();
            categories.fetch({success: this.render});
        }

    });

    exports.ItemsView = Backbone.View.extend({
        el: $("#content"),
        render: function() {
            iview.$el.html();
        },
        initialize: function() {
            iview = this;
        }
    });

    //console.log(exports);
});