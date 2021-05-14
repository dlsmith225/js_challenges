    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

var btn = document.getElementById("Pokemon");
btn.addEventListener("click", fetchResults);
async function fetchResults(e) {
    e.preventDefault();
    let response = await fetch(url);

    console.log(response);
    let data = await response.json();
    console.log(data);
    displayResults(data);
}

function displayResults(data) {
    abilities.forEach(data)
        console.log(data);
    };
    
    
  document.querySelector('#pikachu').innerHTML = data.abilities;


