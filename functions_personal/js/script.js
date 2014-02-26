//Vanessa Ibarra 2/25/2014 functions personal

//i want to calculate  my BMI
var result = bmi(height, weight);

var height = prompt("please enter your weight in pounds");

var weight = prompt("please enter you height in inches");
 

function bmi (height, weight){
	var bmi = weight / height * height *703;
	return bmi;
	}


console.log("your body mass index is " + result);

  if(result < 18){
  	console.log("you are considered underweight.");
  }
  if(result === 19 || result === 20 || result===21 || result=== 22 || result === 23 || result === 24){
  	console.log("you are considerd healthy.");
  }
  if(result === 25 || result === 26 || result === 27 || result ===28 || result === 29){
  	console.log("you are considered overweight.");
  }
  else{
  	console.log("you are considered obese");
  }

