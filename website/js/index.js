$( document ).ready( function() {

	/* Login Function */
	
	$("#loginForm").submit( function(event) {
		event.preventDefault();
		var user = new Object();
		user.username = $("#username").val();
		user.password = $("#password").val();
		// user now has email and password stored in it

		// url for apiary: http://private-5c6f-assignment51.apiary-mock.com/users
	    $.post("http://private-5c6f-assignment51.apiary-mock.com/users", JSON.stringify(user), function(data) {
	    	if(data == 100)
	    		alert("Successfully Logged In");
	    	else
	    		alert("Account not found.");
	    	// Redirect to index 
	    	window.location.replace("main.html");
	    })
	    .fail( function() {
	    	alert("An error occured logging you in.");
	    });
	}); // end of login function
	
	
	/* Sign Up Function */
	$("#signUpForm").submit( function(event) {
		event.preventDefault();
		var user = new Object();
		user.email = $("#signupEmail").val();
		user.password = $("#signupPassword").val();
		var confirmPassword = $("#signupConfirmPassword").val();

		if (user.password === confirmPassword) {
			// url for apiary http://private-5c6f-assignment51.apiary-mock.com/signup/email
			$.post("http://private-5c6f-assignment51.apiary-mock.com/signup/email", JSON.stringify(user), function( data ) {
				// success function
				if(data == 100) {
		    		document.getElementById("errorMessage").innerHTML = "";
		    		alert("Successfully Created Account");
		    		// Redirect to index 
	    			window.location.replace("main.html");
		    	}
		    	else {
		    		alert("no go");
		    		document.getElementById("errorMessage").innerHTML = "Account already exisits with that email address.";
		    	}
			})
			.fail( function() {
				alert("Error occured creating an account");
			});
		} // end of if
		else { // passwords are not the same
			document.getElementById("errorMessage").innerHTML = "Passwords are not the same.";
		}
	}); // end of sign up
	
}); // end of document ready func