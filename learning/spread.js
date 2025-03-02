/*
spread operator = ... allows an iterable such as an array or string to be expanded into 
seperate element (unpacks the elements)
*/

let numbers = [13,134,14,53,54,33,66,22];
let maximun = Math.max(...numbers);
let minimun = Math.min(...numbers);

console.log(`Maximun number is ${maximun}`);
console.log(`Minimun number is ${minimun}`);

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrost", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);