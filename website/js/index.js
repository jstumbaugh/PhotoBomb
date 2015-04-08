// initialize application ID
Parse.initialize("4YUumbwDoIOBcvA70vOQarhAwW2EpUuNB48ymoxa", "lWQ9zJCAFs31DZ38NimVY59Jpy0l0HZGBxk0IAzX");

$( document ).ready( function() {

	/* Login Function */
	
	$("#loginForm").submit( function(event) {
		event.preventDefault();
		// Parse Login
		Parse.User.logIn( $("#username").val() , $("#password").val(), {
			success: function(user) {
				alert("Success!!!");
				// redirect to main
				window.location.replace("main.html");
			},
			error: function(user, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}); // end of login function
	
	
	/* Sign Up Function */
	$("#signUpForm").submit( function(event) {
		event.preventDefault();
		var user = new Parse.User();
		user.set( "username", $("#signupUsername").val() );
		user.set( "password", $("#signupPassword").val() );

		// if passwords are the same
		if ( $("#signupPassword").val() === $("#signupConfirmPassword").val() ) {
			// Parse SignUp
			user.signUp(null, {
				success: function(user) {
					alert("Success!!!");
					// redirect to main
					window.location.replace("main.html");
				},
				error: function(user, error) {
					// Show the error message somewhere and let the user try again.
					alert("Error: " + error.code + " " + error.message);
				}
			});
		} // end of if
		else { // passwords are not the same
			document.getElementById("errorMessage").innerHTML = "Passwords are not the same.";
		}
	}); // end of sign up
	
}); // end of document ready func