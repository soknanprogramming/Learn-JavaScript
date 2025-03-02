//try recall

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersEvern = numbers.filter((element) => {
    return element % 2 === 0 ? true : false;
})
const numbersOdd = numbers.filter((element) => {
    return element % 2 !== 0 ? true : false;
})

console.log(numbersEvern);
console.log(numbersOdd);
console.clear();

/*
.filter() = creates a new array by filtering out elements
*/

let num = [1, 2, 3, 4, 5, 6, 7];
let evenNum = num.filter(isEven);
let oddNum = num.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

console.clear();

const ages = [16, 17, 18, 19, 20, 60];
const adultAges = ages.filter(isAdult);
const childAges = ages.filter(isChild);

console.log(adultAges);
console.log(childAges);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

console.clear();

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}