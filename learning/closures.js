/*
closure = A function defined inside of another function,
the inner function has access to the variables
and scope of the outer function
Allow for private variables and state maintanance
Used frequently in JS frameworks: React, Vue, Angular
*/

// Not use return statement

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

// example 2

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

const number = counter.getCount();
console.log(number);
console.clear();

//

function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(2);
game.increaseScore(4);
game.decreaseScore(3);
console.log(game.getScore());