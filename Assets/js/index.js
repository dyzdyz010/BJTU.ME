var request = new XMLHttpRequest();
var baseUrl = "http://127.0.0.1:8888";

function onLoad() {
	//TODO: Check if the user logged in.
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200)
		{
			//console.log("Data recieved: " + request.responseText);
			document.getElementById('content').innerHTML = request.responseText;
		}
	};
	request.open("POST", baseUrl + "/classes", true);
	request.send();
}

function checkOnline() {
	
}

function classClicked(name) {
	console.log(name);
}

function showLoading() {
	
}