// vanessa Ibarra 2/18/2014 activity conditionals worksheet
// check the login 

var userName = prompt("please enter your user name");
 
if (userName === "pollywoggle"){
	var passWord = prompt("please enter password");
}else {alert ("you have entered an invalid username");
}

if (passWord === "giggle"){
	console.log("welcome!");
}else prompt("you have entered an invalid password");