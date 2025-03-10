let buttons = document.querySelectorAll(".myButtons");
// ADD AN ELEMENT
const newButton = document.createElement("button"); //STEP 1
const newButton2 = document.createElement("button");
newButton.textContent = "Button 5";
newButton.className = "myButton";
newButton2.textContent = "Button 6";
newButton2.className = "myButton";

document.body.appendChild(newButton); // STEP 3
document.body.appendChild(newButton2); // STEP 3
console.log(buttons);
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

