// Assignment 2A: Practical exercise set 1 
// Student name: Aymon Husari 
// Student number: 16801325  
// Assignment due date: March 20, 2023 

// this is a javascript file linked to exercise1.html (quote form)

// this function is to validate the staff number
function staffNumberValidation() {
	// get the value of "staffnumber" input element from the DOM and assign it to the variable "staffNumber"
	var staffNumber = document.getElementById('staffnumber').value;
	// get the value of "errorID" input element from the DOM and assign it to the variable "staffNumberError"
	var staffNumberError = document.getElementById('errorID1');

// The following segment of code was modified from 
// https://www.youtube.com/watch?v=fz8bwvn9lA4&t=705s
	
	// if statement to check if the length of "staffNumber" is equal to zero
	if (staffNumber.length == 0) {
		
		// if the length is zero (meaning the field has no entry), set the text value of "staffNumberError" to the message below
		staffNumberError.innerHTML = 'Staff number is required';

		document.getElementById('staffnumber').classList.add("error-border");
		// return false to indicate that the form validation failed
		return false;
	}
// The following segment of code is modified from the following resources
// https://www.youtube.com/watch?v=rhzKDrUiJVk
// as well as
//https://regexr.com/

	// if statement to check if the variable's regular expression does not match the statement below ( 3 alphabetic letters followed by 4 numbers only)
	if (!staffNumber.match(/^[A-Za-z]{3}\d{4}$/)) {
// End of code segment modified from
// https://regexr.com/

		// set the error message if the regular expression does not match the input required
		staffNumberError.innerHTML = 'Staff number must be 3 alphabetic characters followed by 4 numbers, i.e (abc1234)';
		document.getElementById('staffnumber').classList.add("error-border");
		// return false to indicate that the validation failed
		return false;
	} else {
		// if the regular expression pattern matches the input required, clear the error message
		staffNumberError.innerHTML = '';
		document.getElementById('staffnumber').classList.remove("error-border");
		// return true to indicate that the validation is correct 
		return true;
	}
}
// end of code segment modified from
// https://www.youtube.com/watch?v=fz8bwvn9lA4&t=705s

// this function is to validate the customer's first name
function customerFNameValidation() {
	
	// get the value of "custfname" input element from the DOM and assign it to the variable "customerFirstName"
	var customerFirstName = document.getElementById('custfname').value;
	// get the value of "errorID2" input element from the DOM and assign it to the variable "customerFirstNameError"
	var customerFirstNameError = document.getElementById('errorID2');

	// if statement to check if the length of "customerFirstName" is equal to zero
	if (customerFirstName.length == 0) {
		// if the length is zero (meaning the field has no entry), set the text value of "customerFirstNameError" to the message below
		
		customerFirstNameError.innerHTML = 'Customer first name is required';
		document.getElementById('custfname').classList.add("error-border");
		// return false to indicate that the validation failed
		return false;
	}
// The following segment of code is modified from the following resources
// https://www.youtube.com/watch?v=rhzKDrUiJVk
// as well as
// https://regexr.com/

	// if statement to check if the variable's regular expression does not match the statement below (alphabtic and hiphen characters only)
	if (!customerFirstName.match(/^[a-zA-Z\s-]+$/)) {
// End segment of modified code
// https://regexr.com/

		// // set the error message if the regular expression does not match the input required
		customerFirstNameError.innerHTML = 'Please enter a valid first name';
		document.getElementById('custfname').classList.add("error-border");

		// return false to indicate that the validation failed
		return false;
	} else {
		// if the regular expression pattern matches the input required, clear the error message
		customerFirstNameError.innerHTML = '';
		document.getElementById('custfname').classList.remove("error-border");

		// return true to indicate that the validation is correct
		return true;
	}
}


