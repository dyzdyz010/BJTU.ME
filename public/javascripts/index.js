var baseUrl = "http://127.0.0.1:3000";
var loading = "";

seajs.use('deps');

function onLoad() {
	// Fetch loading page from server
	initLoading();
	
	// Set up model structures.
	initModels();
	
	//TODO: Check if the user logged in.
	
	// Show classes on homepage.
    initCategories();
}

function initLoading() {
	$.get(baseUrl + "/loading.html", function(response, status) {
		if(status == "success") {
			loading = response;
			//console.log(loading);
		}
	});
}

function initModels() {
    Category = Backbone.Model.extend({
		defaults: {
			img: "", 
			cname: "name", 
			name: "周边信息", 
			intro: "周边信息"
		}, 
		initialize: function(attr) {
			this.img = attr.img;
			this.cname = attr.cname;
			this.name = attr.name;
			this.intro = attr.intro;
		}
		
	});

    CategoryCollection = Backbone.Collection.extend({
		model: Category,
		url: baseUrl + "/categories"
	});
    categories = new CategoryCollection();

    Router = Backbone.Router.extend({
        routes: {
            "about": "showAbout",
            "items/:cname": "showItems"
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
    router = new Router();
    Backbone.history.start();
}

function initCategories() {
	
	$.get(baseUrl + "/templates/categories.jade", function(response, status) {
		if(status == "success") {
			var result = jade.compile(response);
			console.log(result);
		
			CategoryView = Backbone.View.extend({
				el: $("#content"), 
				render: function() {
					console.log(iview);
					iview.$el.html(result({classes:categories.models}));
					return iview;
				}, 
				initialize: function() {
					iview = this;
                    categories.fetch({success: this.render});
				}
				
			});
			var categoryView = new CategoryView();
		}
	});
}

function checkOnline() {
	
}
