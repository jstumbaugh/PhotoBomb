$( document ).ready( function() {

	$("#search").submit( function(event) {
		event.preventDefault();
		//alert("searched");
	}); // end of search function

	window.onload = loadPics();

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
app.controller('pictureCtrl', ['$scope', function($scope) {
	// $scope.imgsrc = "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg";
	// $scope.picTitle = "Golf Picture";
	// $scope.contributor = "johnny chimpo";

	
}]);
