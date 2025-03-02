const btn = document.getElementById("btnRoll");
const show = Array.from(document.getElementsByClassName("show"));


btn.addEventListener("click", () => {
    let randomNum = Array(3).fill(0).map(() => Math.floor(Math.random() * 6) +1);

    show.forEach((element, index) =>{
        element.textContent = randomNum[index];
    })
});


