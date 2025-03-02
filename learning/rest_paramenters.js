/*
rest paramenters = (...rest) allow a function work with a varible number of argument by bundling
them into an array
spread = expands an array into deperate elements
rest = bundles seperate elements into an array
*/

function openFridge(...foods){
    console.log(foods);
}

function testing(callback, ...foods){
    callback(...foods);
}

function getFoods(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);
const foods = getFoods(food1, food2, food3, food4, food5);

const myTest = ['nana','gg','lyly','meymey'];

testing(openFridge, ...myTest, ...getFoods(food1, food2, food3, food4, food5));

console.log(foods);

console.clear();

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }

    return result;
}

const sumTotal = sum(3,3,3,1);
console.log(sumTotal);
console.clear();

function getAverage(...numbers){
    let total = 0;
    for(number of numbers){
        total += number;
    }
    return total / numbers.length;
}

console.log(getAverage(4,2,4,6));
console.clear();

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepant", "III");
console.log(fullName);
console.clear();

let testString = ["Srey", "Pin", "I"];
testString = testString.join("-");
console.log(testString);
console.clear();

function sub(...numbers){
    let result = numbers[0];
    for([index, number] of numbers.entries()){
        if(index === 0)
            continue;
        result -= number;
    }
    return result;
}

console.log([10,3,2,4].entries());
console.log(sub(10,3,2,4));
console.clear();