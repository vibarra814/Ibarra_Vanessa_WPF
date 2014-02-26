//Vanessa Ibarra 2/25/2014 functions wacky

var cowWeight = prompt("please enter the weight of your cow in pounds") 
var lactation = prompt("Is your cow lactating? please answer yes or no")

var feed = function(cowWeight, lactation){
	var total = cowWeight * 0.25;
      return total;
}

var milk = function(cowWeight, lactation){
	var total2 = cowWeight * 0.50;
	return total2;
}

var total = feed(cowWeight, lactation);

var total2 = milk(cowWeight, lactation);

if(lactation === "no"){
	console.log("your cow needs " + total + " pounds of feed a day");
}
else if (lactation === "yes"){
	console.log("your cow needs " + total2 +" pounds of food a day");
}

