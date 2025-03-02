/* 
Promise = An Object that manages asynchronous operations.
Wrap a Promise Object around {asynchronous code}
"I promise to return a value"
PENDING -> RESOlVED or REJECTED
new Promise((resole, reject) => {asynchronous code})
*/
/*
Do these chores in order
1. Walk the dog
2. Clean the kitchen
3. Take out the trash
*/

// Example 1 It not the Promise
/*
function walkDogA(callback){
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}
function cleanKitchenA(callback){
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}
function takeOutTrashA(callback){
    setTimeout(() => {
        console.log("You take out the Trash");
        callback();
    }, 2500);
}

walkDogA(() => {
    cleanKitchenA(() => {
        takeOutTrashA(() => {
            console.log("You finala all the chores");
        });
    });
});
*/
// Example 2
function walkDog(){
    return new Promise((resolve, reject) => {
        const DogWalked = true;
        if(DogWalked){
            resolve("You walk the dog");
        }
        else{
            reject("You DON'T walk the dog");
        }
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        const kitchenCleaned = false;
        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }
        else{
            reject("You DON'T clean the kitchen");
        }
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        const takeOutTrashed = true;
        if(true){
            resolve("You take out the Trash");
        }
        else{
            reject("You DON'T out the Trash");
        }
    });
}


async function doAllChores(){
    try{
        console.log(await walkDog());
        console.log(await cleanKitchen());
        console.log(await takeOutTrash());
    }
    catch(error){
        console.error(error);
    }
}
doAllChores();
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.log(error));

