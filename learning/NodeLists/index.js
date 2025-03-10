/*
NodeList = Static collection of HTML elements by (id, class, element)
Can be created by using querySelectorAll()
Similar to an array, but no (map, filter, reduce)
NodeList won't update to automatically reflect changes
*/

const buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += " 😁";
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// });

buttons.forEach(button => {
    button.addEventListener("mouseover", event  => {
        event.target.style.backgroundColor = "hsl(205, 100%, 20%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

