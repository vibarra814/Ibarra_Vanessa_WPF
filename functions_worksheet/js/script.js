//Vanessa Ibarra 2/24/2014 functions worksheet
// to figure out how many stings it takes to kill an animal multiply its weight by 8.666666667
var total = stingstoKill(100, 8.666666667);// created a variable for the total and added 100 and 8.666666667 as arguments

function stingstoKill(vicWeight, stingsPerlb){ //created function to figure how many stings it will take to kill animal and added parameters
	
    var stings = vicWeight * stingsPerlb;// actual equation to figure how many stings it takes
	return stings; //instructed function to return  to total
}
console.log("It takes " + total + " stings to kill this animal");