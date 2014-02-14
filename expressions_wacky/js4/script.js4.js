//Vanessa Ibarra 2/13/2014 expressions wacky

var calPerday = prompt("I am calculating the amount of cheat calories you have left today. \nPlease enter the amount of calories you are allowed daily");//added prompt to input amount of calories allowed a day

var calToday = prompt("Please enter number of calories you consumed today");

var calBurned = prompt("please enter calories burned today");
 
var cheatCal = "The amount of daily cheat calories you have today are" + " " + Number(calPerday) - Number(calToday);
 
cheatCal += calBurned;

 console.log(cheatCal);
