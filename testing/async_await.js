/*
Async/Await =   Async = makes a function return a promise 
                Await = make a function wait for a promise
Allows you write asynchronous code in a synchronous manner 
Async doesn't hava resolve or reject parameters
Everthing after Await is placed in an event queue 
*/

function walkDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog !");
            }
            else{
                reject("You DON'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const cleanKitchened = true;
            if(cleanKitchened){
                resolve("You clean the kitchen !");
            }
            else{
                reject("You DON'T clean the kitchen");
            }
        }, 1500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const takeOutTrashed = true;
            if(takeOutTrashed){
                resolve("You take out the trash !");
            }
            else{
                reject("You DON'T take out the trash");
            }
        }, 1500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value); console.log("You finished all those !");})
         .catch(error => console.error(error));