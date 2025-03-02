const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
const age = prompt('How old are you? ');

console.log(`Hello ${name}, you are ${age} years old!`);
