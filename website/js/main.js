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

Parse.initialize("4YUumbwDoIOBcvA70vOQarhAwW2EpUuNB48ymoxa", "lWQ9zJCAFs31DZ38NimVY59Jpy0l0HZGBxk0IAzX");

// Parse Class
// USE COLLECTIONS
// var Pictures = Parse.Object.extend("Picture");
// var query = new Parse.Query(Pictures);
// query.get("uniqueID", {
//   success: function(picture) {
//     // The object was retrieved successfully.
//   },
//   error: function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and message.
//   }
// });



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

