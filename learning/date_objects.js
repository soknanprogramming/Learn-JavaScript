const date = new Date();

console.log(date);

const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);

console.log(date2.toLocaleString());

const dateUTC = new Date(Date.UTC(2024, 0, 1, 2, 3, 4, 5));

console.log(dateUTC);

const date3 = new Date("2014-01-02T12:00:00z");

console.log(date3);

const date4 = new Date(0);

console.log(date4);

const date5 = new Date(17000000000000000000);

console.log(date5);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
console.log("==========================================================");
console.log(typeof year);
console.log(typeof dayOfWeek);

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

date.setDate(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

const dateA = new Date("2023-12-31");
const dateB = new Date("2024-01-01");

if(dateB > dateA){
    console.log("HAPPY NEW YEAR !");
}