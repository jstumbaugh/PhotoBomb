$( document ).ready( function() {

	$("#search").submit( function(event) {
		event.preventDefault();
		//alert("searched");
	}); // end of search function

});

function pictureCtrl($scope) {
	$scope.imgHTML = '<img src="https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg">';
	$scope.picTitle = "Golfing Picture";
	$scope.username = "johnny";
}