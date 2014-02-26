//Vanessa Ibarra 2/25/2014 functions industry

var borderWidth = prompt("please enter your websites desired border width in pixels");
var featureWidth = prompt("please enter your websites desired feature box width in pixels");
var videoWidth = prompt("please enter your websites desired video width in pixels");
var widthTotal = pixelWidth(borderWidth, featureWidth, videoWidth);

 function pixelWidth(borderWidth, featureWidth, videoWidth){
 	var pixelWidth = Number(borderWidth) + Number(featureWidth) + Number(videoWidth);
 	return pixelWidth;
 }
(widthTotal < 1000) ? alert("your websites total pixel width will be " + widthTotal) : alert("your pixels exceed limit");

var borderHeight = prompt("please enter your websites desired border height in pixels");
var featureHeight = prompt("please eneter your websites desired feature box height in pixels");
var videoHeight = prompt("please enter your websites desired video height in pixels");
var heightTotal = pixelHeight(borderHeight, featureHeight, videoHeight);

function pixelHeight(borderHeight, featureHeight, videoHeight){
	var pixelHeight = Number(borderHeight) + Number(featureHeight) + Number(videoHeight);
	return pixelHeight
}
(heightTotal < 2000) ? alert("your websites total pixel height will be " + heightTotal) : alert("your pixel height exceeds the limit");

