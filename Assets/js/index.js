var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	// Set up model structures.
	initModels();
	
	//TODO: Check if the user logged in.
	
	// Show classes on homepage.
	initClasses();
}

function initModels() {
	Class = Backbone.Model.extend({
		defaults: {
			img: "", 
			sname: "name", 
			name: "周边信息", 
			intro: "周边信息"
		}, 
		initialize: function(attr) {
			this.img = attr.img;
			this.sname = attr.sname;
			this.name = attr.name;
			this.intro = attr.intro;
		}
		
	});
	
	ClassCollection = Backbone.Collection.extend({
		model: Class,
		url: baseUrl + "/classes",
		parse: function(response) {
			return response.data;
		}
	});
}

function initClasses() {
	clssCll = new ClassCollection();
	
	$.get(baseUrl + "/classes", function(response, status) {
		if(status == "success") {
			/*
$.each(response.data, function(index, data) {
				var clss = new Class(data);
				clssCll.add(clss);
			});
*/
			//console.log(response.page);
			var result = jade.compile(response.page);
			console.log(result);
		
			//$("#content").empty();
			
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

function classClicked(sname) {
	var model = clssCll.where({sname: sname}).pop();
	$('#title').fadeOut(200, function() {
		$('#title').html(model.name + '<small>' + model.intro + '</small>');
	});
	$('#title').fadeIn(200);
	console.log(model);
}
