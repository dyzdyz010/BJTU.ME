var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	
	// Show classes on homepage.
	initClasses();
}

function initClasses() {
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
		model: Class
	});
	clssCll = new ClassCollection();
	
	$.get(baseUrl + "/classes", function(response, status) {
		if(status == "success") {
			$.each(response.data, function(index, data) {
				var clss = new Class(data);
				clssCll.add(clss);
			});
			//console.log(response.page);
			var result = jade.compile(response.page);
			//console.log(result({classes:clssCll.toJSON()}));
		
			$("#content").empty();
			
			ClassView = Backbone.View.extend({
				el: $("#content"), 
				render: function() {
					//var page = _.template($(response.page).html());
					//console.log(page);
					this.$el.html(result({classes:clssCll.toJSON()}));
					return this;
				}, 
				initialize: function() {
					this.render();
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

function showLoading() {
	
}