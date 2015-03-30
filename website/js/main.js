$( document ).ready( function() {

	$("#search").submit( function(event) {
		event.preventDefault();
		//alert("searched");
	}); // end of search function

});

var app = angular.module('main',[]);
app.controller('pictureCtrl', ['$scope', function($scope) {
	$scope.imgsrc = "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg";
	$scope.picTitle = "Golf Picture";
	$scope.contributor = "johnny chimpo";

	$scope.jsonArr = [
		{
			"pictureID": 1,
			"imgsrc": "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg",
			"picTitle": "Golf Picture",
			"contributor": "johnny chimpo",
			"currentVotes": 22
		},
		{
			"pictureID": 1,
			"imgsrc": "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg",
			"picTitle": "Golf Picture",
			"contributor": "johnny chimpo",
			"currentVotes": 22
		},
		{
			"pictureID": 1,
			"imgsrc": "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg",
			"picTitle": "Golf Picture",
			"contributor": "johnny chimpo",
			"currentVotes": 22
		},
		{
			"pictureID": 1,
			"imgsrc": "https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg",
			"picTitle": "Golf Picture",
			"contributor": "johnny chimpo",
			"currentVotes": 22
		}
	];

}]);
