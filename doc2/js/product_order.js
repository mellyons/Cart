/*
Melina Lyons
Spring 2018

*/

/*
Function revised to retrieve data.
*/

function calcTotal() {
	
	for (i=1; i<=10; i++) {
		var errMsg = document.getElementById("err" + i);
		errMsg.innerHTML = "";
	}
		
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var product = document.getElementById("product").value;
	var quantity = document.getElementById("quantity").value;
	var order_Date = document.getElementById("order_Date").value;
	var unit_price = document.getElementById("unit_price").value;
	var discount_rate = document.getElementById("discount_rate").value / 100;
	var payment_type = document.getElementById("payment_type").value;
	var card_number = document.getElementById("card_number").value;
	var security_code = document.getElementById("security_code").value;
	
 
 /*
 Add alerts to span tags
 */
	var valid = true;
	
	if (first_name == "") {
		document.getElementById("err1").innerHTML = "Cannot Be Empty";
		valid = false;
	}
	
	if (last_name == "") {
		document.getElementById("err2").innerHTML = "Enter Last Name";
		valid = false;
	}
	
	if (product == "") {
		document.getElementById("err3").innerHTML = "Pick One";
		valid = false;
	}
	
	if (isNaN(quantity) || quantity < 1) {
		document.getElementById("err4").innerHTML = "Enter Number Here";
		valid = false;
    }
	
	if (order_Date == "") {
		document.getElementById("err5").innerHTML = "Enter Date";
		valid = false;
	}
	
	if (isNaN(unit_price) || unit_price < 0) {
		document.getElementById("err6").innerHTML = "Enter Price";
		valid = false;
    }
	
	if (isNaN(discount_rate) || discount_rate < 0) {
		document.getElementById("err7").innerHTML = "Enter Number";
		valid = false;
    }
	
	if (payment_type == "") {
		document.getElementById("err8").innerHTML = "Select One";
		valid = false;
    }
	
	if (isNaN(card_number) || card_number.length < 16) {
		document.getElementById("err9").innerHTML = "Enter 16-digits";
		valid = false;
	}
	
	if (isNaN(security_code) || security_code < 3) {
		document.getElementById("err10").innerHTML = "Enter 3-digits";
		valid = false;
    }

	if (valid) {
	   var discounted_amount = unit_price * discount_rate;
	   var order_total = quantity * (unit_price - discounted_amount); 
	   var myOut= "Thank you for ordering, " + first_name + " "; 
	   myOut += last_name + ". Your order total is $" + order_total +".";
	   document.getElementById("output").innerHTML = myOut;
	} else {
		document.getElementById("output").innerHTML = "";
	}
}

/*
Load function to web page.
*/
function init() {
   var order_button = document.getElementById("order_button");
   order_button.onclick= calcTotal;
}

window.onload = init;