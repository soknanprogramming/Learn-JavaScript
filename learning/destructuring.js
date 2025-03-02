/*
destructuring = extract values from arrays and objects 
then assign them to variables in a convenient way
[] = to perform array destructuring
{} = to perform object destructuring
*/


// example 1 swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
console.clear();

// example 2 element in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
//console.clear();

// example 3 assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
console.clear();

// example 4 extract values from objects

const person1 = {
    firstName: "Sok",
    lastName: "Nan",
    age: "20",
    job: "Programmer"
}

const person2 = {
    firstName: "Na",
    lastName: "Ry",
    age: "18"
}

// const {firstName, lastName, age, job} = person1;

// console.log(`Name is ${firstName} ${lastName}, Age is ${age} years old, The job is ${job}`);


const {firstName, lastName, age, job = "Lawer"} = person2;
console.log(`Name is ${firstName} ${lastName}, Age is ${age} years old, The job is ${job}`);

// example 5 destructuring in function paramenter

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Na",
    lastName: "Na",
    age: 30,
    job: "Teacher"
}

displayPerson(person2);