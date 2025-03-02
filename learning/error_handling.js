/*
Error = An Object that is created to represent a problem that occurs 
Occur often with user input or establishing a connection

try{} = Encloses code that might potentially cause an error 
catch{} = Catch and handle any throw error from try {}
finally{} = (optional) Always executes. Used mostly for clear up
ex. Close file, close connections, release resources
*/

// Example 1
const prompt = require('prompt-sync')();

try{
    console.log(x);   
    // Network errors
    // Promise rejection
    // Security errors
}
catch(error){
    // console.error(error);
    console.error("Error !");
}

console.log("You have reached the end!");

// Example 2

try{
    console.log("Hello");
    // Network errors
    // Promise rejection
    // Security errors
}
catch(error){
    console.error(error);
}
finally{
    // Close files
    // Close Connection
    // Release Resources
    console.log("This always executes");
}

console.log("You have reacded the end !");

// Example 3

try{
    const dividend = prompt("Enter a dividend: ");
    const divisor = prompt("Enter a divisor: ");

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");