//Vanessa Ibarra 2/13/2014 expressions wacky

var calPerday = prompt("I am calculating the amount of cheat calories you have left today. \nPlease enter the amount of calories you are allowed daily");

var calToday = prompt("Please enter number of calories you consumed today");

var cheatCal = "The amount of daily cheat calories you have today are" + " " + calPerday - calToday;
 
var calBurned = prompt("please enter calories burned today");
 
 cheatCal += calBurned;

console.log(cheatCal);
