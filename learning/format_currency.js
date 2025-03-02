/*
.toLocaleString() = returns a string with a language sensitive representation of a number
IntL.NumberFormat();
number.toLocateString("locale", {options});
'locale' = specify the language (undefined = defualt set in browser)
'options' = object with formatting options
*/

let number = 123456.789;
console.log(typeof number);

numberString = number.toLocaleString(undefined);

console.log(typeof numberString);
console.log(numberString);

numberString = number.toLocaleString("de-DE");

console.log(numberString);

numberString = number.toLocaleString("en-US");

console.log(numberString);

numberString = number.toLocaleString("de-DE");

console.log(numberString);

numberString = number.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(numberString);

numberString = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});

console.log(numberString);

numberString = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(numberString);