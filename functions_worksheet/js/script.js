//Vanessa Ibarra 2/24/2014 functions worksheet
// to figure out how many stings it takes to kill an animal multiply its weight by 8.666666667
var total = stingstoKill(100, 8.666666667);

function stingstoKill(vicWeight, stingsPerlb){
	
    var stings = vicWeight * stingsPerlb;
	return stings;
}
console.log("It takes " + total + " stings to kill this animal");