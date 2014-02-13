// Vanessa Ibarra 2/12/2014 expression worksheet


var priceTotal = 100.00; //original price
var discount = 25; //discount amount
var priceTax = priceTotal + 10; //tax amount
 
var resultTax = priceTax - discount;// total with tax and discount
var result = priceTotal - discount;// total with only discount
console.log(result, resultTax); //printing both totals in console
