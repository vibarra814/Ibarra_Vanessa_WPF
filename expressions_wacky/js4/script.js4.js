//Vanessa Ibarra 2/13/2014 expressions wacky

var calPerday = prompt("I am calculating the amount of cheat calories you have left today. \nPlease enter the amount of calories you are allowed daily");

var calToday = prompt("Please enter number of calories you consumed today"); 

var calBurned = prompt("please enter calories burned today"); 
 
var cheatCal =  Number(calPerday) - Number(calToday); 

cheatCal += Number(calBurned); 
 
alert("you have" + " " + (cheatCal) + " " + "left today."); 
