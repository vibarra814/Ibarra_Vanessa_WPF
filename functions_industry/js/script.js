//Vanessa Ibarra 2/25/2014 functions industry

var borderWidth = prompt("please enter your websites desired border width in pixels");
var featureWidth = prompt("please enter your websites desired feature box width in pixels");
var videoWidth = prompt("please enter your websites desired video width in pixels");
var width = pixelWidth(borderWidth, FeatureWidth, videoWidth);

 function pixelWidth(borderWidth, featureWidth, videoWidth){
 	var pixelWidth = borderWidth + featureWidth + videoWidth;
 	return width;
 };
console.log("your websites total pixel width will be " + width);

var borderHeight = prompt("please enter your websites desired border height in pixels");
var featureHeight = prompt("please eneter your websites desired feature box height in pixels");
var videoHeight = prompt("please enter your websites desired video height in pixels");
var height = pixelHeight(borderHeight, geatureHeight, videoHeight);

function pixelHeight(borderHeight, geatureHeight, videoHeight){
	varpixelHeight = borderHeight = featureHeight + videoHeight;
	return height
}
console.log("your websites total pixel height will be " + height);
}