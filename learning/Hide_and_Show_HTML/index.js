const btn = document.getElementById("btnShowAndHide");
const img = document.getElementById("imageCar");

btn.addEventListener("click", event => {
    if(img.style.display === "none"){
        img.style.display = "block";
        event.target.textContent = "Hide";
    }
    else{
        img.style.display = "none";
        event.target.textContent = "Show";
    }
});