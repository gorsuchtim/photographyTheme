/*******************************************
Contact Name Validate
********************************************/
function nameCheck() {

	var name = document.getElementById("name").value;
	var nameGroup = document.getElementById("nameGroup");
	
	var nameError = document.getElementById("nameError");

	if (name === "") {
		nameError.innerHTML = "Please enter your name (first name at least)";
		nameGroup.className = "has-error";
		nameError.style.color = "red";
		return false;
	}
	else {
		nameGroup.className = "has-success";
		nameError.innerHTML = "Your first name";
		nameError.style.color = "black";
		return true;
	}	
	 
} // end nameCheck()

/*******************************************
Contact - Email validate
********************************************/
function emailCheck() {
	var email = document.getElementById("email").value;
	var emailGroup = document.getElementById("emailGroup");
	var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	
	var emailError = document.getElementById("emailError");
	

	if (email !== "") {
		if(emailPattern.test(email)) {
			emailGroup.className = "has-success";
			emailError.innerHTML = "Email";
			emailError.style.color = "black";	
			return true;
		}
		else {
			emailGroup.className = "has-error";
			emailError.innerHTML = "Please check your email address";
			emailError.style.color = "red";
			return false;
		}
	}
} // end emailCheck()

/*******************************************
Contact - Message Validate
********************************************/
function messageCheck() {

	var message = document.getElementById("messageBox").value;
	var messageGroup = document.getElementById("messageGroup");
	
	var messageError = document.getElementById("messageError");

	if (message === "") {
		messageError.innerHTML = "Please enter a brief message";
		messageGroup.className = "has-error";
		messageError.style.color = "red";
		return false;
	}
	else {
		messageGroup.className = "has-success";
		messageError.innerHTML = "Your message";
		messageError.style.color = "black";
		return true;
	}		
} // end messageCheck()


/****************************************************
Contact - Submit Message
***************************************************/
function submitForm() {

	if (emailCheck()) {
		if (nameCheck()) {
			if (messageCheck()) {			
				document.getElementById("createMessage").submit();
				document.getElementById("errorMessage").innerHTML = "Thanks!  I'll be in touch";					
				document.getElementById("errorMessage").style.color = "white";
				document.location = "index.html";		
			}
		}
	}
	else {
		document.getElementById("errorMessage").innerHTML = "Please make sure all fields are correct";	
		document.getElementById("errorMessage").style.color = "red";
	}	
}

/****************************************************
Contact - Change button color on validation
***************************************************/
function turnGreen() {

	var button = document.getElementById("createMessageSubmit");
	if (emailCheck()) {
		if (nameCheck()) {
			if (messageCheck()) {
				button.className = "btn btn-success";					
			}
		}
	}
	else {
		button.className = "btn btn-danger";

	}
}
