//Vanessa Ibarra 2/25/2014 functions industry

var borderWidth = prompt("please enter your websites desired border width in inches");
var featureWidth = prompt("please enter your websites desired feature box width in inches");
var videoWidth = prompt("please enter your websites desired video width in inches");
var width = pixelWidth(borderWidth, FeatureWidth, videoWidth);

 function pixelWidth(borderWidth, featureWidth, videoWidth){
 	var pixelWidth = borderWidth + featureWidth + videoWidth;
 	return width;
 };
console.log("your websites total pixel width will be " + width);

var borderHeight
var featureHeight
var videoHeight