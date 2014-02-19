// Vanessa Ibarra 2/19/2014  assignment conditionals:wacky

//added a prompt for users to input their age
var age = prompt("I am recommending cartoons to people. \n Please enter your age here. ");
// added variable for show 
var show; 
// added ternary to give one recomendation to all over 16 and one to all under 16
show = (age < 16) ? "I recomenmend you watch steven universe" : "I recommend you watch rick and morty";
//added a prompt in case nothing is entered
if (age === ""){prompt("you forgot to enter your age, please refresh page")}
//print recomendation to console
console.log(show);