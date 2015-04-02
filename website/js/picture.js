$( document ).ready( function() {
	
});

// For angular controller 
var app1 = angular.module('picture',[]);
app1.controller('picCtrl', function($scope) {
	
	console.log("inside picCtrl");

	$.post("http://private-5c6f-assignment51.apiary-mock.com/pics/1")
	.done(function(data) {
		alert(data);
		$scope.pictureID = data.pictureID;
		$scope.imgsrc = data.imgsrc;
		$scope.picTitle = data.picTitle;
		$scope.comtributor = data.contributor;
		$scope.currentVotes = data.currentVotes;
		$scope.$apply();
	})
	.fail(function(data, status){
		alert('Error occured retireving picture 1.');
	});

});
