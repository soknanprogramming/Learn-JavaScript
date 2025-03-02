let try_recall = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let testing = try_recall.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log(testing);

testing = try_recall.reduce((accumulator, element) => {
    return accumulator * element;
});

console.log(testing);

testing = try_recall.reduce((accumulator, element) => {
    return accumulator - element;
});

console.log(testing);

testing = try_recall.reduce((accumulator, element) => {
    return accumulator / element;
});

console.log(testing);
console.clear();

/*
.reduce() = reduce the elements of an array to a single value
*/

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

console.clear();

const grades = [75, 50, 90, 80, 65, 95, 10];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}