let try_recall = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];


let save = try_recall.map((element, index) =>{
    return element - index;
})

console.log(`${try_recall}`);
console.log(save);
console.clear();

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(`numbers is ${numbers}`);
console.log(`squares is ${squares}`);
console.log(`cubes is ${cubes}`);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

console.clear();

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpperCase = students.map(upperCase);
const studentsLowerCase = students.map(lowerCase);

console.log(studentsUpperCase);
console.log(studentsLowerCase);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

console.clear();

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const datesFormat = dates.map(formatDates);

console.log(datesFormat);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}