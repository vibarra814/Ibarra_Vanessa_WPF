//Vanessa Ibarra 2/3/2014 expressions calculating pixel/inches of an image


var pixelHeight = prompt(" I am calculating your images are in pixels. Please enter your images pixel height");

var pixelWidth = prompt("please enter your images pixel width");

var pixelresult = "your are in pixels is" + " " + pixelHeight * pixelWidth;
 
alert (pixelresult);

var pixelHeight2 = prompt("Now we will calculate the area in inches. Please enter your pixel height again.");
var resolutionHeight = prompt("please enter your computer screens resolution height");
 
  inchesHeightresult = "your images height in inches is" + " " + Number"pixelHeight2" / Number"resolutionHeight";
  alert (inchesHeightresult);