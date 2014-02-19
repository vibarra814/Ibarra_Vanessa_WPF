// vanessa Ibarra 2/18/2014 activity conditionals worksheet
// last chance for gas

var mpg = 35;
var percentGas = 20;
var capacity = 12;
var gas = capacity * percentGas /100;

if(mpg * gas >= 200){
console.log("yes, you can make it with out stopping for gas!");
}else{
console.log("you only have" + " " +(gas)+ " " + "gallons of gas in your tank, better get gas now while you can!");
}
