/*
element selectors = Methods used to target and manipulate HTML elements 
They allow you to select one or multiple HTML elements
from the DOM (Document Object Model)

1.document.getElementById()           // Element or Null
2.document.getElementsByClassName()   // Html collection
3.document.getElementsByTagName()     // Html collection
4.document.querySelector()            // Element or Null
5.document.querySelectorAll()         // Nodelist
*/

// Example 1

const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// Example 2

const fruits = document.getElementsByClassName("fruits");

// fruits[1].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// });

// Example 3

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "red";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "red";
// })

// Example 4

// const element = document.querySelector("h4");
// const element2 = document.querySelector("li");

// element.style.backgroundColor = "yellow";
// element2.style.backgroundColor = "red";

// Example 5

const fruits2 = document.querySelectorAll(".fruits");

// fruits2[1].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})