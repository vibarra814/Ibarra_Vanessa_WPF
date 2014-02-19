//conditional logic - operators

var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

// if the price of our phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && payCheck > 300){ 
	console.log("we can buy the phone");
}else {
	console.log("no phone for you!"); 
}