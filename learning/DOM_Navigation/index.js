/*
DOM navigation = The process of navigation through the structure of an 
HTML document using JavaScript

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/

// Example 1 .firstElementChild

// const element = document.getElementById("fruit-list");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

// Example 2 .nextElementSibling

// const element = document.getElementById("cake");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// Example 3 .previousElementSibling

// const element = document.getElementById("vegetables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// Example 4 .parentElement

// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// Example 5 .children

const element = document.getElementById("vegetables");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "red";
})