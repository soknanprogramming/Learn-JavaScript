/*
sort() = method used to sort elements of an array in place.
Sorts elements as strings in lexicographic order, not alphabetical
lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "banana", "pineapple"];
fruits.sort();

console.log(fruits);

let numbers = [33, 2, 34, 44, 11, 33, 9, 43];
numbers.sort();

console.log(numbers);

numbers.sort((a, b) => a - b);// if callback return > 0 1, 2, ... it swap

console.log(numbers);

numbers.sort((a, b) => b - a); // if callback return < 0 -1, -2, ... it keep

console.log("🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻🎻");

const people = [{name: "Nan", age: 22},
                {name: "Nea", age: 23},
                {name: "Yeng", age: 18},
                {name: "Sant", age: 17}
               ];

people.sort((a, b) => a.age - b.age);

console.log(people);

people.sort((a, b) => b.age - a.age);

console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);