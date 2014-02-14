//Vanessa Ibarra 2/13/2014 expressions wacky

var calPerday = prompt("I am calculating the amount of cheat calories you have left today. \nPlease enter the amount of calories you are allowed daily");//added prompt to input calories allowed per day

var calToday = prompt("Please enter number of calories you consumed today"); //added prompt to input calories eaten today

var calBurned = prompt("please enter calories burned today"); //added prompt to input calories burned today
 
var cheatCal =  Number(calPerday) - Number(calToday); // added equation to calculate cheat calories eaten

cheatCal += Number(calBurned); //added equation to calculate cheat calories earned after excersise
 
alert("you have" + " " + (cheatCal) + " " + " cheat calories left today."); //added alert to show how many cheat calories you hve left in the day
