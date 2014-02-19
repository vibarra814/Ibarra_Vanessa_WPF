// Vanessa Ibarra 2/19/2014  assignment conditionals: personal

var computer = prompt("please enter the amount of desired computer"); //i added the prompt so a user can input the price of the computer they want
	if("") {prompt("you forgot to enter amount of desired computer")// added the prompt in case they didnt enter anything.
}

var payCheck = prompt( "plaese enter your pay check amount");// added prompt for user to input paycheck amount
	if ("") {prompt("you forgot to enter your pay check amount");// added prompt in case they did not enter anything
}

var other =  prompt("please enter total amount of other expenses this month");// added prompt for users to input their other expenses for the month
	if ("") {prompt ("you forgot to enter your total for other expenses this month");// added prompt incase user didnt input anything
}

if (computer < payCheck - other){ //added equation to figure if the user can afford computer this month
	console.log("you can buy that computer");// printed to console that they can afford computer
}else {
	console.log("sorry not this month");// printed to console if they cannot afford the computer 
}
