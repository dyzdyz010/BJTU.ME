var request = new XMLHttpRequest();
var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	
	// Show classes on homepage.
	initClasses();
}

function initClasses() {
	$.get(baseUrl + "/classes", function(response, status) {
		if(status == "success") {
			$("#content").empty();
			//console.log(response);
			$.each(response.data, function(index, data) {
				console.log(data);
				$(response.page)
				.find('img').attr('src', data.img).end()
				.find('h3').html(data.name).end()
				.find('p').html(data.intro).end()
				.on('click', {data: data}, classClicked)
				.appendTo("#content");
			});
			/*
for (i = 0; i < data.data.length; i++) {
				$(data.page).appendTo("#content");
				console.log($(".tile-title"));
			}
			$(".class").each(function (i) {
				$(this).attr('id', data.data[i].sname);
				$(this).find("img").attr('src', data.data[i].img);
				$(this).on('click', {data: data.data[i]}, classClicked);
				$(this).find("h3").text(data.data[i].name);
				$(this).find("p").text(data.data[i].intro);
			});
*/
		}
	});
}

function checkOnline() {
	
}

function classClicked(e) {
	var name = $(this).attr('id');
	$('#title').fadeOut(200, function() {
		$('#title').html(e.data.data.name + '<small>' + e.data.data.intro + '</small>');
	});
	$('#title').fadeIn(200);
	console.log(e.data.data);
	//$('#content').fadeOut();
}

function showLoading() {
	
}