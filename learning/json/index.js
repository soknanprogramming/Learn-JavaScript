/*
JSON = (JavaScript Object Notation) data-interchange format
Used for exchanging data between a server and a web application
JSON files {key:value} OR [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string
JSON.parse() = converts a JSON string to a JS object
*/

const names = ["Soknan", "Linda", "Sreypin", "Pearith"];
const person = {
    "name": "Soknea",
    "age": 23,
    "isEmployed": true,
    "hobbies": ["Watching", "Gaming", "Fishing"]
};
const people = [{
    "name": "Soknan",
    "age": 20,
    "isEmployed": true
},
{
    "name": "Linda",
    "age": 23,
    "isEmployed": false
},
{
    "name": "Sreypin",
    "age": 18,
    "isEmployed": true
},
{
    "name": "Soknea",
    "age": 24,
    "isEmployed": false
}];
// console.log(names);
// console.log(typeof names);
//console.log(person.hobbies[1]);
console.log(people[2].name);
const jsonString = JSON.stringify(people);

console.log(jsonString);
// console.log(typeof jsonString);