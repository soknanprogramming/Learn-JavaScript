const jsonNames = `["Soknan", "Linda", "Sreypin", "Pearith"]`;
const jsonPerson = `{
    "name": "Soknea",
    "age": 23,
    "isEmployed": true,
    "hobbies": ["Watching", "Gaming", "Fishing"]
}`;
const jsonPeople = `[{
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
}]`;

const parsedData = JSON.parse(jsonPeople);
console.log(parsedData[2].name);