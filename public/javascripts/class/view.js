/**
 * Created with JetBrains WebStorm.
 * User: DYZ
 * Date: 13-5-2
 * Time: 下午3:30
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var collection = require('class/collection');
    var jade = require('jade');
    exports.CategoryView = Backbone.View.extend({
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
        initialize: function() {
            iview = this;
            categories = new collection.Categories();
            categories.fetch({success: this.render});
        },
        events: {
            "click .span3": "click"
        },
        click: function(event) {
            var cname = event.currentTarget.id;
            //console.log(event.currentTarget.id);
            router.navigate("items/"+cname, {trigger:true});
            this.undelegateEvents();
        }

    });

    exports.ItemsView = Backbone.View.extend({
        el: $("#content"),
        render: function() {
            $.get(baseUrl + "/templates/items.jade", function(response, status) {
                console.log(items);
                if (status == "success") {
                    var template = jade.compile(response);
                    iview.$el.html(template({items:items.models}));
                }
                return iview;
            });
            //var template = jade.compile(this.template);
        },
        initialize: function(options) {
            console.log("Cname: " + options.cname);
            //parentName = cname;
            iview = this;
            items = new collection.Items();
            items.fetch({url: baseUrl+"/items?category="+options.cname, success: this.render});
        },
        events: {
            "click .span3": "click"
        },
        click: function(event) {
            var iname = event.currentTarget.id;
            console.log(event.currentTarget.id);
            router.navigate("item/"+iname, {trigger:true});
        }
    });

    //console.log(exports);
});