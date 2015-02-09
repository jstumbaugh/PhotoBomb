changeBackgroundColor() {
	var body = document.getElementsByTagName('body');
	var body1 = body[0];
	body1.style.backgroundColor = 'Blue';
}

alertTitle() {
	var title = document.title;
	alert(title);
}

validateEmail() {
	var regex = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$");
	var email = "testEmail@smu.edu";
	if (email == null || email == "") 
	{
        alert("Please type your email.");
        return false;
    }

    if (regex.test(email)==true)
    	window.alert("Valid email");
    else
    	window.alert("Invalid email");
}

loadAndPrint() {
	var xmlhttp = new XMLHttpRequest();
    var url = "http://private-40e0f-smugui2015.apiary-mock.com/assignments/4";
    
    xmlhttp.onreadystatechange = function() 
    {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
	    {
	        console.log(xmlhttp.responseText);
	    }
	}
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}