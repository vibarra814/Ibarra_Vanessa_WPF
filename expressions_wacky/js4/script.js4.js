//Vanessa Ibarra 2/13/2014 expressions wacky

var calPerday = prompt("I am calculating the amount of cheat calories you have left today. \nPlease enter the amount of calories you are allowed daily");//added prompt to input amount of calories allowed a day

var calToday = prompt("Please enter number of calories you consumed today"); // added prompt to input number calories eaten

var calBurned = prompt("please enter calories burned today"); // added prompt to input number of calories burned
 
var cheatCal = "The amount of daily cheat calories you have today are" + " " + Number(calPerday) - Number(calToday); //added equation to figure out amount of cheat calories left (possible mistake in this line)
 
cheatCal += Number(calBurned); //added equation to figure cheat calories plus calories burned (possible mistake in this line)

 console.log(cheatCal); // added the answer for total calories left to console (did not work) (possible mistake in this line?????????help)
