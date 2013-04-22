var request = new XMLHttpRequest();
var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200)
		{
			console.log("Data recieved: " + request.responseText);
			var page = JSON.parse(request.responseText);
			console.log("Data recieved: " + page.data);
			var dataModel = page.data;
			var pagestr = page.page;
			
			$("#content").empty();
			for (i = 0; i < dataModel.length; i++) {
				$(pagestr).appendTo("#content");
				$(".tile-image").attr('src', dataModel[i].img);
				//$(".tile-title").get(i).text(dataModel[i].name);
				console.log($(".tile-title"));
			}
		}
	};
	request.open("GET", baseUrl + "/classes", true);
	request.send();
}

function checkOnline() {
	
}

function classClicked(name) {
	document.getElementById('title').innerHTML = name + '<small>' + name + '</small>';
	console.log(name);
	$('#content').fadeOut();
}

function showLoading() {
	
}