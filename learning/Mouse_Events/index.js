/*
eventListener = Listen for specific events to create interactive web pages
event: click, mouseover, mouseout
*/

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    //console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😑";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😮";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
});