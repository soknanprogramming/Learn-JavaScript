const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 156},
                {name: "pineapple", color: "orange", calories: 37}
];

fruits.push({name: "grapges", color: "purple", calories: 62});
let gg = fruits.pop();

fruits.forEach((fruit, index) =>{
    console.log(`${index + 1}. This fruit is ${fruit.name}, It have ${fruit.color}, and It have ${fruit.calories} calories`);
});

// console.log(fruits[4].name);
console.log(gg);
console.log("🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻");

const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);

const yellowFruits = fruits.filter((fruit) => fruit.color === "orange");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
console.log(yellowFruits);
console.log("🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻");
console.log(lowCalFruits);
console.log(highCalFruits);

const maxCalFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minCalFruits = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.clear();
console.log(maxCalFruits);
console.log(minCalFruits);