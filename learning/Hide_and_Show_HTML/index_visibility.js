const btn = document.getElementById("btnShowAndHide");
const img = document.getElementById("imageCar");


btn.addEventListener("click", event => {
    if(img.style.visibility === "hidden"){
        img.style.visibility = "visible";
        event.target.textContent = "Hide";
    }
    else{
        img.style.visibility = "hidden";
        event.target.textContent = "Show";
    }
});