Parse.initialize("4YUumbwDoIOBcvA70vOQarhAwW2EpUuNB48ymoxa", "lWQ9zJCAFs31DZ38NimVY59Jpy0l0HZGBxk0IAzX");

$( document ).ready( function() {

	$("#logout").submit( function(event) {
		event.preventDefault();
		Parse.User.logOut();
		alert("Successfully Logged Out");
		window.location.replace("index.html");
	}); // end of logout function

});