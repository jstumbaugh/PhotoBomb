$( document ).ready( function() {

	

});


// For angular controller 
var app = angular.module('main',[]);
app.controller('userCtrl', function($scope) {
	$.get("http://private-5c6f-assignment51.apiary-mock.com/users/username")
	.success(function(data, status) {
		//var obj = JSON.parse(data);
		$scope.username = data.username;
		$scope.email = data.email;
		$scope.picArray = data.pictures;
		$scope.$apply();
	})
	.error(function(data, status){
		alert('Error occured retireving account information.');
		window.location.replace("index.html");
	});
});