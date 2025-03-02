/*
forEach = method used to iterate over the elements of an array 
and apply a specified function (callback) to each element

array.forEach(callback);
element, index, array are provided
*/

const try_recall = [1, 3, 5, 7, 9];

try_recall.forEach((element, index, array) =>{
    console.log(`element is ${element} and index is ${index} of array ${array}`);
    console.log(array);
})


let numbers = [1, 2, 3, 4, 5];

console.clear();
numbers.forEach(display);
console.log("==========================");
numbers.forEach(double);
numbers.forEach(display);
console.clear();

function double(element, index, array){
    array[index] = element * 2;
}
function display(element){
    console.log(element);
}

let fruits = ["apple", "orAnge", "banana", "coconut"];

function display2(element, index){
    console.log(`${index + 1}. ${element}`);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

fruits.forEach(capitalize);
fruits.forEach(display2);