//Vanessa Ibarra 2/13/2014 expressions my yearly income



var weekly = prompt("I am calculating yearly income for 2013.Please enter weekly salary");//added the prompt to input eekly salary
var yearly = prompt("please enter number of weeks in 2013"); //added prompt to input weeks in the year
var extras = prompt("please enter any extra earnings"); // added prompt to add extra earnings

var result = weekly * yearly + Number(extras); // added proper equation to determine yearly income

var answer = "Your annual income is" + " " +result;// added what will appear in alert
alert (answer); //made alert to show the answer in a full sentence

