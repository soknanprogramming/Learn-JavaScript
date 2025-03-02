/*
eventListener = Listen for specific events to create interactive web pages
events: keydown, keyup
document.addEventListener(event, callback);
*/

// document.addEventListener("keydown", event => {
//     // console.log("It's keydown");
//     // console.log(event);
//     console.log(event.key);
// });
// document.addEventListener("keyup", () => {
//     console.log("It's keyup");
// });
// document.addEventListener("keypress", () => {
//     console.log("It's keypress");
// });

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;
const pageWidth = document.documentElement.clientWidth;  // Full page width
const pageHeight = document.documentElement.clientHeight; // Full page height

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
    switch(event.key) {
        case "w":
            if (y - moveAmount >= 0) y -= moveAmount;
            break;
        case "s":
            if (y + moveAmount <= pageHeight - myBox.offsetHeight) y += moveAmount;
            break;
        case "a":
            if (x - moveAmount >= 0) x -= moveAmount;
            break;
        case "d":
            if (x + moveAmount <= pageWidth - myBox.offsetWidth) x += moveAmount;
            break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});