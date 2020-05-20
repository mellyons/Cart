/*
Melina Lyons
Spring 2018

*/

//add arrays
function login() {
	var userName = ["Tom", "Susan", "Ray", "Alice"];
	var userPassword = ["hello", "yes", "now", "quick"];

	var myName = document.getElementById("user_name").value;
	var myPass = document.getElementById("password").value;
	
	for (i=0; i< userName.length; i++) {
		if(userName[i] == myName && userPassword[i] == myPass) {
		window.location = "product_order.html";
		break;
		}
	}
	
	var myOut = document.getElementById("output");
	myOut.innerHTML = "User Name and/or Password Does Not Match";
}

//function with a click event.
function init() {
	var login_button = document.getElementById("login_button");
	if(login_button !== null) {
	login_button.onclick = login;
	}
}


window.onload = init;