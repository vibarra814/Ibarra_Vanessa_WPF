//Vanessa Ibarra 2/13/2014 expressions my yearly income



var weekly = prompt("I am calculating yearly income for 2013.Please enter weekly salary");//added the prompt to input eekly salary
var yearly = prompt("please enter number of weeks in 2013"); //
var extras = prompt("please enter any extra earnings");

var result = weekly * yearly + Number(extras);

var answer = "Your annual income is" + result;
alert (result);

