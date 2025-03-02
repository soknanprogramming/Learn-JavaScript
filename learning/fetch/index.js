/*
fetch = Function used for making HTTP requests to fetch resourced.
(JSON stype data, images, files)
Simpifies asynchronous data fetching in JavaScript and
used for interaction  with APIs to retrieve and send data 
asynchronously over the web
fetch(url, {options})
*/

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then(response => {console.log(response);return response.json()})
//      .then(data => console.log(data))
//      .catch(error => console.log("Error: ", error));

// Example 1

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//      })
//      .then(data => console.log(data.id))
//      .catch(error => console.error("Error: ", error));

// Example 2

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error("Error: ", error);
    }
}

fetchData();