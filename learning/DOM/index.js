/*
DOM = Document Object Mobel
Object{} that represents the page you see in the browser
and provides you with an API to interact with it.
and structures all the elements in a tree-like representation.
JaveScript can access the DOM to dynamically
change the content, structure and stype of a web page.
*/

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Bro Code";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;
welcomeMsg.style.color = "white";

console.dir(document);