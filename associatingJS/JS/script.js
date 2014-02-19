//conditional logic - operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true ;

// if the price of our phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery ){ 
	console.log("we can buy the phone");
}else {
	console.log("no phone for you!"); 
}