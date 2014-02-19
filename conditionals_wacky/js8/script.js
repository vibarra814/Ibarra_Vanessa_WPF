// Vanessa Ibarra 2/19/2014  assignment conditionals:wacky


var age = prompt("I am recommending cartoons to people. \n Please enter your age here. ");


var show; 

show = (age < 16) ? "I recomenmend you watch steven universe" : "I recommend you watch rick and morty";

if (age === ""){prompt("you forgot to enter your age")}
console.log(show);