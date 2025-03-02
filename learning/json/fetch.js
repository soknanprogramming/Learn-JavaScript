fetch("people.json")
     .then(response => response.json())
     .then(value => console.log(value[2].name))
     .catch(error => console.error("Error: ", error));
