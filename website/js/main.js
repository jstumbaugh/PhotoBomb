$( document ).ready( function() {

	//window.onload = loadPics();
	
	$("#search").submit( function(event) {
		event.preventDefault();
		//alert("searched");
	}); // end of search function

	$("#logout").submit( function(event) {
		event.preventDefault();
		alert("logout");
		window.location.replace("index.html");
	}); // end of logout function

	$("#viewProfile").submit( function(event) {
		event.preventDefault();
		//window.location.replace("profile.html");
	}); // end of View Profile Function

});

// populate pictures
function loadPics() {
	// apiary API: http://private-5c6f-assignment51.apiary-mock.com/pics
	$.get("http://private-5c6f-assignment51.apiary-mock.com/pics", function(data) {
		var picWrapper1 = '<div class="col-sm-6 col-md-3"><div class="thumbnail"><img src="';
		var picWrapper2 = '"><div class="caption"><h4>';
		var picWrapper3 = '</h4><p>submitted by: ';
		var picWrapper4 = '</p><p><a href="';
		var picWrapper5 = '" class="btn btn-success" role="button">View Picture</a></p></div></div></div></div>';
		var linkToPage = "#";

		for (var i=0; i < data.length; i++) {
			var finalStr = picWrapper1 + data[i].imgsrc + picWrapper2 + data[i].picTitle + picWrapper3 + data[i].contributor + picWrapper4 + linkToPage + picWrapper5;
			document.getElementById("pictures").innerHTML += finalStr;
		}
	});
}



// For angular controller 
var app = angular.module('main',[]);
$.get("http://private-5c6f-assignment51.apiary-mock.com/pics", function(data) {
	

	// MESSING AROUND WITH ANGULAR
	for (var i=0; i < data.length; i++) {
		app.controller('pictureCtrl', ['$scope', function($scope) {
			$scope.imgsrc = data[i].imgsrc;
			$scope.picTitle = data[i].picTitle;
			$scope.contributor = data[i].contributor;
			
		}]);
	}

	var picWrapper1 = '<div class="col-sm-6 col-md-3"><div class="thumbnail"><img src="';
	var picWrapper2 = '"><div class="caption"><h4>';
	var picWrapper3 = '</h4><p>submitted by: ';
	var picWrapper4 = '</p><p><a href="';
	var picWrapper5 = '" class="btn btn-success" role="button">View Picture</a></p></div></div></div></div>';
	var linkToPage = "#";

	for (var i=0; i < data.length; i++) {
		var finalStr = picWrapper1 + data[i].imgsrc + picWrapper2 + data[i].picTitle + picWrapper3 + data[i].contributor + picWrapper4 + linkToPage + picWrapper5;
		document.getElementById("pictures").innerHTML += finalStr;
	}
});

