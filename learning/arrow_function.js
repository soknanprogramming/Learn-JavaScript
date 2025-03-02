/*
arrow function = a consice way to write function expressions 
good for sample function that you use only once 
(paramenters) => some code
*/


// const hello = () => console.log("Hello");

const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

hello("Bro Code", 30);

setTimeout(() => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNum = numbers.filter((element) => element % 2 === 0);
const oddNum = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator += element);

console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(total);