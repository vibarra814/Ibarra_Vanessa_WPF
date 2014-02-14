//Vanessa Ibarra 2/3/2014 expressions calculating pixel/inches of an image


var pixelHeight = prompt(" I am calculating your images are in pixels. Please enter your images pixel height");

var pixelWidth = prompt("please enter your images pixel width");

var pixelresult = "your area in pixels is" + " " + pixelHeight * pixelWidth;
 
alert (pixelresult);

var pixelHeight2 = prompt("Now we will calculate the area in inches. Please enter your pixel height again.");
var resolutionHeight = prompt("please enter your computer screens resolution height");
 
 var inchesHeightresult = "your images height in inches is" + " " + resolutionHeight / pixelHeight2;
  
  alert (inchesHeightresult);

  var pixelWidth2 = prompt("Now please enter your images pixel width again");
  var resolutionWidth = prompt("please enter your computer screens resolution width");
  var inchesWidthresult = "your images width in inches is" + " " + resolutionWidth / pixelWidth2;

  alert (inchesWidthresult);

var inchesWidth = resolutionWidth / pixelWidth2;
 
 var inchesHeight = resolutionHeight / pixelHeight2;
  
  var inches = "so your area in inches is" + " " + Number(inchesWidth) * Number(inchesHeight);
   alert (inches);