// this function is to validate the customer's last name
function customerLNameValidation() {
	var customerLastName = document.getElementById('custlname').value;
	var customerLastNameError = document.getElementById('errorID3');

	if (customerLastName.length == 0) {
		customerLastNameError.innerHTML = 'Customer last name is required';
		document.getElementById('custlname').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://www.youtube.com/watch?v=rhzKDrUiJVk
// as well as
//https://regexr.com/
	if (!customerLastName.match(/^[a-zA-Z\s-]+$/)) {
// End of code segment modified from
// https://regexr.com/
		customerLastNameError.innerHTML = 'Please enter a valid last name';
		document.getElementById('custlname').classList.add("error-border");
		return false;
	} else {
		customerLastNameError.innerHTML = '';
		document.getElementById('custlname').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the first street address
function customerst1Validation() {
	var customerst1 = document.getElementById('st1address').value;
	var customerst1Error = document.getElementById('errorID4');

	if (customerst1.length == 0) {
		customerst1Error.innerHTML = 'Address is required';
		document.getElementById('st1address').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryid=7&p=2
	if (!customerst1.match(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/)) {
// End of code segment modified from
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryid=7&p=2
		customerst1Error.innerHTML = 'Please enter a valid street address';
		document.getElementById('st1address').classList.add("error-border");
		return false;
	} else {
		customerst1Error.innerHTML = '';
		document.getElementById('st1address').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the second street address
function customerst2Validation() {
	var customerst2 = document.getElementById('st2address').value;
	var customerst2Error = document.getElementById('errorID5');

	// street 2 address field entry is not requied and can be skipped if not needed
	if (customerst2.trim() == '') {
		customerst2Error.innerHTML = '';
		document.getElementById('st2address').classList.remove("error-border");
		return true;
	}

// The following segment of code is modified from the following resources
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryid=7&p=2
	 else if (!customerst2.match(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/)) {
// End of code segment modified from
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryid=7&p=2
		customerst2Error.innerHTML = 'Please enter a valid street address';
		document.getElementById('st2address').classList.add("error-border");
		return false;
	} else {
		customerst2Error.innerHTML = '';
		document.getElementById('st2address').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the suburb
function suburbValidation() {
	var suburb = document.getElementById('suburb').value;
	var suburbError = document.getElementById('errorID6');

	if (suburb.length == 0) {
		suburbError.innerHTML = 'Subrub is required';
		document.getElementById('suburb').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://www.youtube.com/watch?v=rhzKDrUiJVk
// as well as
//https://regexr.com/
	if (!suburb.match(/^[a-zA-Z\s-]+$/)) {
// End of code segment modified from
// https://regexr.com/
		suburbError.innerHTML = 'Please enter a valid suburb';
		document.getElementById('suburb').classList.add("error-border");
		return false;
	} else {
		suburbError.innerHTML = '';
		document.getElementById('suburb').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the postcode
function postcodeValidation() {
	var postcode = document.getElementById('postcode').value;
	var postcodeError = document.getElementById('errorID7');

	if (postcode.length == 0) {
		postcodeError.innerHTML = 'Postcode is required';
		document.getElementById('postcode').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://www.youtube.com/watch?v=rhzKDrUiJVk
// as well as
//https://regexr.com/
	if (!postcode.match(/^\d{4}$/)) {
// End of code segment modified from
// https://regexr.com/
		postcodeError.innerHTML = 'Please enter a postcode';
		document.getElementById('postcode').classList.add("error-border");
		return false;
	} else {
		postcodeError.innerHTML = '';
		document.getElementById('postcode').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the phone number
function phoneValidation() {
	var phoneNumber = document.getElementById('phonenumber').value;
	var phoneNumberError = document.getElementById('errorID8');
	var tick = document.getElementById('tick08');

	if (phoneNumber.length == 0) {
		phoneNumberError.innerHTML = 'Phone number is required';
		document.getElementById('phonenumber').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryId=7
	if (!phoneNumber.match(/^\d{10}$/)) {
// End of code segment modified from
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=6&categoryId=7
		phoneNumberError.innerHTML = 'Please enter a valid phone number';
		document.getElementById('phonenumber').classList.add("error-border");
		return false;
	} else {
		phoneNumberError.innerHTML = '';
		document.getElementById('phonenumber').classList.remove("error-border");
		return true;
	}
}

// this function is to validate the email address
function emailValidation() {
	var email = document.getElementById('email').value;
	var emailError = document.getElementById('errorID9');

	if (email.length == 0) {
		emailError.innerHTML = 'Email is required';
		document.getElementById('email').classList.add("error-border");
		return false;
	}
// The following segment of code is modified from the following resources
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=0&categoryId=1
	if (!email.match(/^.+@[^\.].*\.[a-z]{2,}$/)) {
// End of code segment modified from
// https://regexlib.com/DisplayPatterns.aspx?cattabindex=0&categoryId=1
		emailError.innerHTML = 'Please enter a valid Email address';
		document.getElementById('email').classList.add("error-border");
		return false;
	} else {
		emailError.innerHTML = '';
		document.getElementById('email').classList.remove("error-border");
		return true;
	}
}

// this function is for product 1 ID
function productIDValidation() {
	var productID = document.getElementById('product_id_1').value;
	var productIDError = document.getElementById('errorID10');

	if (productID.length == 0) {
		productIDError.innerHTML = 'Product ID is required';
		document.getElementById('product_id_1').classList.add("error-border");
		return false;
	}  else {
		productIDError.innerHTML = '';
		document.getElementById('product_id_1').classList.remove("error-border");
		return true;
	}
}

// this function is for product 1 description
function productDescriptionValidation() {
	var productDescription = document.getElementById('product_name_1').value;
	var productDescriptionError = document.getElementById('errorID11');

	if (productDescription.length == 0) {
		productDescriptionError.innerHTML = 'Description is required';
		document.getElementById('product_name_1').classList.add("error-border");
		return false;
	}
	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (!productDescription.match(/^.{0,60}$/)) {
	// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/

		productDescription.innerHTML = 'Maximum 60 characters';
		document.getElementById('product_name_1').classList.add("error-border");
		return false;
	}  else {
		productDescriptionError.innerHTML = '';
		document.getElementById('product_name_1').classList.remove("error-border");
		return true;
	}
}


// this function is for product 1 quantity
function productQuantityValidation() {
	var productQuantity = document.getElementById('quantity_1').value;
	var productQuantityError = document.getElementById('errorID12');

	if (productQuantity.length == 0) {
		productQuantityError.innerHTML = 'Quantity is required';
		document.getElementById('quantity_1').classList.add("error-border");
		return false;
	}  
		// this segment of code has been modified from the following resources 
		// https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/
		if (!productQuantity.match(/^(?!0+(\.0*)?$)\d+(\.\d{1,2})?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		productQuantityError.innerHTML = 'Quantity must be a positive number';
		document.getElementById('quantity_1').classList.add("error-border");
		return false;

	} else {
		productQuantityError.innerHTML = '';
		document.getElementById('quantity_1').classList.remove("error-border");
		return true;
	}
}

// this function is for product 1 price
function productPriceValidation() {
	var productPrice = document.getElementById('unit_price_1').value;
	var productPriceError = document.getElementById('errorID13');

	if (productPrice.length == 0 || productPrice == 0 ) {
		productPriceError.innerHTML = 'Price is required';
		document.getElementById('unit_price_1').classList.add("error-border");
		return false;
	}
		// this segment of code has been modified from the following resources 
		// https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/
		if (!productPrice.match(/^\d+(\.\d{1,2})?$/)) {
		
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/
		productPriceError.innerHTML = 'Price must be a positive number';
		document.getElementById('unit_price_1').classList.add("error-border");
		return false;

		}  else {
		productPriceError.innerHTML = '';
		document.getElementById('unit_price_1').classList.remove("error-border");
		return true;
	}
}

// this code calculates line 1 total
function calculatelineTotal() {
	var productPrice = document.getElementById('unit_price_1').value;
	var productQuantity = document.getElementById('quantity_1').value;
	var lineTotal = productPrice*productQuantity;

	document.getElementById('line_total_1').value = lineTotal;
}

// no functions have been added for 'productID and product description for line 2,3,4 and 5'

// set the functions for line 2 of products

// this function is for product 2 quantity
function product2QuantityValidation() {
	var product2Quantity = document.getElementById('quantity_2').value;
	var product2QuantityError = document.getElementById('errorID17');
	var product2QuantityValue = product2Quantity.value;

	if (product2Quantity === '') {
		product2Quantity = 0; // set the input to zero if there is no input
		document.getElementById('quantity_2').value = product2Quantity;
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product2Quantity === '' || product2Quantity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product2QuantityError.innerHTML = '';
		document.getElementById('quantity_2').classList.remove("error-border");
		return true;
	}  else {
		product2QuantityError.innerHTML = 'Quantity must be a positive number';
		document.getElementById('quantity_2').classList.add("error-border");
		return false;
	}
}

// this function is for the price of product 2
function product2PriceValidation() {
	var product2Price = document.getElementById('unit_price_2').value;
	var product2PriceError = document.getElementById('errorID18');
	var product2PriceValue = product2Price.value;

	if (product2Price === '') {
		product2Price = 0; // set the input to zero if there is no input 
		document.getElementById('unit_price_2').value = product2Price; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product2Price === '' || product2Price.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product2PriceError.innerHTML = '';
		document.getElementById('unit_price_2').classList.remove("error-border");
		return true;
	}  else {
		product2PriceError.innerHTML = 'Price must be a positive number';
		document.getElementById('unit_price_2').classList.add("error-border");
		return false;
	}
}

// this code calculates line 2 total
function calculateline2Total() {
	var product2Price = parseFloat(document.getElementById('unit_price_2').value);
	var product2Quantity = parseFloat(document.getElementById('quantity_2').value);
	var line2Total = product2Price*product2Quantity;
	
	document.getElementById('line_total_2').value = line2Total;
}

// set the functions for line 3 of products

// this function is for product 3 quantity
function product3QuantityValidation() {
	var product3Quantity = document.getElementById('quantity_3').value;
	var product3QuantityError = document.getElementById('errorID22');

	if (product3Quantity === '') {
		product3Quantity = 0; // set the input to zero if there is no input 
		document.getElementById('quantity_3').value = product3Quantity; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product3Quantity === '' || product3Quantity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product3QuantityError.innerHTML = '';
		document.getElementById('quantity_3').classList.remove("error-border");
		return true;
	}  else {
		product3QuantityError.innerHTML = 'Quantity must be a positive number';
		document.getElementById('quantity_3').classList.add("error-border");
		return false;
	}
}

// this function is for product 3 price
function product3PriceValidation() {
	var product3Price = document.getElementById('unit_price_3').value;
	var product3PriceError = document.getElementById('errorID23');

	if (product3Price === '') {
		product3Price = 0; // set the input to zero if there is no input 
		document.getElementById('unit_price_3').value = product3Price; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product3Price === '' || product3Price.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product3PriceError.innerHTML = '';
		document.getElementById('unit_price_3').classList.remove("error-border");
		return true;
	}  else {
		product3PriceError.innerHTML = 'Price must be a positive number';
		document.getElementById('unit_price_3').classList.add("error-border");
		return false;
	}
}

// this code calculates line 3 total
function calculateline3Total() {
	var product3Price = document.getElementById('unit_price_3').value;
	var product3Quantity = document.getElementById('quantity_3').value;
	var line3Total = product3Price*product3Quantity;

	document.getElementById('line_total_3').value = line3Total;
}

// set the functions for line 4 of products

// this fucntion is for the quantity of product 4
function product4QuantityValidation() {
	var product4Quantity = document.getElementById('quantity_4').value;
	var product4QuantityError = document.getElementById('errorID27');

	if (product4Quantity === '') {
		product4Quantity = 0; // set the input to zero if there is no input 
		document.getElementById('quantity_4').value = product4Quantity; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product4Quantity === '' || product4Quantity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product4QuantityError.innerHTML = '';
		document.getElementById('quantity_4').classList.remove("error-border");
		return true;
	}  else {
		product4QuantityError.innerHTML = 'Quantity must be a positive number';
		document.getElementById('quantity_4').classList.add("error-border");
		return false;
	}
}

// this function is for the price input for product 4
function product4PriceValidation() {
	var product4Price = document.getElementById('unit_price_4').value;
	var product4PriceError = document.getElementById('errorID28');

	if (product4Price === '') {
		product4Price = 0; // set the input to zero if there is no input 
		document.getElementById('unit_price_4').value = product4Price; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product4Price === '' || product4Price.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product4PriceError.innerHTML = '';
		document.getElementById('unit_price_4').classList.remove("error-border");
		return true;
	}  else {
		product4PriceError.innerHTML = 'Price must be a positive number';
		document.getElementById('unit_price_4').classList.add("error-border");
		return false;
	}
}

// this function calculates line 4 total
function calculateline4Total() {
	var product4Price = document.getElementById('unit_price_4').value;
	var product4Quantity = document.getElementById('quantity_4').value;
	var line4Total = product4Price*product4Quantity;

	document.getElementById('line_total_4').value = line4Total;
}

// set the functions for line 5 of products

// this function is for the quality input for product 5
function product5QuantityValidation() {
	var product5Quantity = document.getElementById('quantity_5').value;
	var product5QuantityError = document.getElementById('errorID32');

	if (product5Quantity === '') {
		product5Quantity = 0; // set the input to zero if there is no input 
		document.getElementById('quantity_5').value = product5Quantity; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product5Quantity === '' || product5Quantity.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/

		product5QuantityError.innerHTML = '';
		document.getElementById('quantity_5').classList.remove("error-border");
		return true;
	}  else {
		product5QuantityError.innerHTML = 'Quantity must be a positive number';
		document.getElementById('quantity_5').classList.add("error-border");
		return false;
	}
}

// this function is for the price input for product 5
function product5PriceValidation() {
	var product5Price = document.getElementById('unit_price_5').value;
	var product5PriceError = document.getElementById('errorID33');

	if (product5Price === '') {
		product5Price = 0; // set the input to zero if there is no input 
		document.getElementById('unit_price_5').value = product5Price; // update input field to zero
	}

	// this segment of code has been modified from the following resources 
	// https://www.youtube.com/watch?v=sa-TUpSx1JA
	// and https://regexr.com/
	if (product5Price === '' || product5Price.match(/^(?!0\d)\d*(\.\d+)?$/)) {
		// end of code segment modified from https://www.youtube.com/watch?v=sa-TUpSx1JA
		// and https://regexr.com/
		
		product5PriceError.innerHTML = '';
		document.getElementById('unit_price_5').classList.remove("error-border");
		return true;
	}  else {
		product5PriceError.innerHTML = 'Price must be a positive number';
		document.getElementById('unit_price_5').classList.add("error-border");
		return false;
	}
}

// this function calculates line 5 total
function calculateline5Total() {
	var product5Price = document.getElementById('unit_price_5').value;
	var product5Quantity = document.getElementById('quantity_5').value;
	var line5Total = product5Price*product5Quantity;

	document.getElementById('line_total_5').value = line5Total;
}

// this function calculates the sum of all totals into the subtotal
function calculateSubTotal() {
	var lineTotal = parseFloat(document.getElementById('line_total_1').value);
	var line2Total = parseFloat(document.getElementById('line_total_2').value);
	var line3Total = parseFloat(document.getElementById('line_total_3').value);
	var line4Total = parseFloat(document.getElementById('line_total_4').value);
	var line5Total = parseFloat(document.getElementById('line_total_5').value);

	var subTotal = (lineTotal + line2Total + line3Total + line4Total + line5Total);

	document.getElementById('subtotal').value = subTotal;
}

// this function calculates the gst
function calculateGST() {
	var subTotal = parseFloat(document.getElementById('subtotal').value);
	var GST = subTotal*0.1;

	document.getElementById('GST').value = GST;
}

// this function calculates the total
function calculateTotal() {
	var subTotal = parseFloat(document.getElementById('subtotal').value);
	var GST = parseFloat(document.getElementById('GST').value);
	var total = subTotal + GST;

	document.getElementById('total').value = total.toFixed(2);
}

// this function calculates the total due
function calculateTotalDue() {
	var total = parseFloat(document.getElementById('total').value);
	var depositPaid = parseFloat(document.getElementById('depositpaid').value);
	var totalDue = total - depositPaid;

	document.getElementById('totaldue').value = totalDue.toFixed(2);
}

// assign the element with id input 'form' to the new variable 'form'
var form = document.getElementById('form');
// add an event listener to the form that activates upon submission
form.addEventListener('submit', function(event) {

	// assign errorID50 to the variable submitError
	var submitError = document.getElementById('errorID50');

	// if statement to test if any of the functions below return false
	if (!staffNumberValidation() || !customerFNameValidation() || !customerLNameValidation() || !customerst1Validation()
		|| !customerst2Validation() || !suburbValidation() || !postcodeValidation() || !phoneValidation()
		|| !emailValidation() || !productIDValidation() || !productDescriptionValidation() || !productQuantityValidation()
		|| !productPriceValidation() || !product2QuantityValidation() || !product2PriceValidation() || !product3QuantityValidation()
		|| !product2PriceValidation() || !product5QuantityValidation() || !product5PriceValidation() ){
		
		// if any of the functions return false, display the error message next to submit button
		submitError.innerHTML = 'Please review the entries above, fix the errors and try again';
		
		// prevent the default setting of form from submitting
		event.preventDefault();
	} else {
		// if none of the functions above return false, set the contents of submitError to an empty string
		submitError.innerHTML = '';
	}
});
