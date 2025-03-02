/*
setTimeout() = function is JavaScript that allows you to schedule
the execution of a function after an amout of time (milliseconds)
Times are approcimate (varies based on the workload of the JavaScript runtime env.)
setTimeout(callback, delay);
*/

setTimeout(() => console.log("Hello"), 3000);

//to clear it 

const timeoutId = setTimeout(() => console.log("Welcome"), 3500);

clearTimeout(timeoutId);