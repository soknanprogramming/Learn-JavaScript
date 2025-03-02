/*
Async/Await = Async = make a function return a promise
              Await = make an async function wait for a promise 
Allows you write asynchronous code in a synchronous manner 
Async doesn't have resolve or reject paramenters
Everthing after Await is placed in an event queue
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkDoged = true;
            if(walkDoged){
                resolve("You walk the dog");
            }
            else{
                reject("You DON'T walk the dog");
            }
        }, 2000);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanKitchened = false;
            if(cleanKitchened){
                resolve("You clean the kitchen");
            }
            else{
                reject("You DON'T clean the kitchen");
            }
        }, 1500);

    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTrashed = true;
            if(takeOutTrashed){
                resolve("You take out the trash");
            }
            else{
                reject("You DON'T take out the trash");
            }
        }, 1000);
    });
}

async function doChores(){
    try{
        console.log(await walkDog());
        console.log(await cleanKitchen());
        console.log(await takeOutTrash());
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }

}

doChores();