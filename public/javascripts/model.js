/**
 * Created with JetBrains WebStorm.
 * User: DYZ
 * Date: 13-5-2
 * Time: 上午10:31
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports) {
    var Backbone = require('backbone');
    exports.Category = Backbone.Model.extend({
        defaults: {
            img: "",
            cname: "name",
            name: "周边信息",
            intro: "周边信息"
        },
        initialize: function() {

        }
    });

    exports.Item = Backbone.Model.extend({

    });

    exports.User = Backbone.Model.extend({
        defaults: {
            mail: "email@email.com",
            name: "name",
            age: 20
        }
    });

});