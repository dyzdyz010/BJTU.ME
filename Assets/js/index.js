var request = new XMLHttpRequest();
var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200)
		{
			//console.log("Data recieved: " + request.responseText);
			document.getElementById('classes').innerHTML = request.responseText;
		}
	};
	request.open("POST", baseUrl + "/classes", true);
	request.send();
	
	var mapOptions = {
		zoom: 4,
		disableDefaultUI: true,
		center: new google.maps.LatLng(34.397, 150.644),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var markerOpt = {
		map: map,
		position: new google.maps.LatLng(34.397, 150.644)
	}
	var marker = new google.maps.Marker(markerOpt);
	//marker.setDraggable(true);
	
	/*
if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.langitude);
			map.setCenter(pos);
			marker.setPosition(pos);
		});
	}
*/
}

function checkOnline() {
	
}

function classClicked(name) {
	console.log(name);
}