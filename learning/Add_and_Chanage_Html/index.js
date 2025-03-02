// Example 1 <h1>

// Step 1 create the element

const newH1 = document.createElement("h1");

// Step 2 Add attributes/Properties

newH1.textContent = "I like pizza !";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// Step 3 Append element to DOM

//document.body.append(newH1);
//document.body.prepend(newH1);
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
box1.append(newH1);
// box2.prepend(newH1);
// document.body.insertBefore(newH1, box2);

// Remove html element
//document.body.removeChild(newH1);
box1.removeChild(newH1);
