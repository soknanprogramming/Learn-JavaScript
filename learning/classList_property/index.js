/*
classList = Element property in JavaScript used to interact 
            with an element's list of classes (CSS classes)
            Allows you to make reusable classes for many elements
            across your webpage.

    add()
    remove()
    toggle(Remove it present, Add if not)
    replace(oldClass, newClass)
    contains()
*/

const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
myButton.addEventListener("mouseover", event => {
    // event.target.classList.add("hover");
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
    // event.target.classList.remove("hover");
    event.target.classList.toggle("hover");
});