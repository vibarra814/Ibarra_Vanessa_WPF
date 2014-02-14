//Vanessa Ibarra 2/3/2014 expressions calculating pixel/inches of an image


var pixelHeight = prompt(" I am calculating your images area in pixels. Please enter your images pixel height"); //added a prompt to input pixel height

var pixelWidth = prompt("please enter your images pixel width"); // added prompt to input pixel width

var pixelresult = "your area in pixels is" + " " + pixelHeight * pixelWidth; // added equation to solve for pixel area
 
alert (pixelresult); //added alert to display pixel area answer

var pixelHeight2 = prompt("Now we will calculate the area in inches. Please enter your pixel height again."); // added prompt to input pixel height again
var resolutionHeight = prompt("please enter your computer screens resolution height");// added prompt to input screen resolution height
 
 var inchesHeightresult = "your images height in inches is" + " " + resolutionHeight / pixelHeight2; // added equation to solve for height in inches
  
  alert (inchesHeightresult); //added alert to notify inches 

  var pixelWidth2 = prompt("Now please enter your images pixel width again");// added prompt to input pixel width
  var resolutionWidth = prompt("please enter your computer screens resolution width");// added prompt to input resolution width
  var inchesWidthresult = "your images width in inches is" + " " + resolutionWidth / pixelWidth2;// added equation to solve for width

  alert (inchesWidthresult);// added alert to notify of width in inches

var inchesWidth = resolutionWidth / pixelWidth2; // added equation to determine width in inches 
 
 var inchesHeight = resolutionHeight / pixelHeight2;// added equation to determine height in inches
  
  var inches = "so your area in inches is" + " " + Number(inchesWidth) * Number(inchesHeight);// added equation to determine area in inches 
   alert (inches); //added alert to norify of result in inches 