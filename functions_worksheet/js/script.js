//Vanessa Ibarra 2/24/2014 functions worksheet

var total = stingstoKill(100, 8.666666667);

function stingstoKill(vicWeight, stingsPerlb){
	
    var stings = vicWeight * stingsPerlb;
	return stings;
}
console.log("It takes " + total + " stings to kill an animal that weighs " + vicWeight +" pounds.");