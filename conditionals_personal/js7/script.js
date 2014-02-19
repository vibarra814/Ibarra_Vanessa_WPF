// Vanessa Ibarra 2/19/2014  assignment conditionals: personal

var computer = prompt("please enter the amount of desired computer");
	if("") {prompt("you forgot to enter amount of desired computer")
}

var payCheck = prompt( "plaese enter your pay check amount");
	if ("") {prompt("you forgot to enter your pay check amount");
}

var other =  prompt("please enter total amount of other expenses this month");
	if ("") {prompt ("you forgot to enter your total for other expenses this month");
}

if (computer < payCheck - other){
	console.log("you can buy that computer");
}else {
	console.log("sorry not this month");
}
