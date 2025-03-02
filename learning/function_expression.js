let try_recall = function (name){
    console.log(name);
}

let try_2 = (name) => {
    console.log(name);
}

let try_3 = name => {
    console.log(name);
}

let try_4 = number => number * 2;

try_recall("soknan");
try_2("sreypin");
try_3("phalla");
let save = try_4(2);
console.log(save);
console.clear();

/*
function declaration = define a reusable block of code that performs a specific task
*/

/*
function expression = a way to define function as values or variables
*/

const hello = function (){
    console.log("Hello !");
}

//hello();

setTimeout(function (){
    console.log("Hello !");
}, 3000);

const numbers = [1, 2, 3, 4, 5]//, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const roots = numbers.map(function (element){
    return Math.pow(element, (1/2));
});

const squares = numbers.map(function (element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function (element){
    return Math.pow(element, 3);
});


//console.log(roots);
console.log(squares);
console.log(cubes);

const evenNum = numbers.filter(function (element){
    return element % 2 === 0;
});

console.log(evenNum);

/*
1. Callbacks in asynchronous operations
2. Higher-Order Function
3. Closure
4. Event Listeners
*/

setTimeout(function (){
    console.log("Goodbye");
}, 5000);