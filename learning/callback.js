/*
callback = a function that is passed as an argument to another function. 
*/

// function hello(){
//     setTimeout(function (){
//         console.log("Hello!");
//     }, 3000);
// }

function hello(callback){
    setTimeout(function (){
        console.log("Hello!");
    }, 3000);
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbey(){
    console.log("Goodbey!");
}

hello(wait);
console.clear();

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 4, 2);
console.clear();


function test(test1, test2, test3){
    let firstvalue = test3();
    let secondvalue = test2(firstvalue);
    test1(secondvalue);
}

test(result => {
    console.log(result)
},result => {
    return result / 2;
}, () =>{
    return 10;
});
