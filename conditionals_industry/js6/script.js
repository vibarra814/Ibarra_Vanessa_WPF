//Vanessa Ibarra 2/19/2014 assignment conditionals: industry

var langPref = prompt("I am deciding on new pocket refrence guides for our office. \n please input whether you prefer javascript or VBscript.");//created variable for a prompt for users to input their lang. pref.
 	if (langPref === "javascript") {// added equation if they choose java 
	console.log ("thanks. your vote for the javascript pocket guide has been  entered");// if java is chosen console will print this 
	} else if(langPref === ("") ){prompt("you forgot to enter a prefrence");// added prompt to show in case nothing is entered
	}
 	else {
 	console.log ("thanks. your vote for the VBscript pocket guide has been entered"); //entered equation to solve  if java is not picked but something is entered
 	}