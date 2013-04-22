var request = new XMLHttpRequest();
var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200)
		{
			var page = JSON.parse(request.responseText);
			var dataModel = page.data;
			var pagestr = page.page;
			
			$("#content").empty();
			for (i = 0; i < dataModel.length; i++) {
				$(pagestr).appendTo("#content");
				console.log($(".tile-title"));
			}
			$(".class").each(function (i) {
				$(this).attr('id', dataModel[i].sname);
				$(this).find("img").attr('src', dataModel[i].img);
				$(this).on('click', {data: dataModel[i]}, classClicked);
				$(this).find("h3").text(dataModel[i].name);
				$(this).find("p").text(dataModel[i].intro);
			});
		}
	};
	request.open("GET", baseUrl + "/classes", true);
	request.send();
}

function checkOnline() {
	
}

function classClicked(e) {
	var name = $(this).attr('id');
	$('#title').fadeOut(200, function() {
		$('#title').html(e.data.data.name + '<small>' + e.data.data.intro + '</small>');
	});
	$('#title').fadeIn(200);
	console.log(e.data);
	//$('#content').fadeOut();
}

function showLoading() {
	
}