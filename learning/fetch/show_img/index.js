async function fetchData(){
    const imgElement = document.getElementById("pokeamonSprite");
    try{
        const pokemonName = document.getElementById("pokamonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.log("Error: ", error);
        imgElement.style.display = "none";
    }


}