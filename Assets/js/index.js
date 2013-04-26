var baseUrl = "http://127.0.0.1:8888";
var loading = "";

function onLoad() {
	// Fetch loading page from server
	initLoading();
	
	// Set up model structures.
	initModels();
	
	//TODO: Check if the user logged in.
	
	// Show classes on homepage.
	initClasses();
}

function initLoading() {
	$.get(baseUrl + "/templates/loading.html", function(response, status) {
		if(status == "success") {
			loading = response;
			console.log(loading);
		}
	});
}

function initModels() {
	console.log(loading);
	Class = Backbone.Model.extend({
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
	
	ClassCollection = Backbone.Collection.extend({
		model: Class,
		url: baseUrl + "/classes"
	});
}

function initClasses() {
	clssCll = new ClassCollection();
	
	$.get(baseUrl + "/templates/classes.jade", function(response, status) {
		if(status == "success") {
			var result = jade.compile(response);
			console.log(result);
		
			ClassView = Backbone.View.extend({
				el: $("#content"), 
				render: function() {
					console.log(iview);
					iview.$el.html(result({classes:clssCll.models}));
					return this;
				}, 
				initialize: function() {
					iview = this;
					clssCll.fetch({success: this.render});
				}
				
			});
			var clssView = new ClassView();
		}
	});
}

function checkOnline() {
	
}

function classClicked(clssname) {
	var model = clssCll.where({cname: clssname}).pop();
	$('#title').fadeOut(200, function() {
		$('#title').html(model.name + '<small>' + model.intro + '</small>');
	});
	$('#title').fadeIn(200);
	console.log(model);
}
