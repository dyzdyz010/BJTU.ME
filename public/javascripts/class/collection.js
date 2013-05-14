/**
 * Created with JetBrains WebStorm.
 * User: DYZ
 * Date: 13-5-2
 * Time: 上午10:55
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports) {
    var Backbone = require('backbone');
    var model = require('class/model');
    var baseUrl = "http://127.0.0.1:3000";

    exports.Categories = Backbone.Collection.extend({
        model: model.Category,
        url: baseUrl + "/categories"
    });

    exports.Items = Backbone.Collection.extend({
        model: model.Item,
        url: baseUrl + "/items"
    });

});