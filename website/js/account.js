Parse.initialize("4YUumbwDoIOBcvA70vOQarhAwW2EpUuNB48ymoxa", "lWQ9zJCAFs31DZ38NimVY59Jpy0l0HZGBxk0IAzX");

$( document ).ready( function() {





});

// For angular controller 
var appAccount = angular.module('main',[]);
appAccount.controller('userCtrl', function($scope) {
	// For viewing account name
	var currentUser = Parse.User.current();
	$scope.username = currentUser.attributes.username;
	
	// ADD ALL OF THE USER CONTRIBUTED PICTURES
	var Picture = Parse.Object.extend("Picture");
	var query = new Parse.Query(Picture);
	query.equalTo("contributor", currentUser.attributes.username);
	query.find({
		success: function(results) {
			var resultArr = [];
			for (var i=0; i<results.length; i++) {
				resultArr.push( results[i].attributes );
			}
			$scope.picArray = resultArr;
			$scope.$apply();
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});

});