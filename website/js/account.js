$( document ).ready( function() {

	

});


// For angular controller 
var app = angular.module('main',[]);
app.controller('userCtrl', function($scope) {
	$.get("http://private-5c6f-assignment51.apiary-mock.com/users/username")
	.done(function(data, status) {
		$scope.username = data.username;
		$scope.email = data.email;
		$scope.picArray = data.pictures;
		$scope.$apply();
	})
	.fail(function(data, status){
		alert('Error occured retireving account information.');
		window.location.replace("main.html");
	});
});