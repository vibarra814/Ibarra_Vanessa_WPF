//Vanessa Ibarra 2/25/2014 functions personal

//i want to calculate  my BMI
var Height = prompt("please enter your weight in pounds");

var weight = prompt("please enter you height in inches");

function bmi (weight, height){
	var bmiHeight = height * height ;
	var total = weight / bmiHeight * 703;
	console.log("your body mass index is " + total);
    
}
  if(total < 18){
  	console.log("you are considered underweight.");
  }
  if(total = 19 ||total = 20 ||total = 21 ||total = 22 ||total = 23 ||total = 24){
  	console.log("you are considerd healthy.");
  }
  if(total = 25 || toalt = 26 || total = 27 || total = 28 || toal = 29){
  	console.log("you are considered overweight.");
  }
  else{
  	console.log("you are considered obese");
  }

