$( document ).ready( function() {
	
	$("#search").submit( function(event) {
		event.preventDefault();
		//alert("searched");
	}); // end of search function


	$("#logout").submit( function(event) {
		event.preventDefault();
		alert("Successfully Logged Out");
		window.location.replace("index.html");
	}); // end of logout function


	$("#viewAccount").submit( function(event) {
		event.preventDefault();
		window.location.replace("account.html");
	}); // end of View Profile Function

});



// For angular controller 
var app = angular.module('main',[]);
app.controller('pictureCtrl', function($scope) {
	$.get("http://private-5c6f-assignment51.apiary-mock.com/pics")
	.success(function(data, status) {
		$scope.picArray = data;
		$scope.$apply();
	})
	.error(function(data, status){
		alert('Error occured retireving pictures.');
	});
});

