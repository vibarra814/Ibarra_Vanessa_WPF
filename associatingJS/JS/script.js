//conditional logic - else if

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45;

if(kidHeight  > minHeight){
	console.log("you can ride the coaster!");
}else if(kidHeight > wParentHeight){
	console.log("you can ride, but only with a parent");
}else{
	console.log("sorry you've got some growing to do!");
}
