// Gerador de numeros
var rng = Math.ceil(Math.random() * 12)

var pokemon = ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png"]
var pokemonName = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle"]

// Poem a foto do pokemon no html
document.getElementById("pokemon").innerHTML="<img src=" + pokemon[rng] + ">";

console.log("Array Index: " + rng)
console.log(pokemonName[rng].toLowerCase() + " " + (rng + 1))

// Recebe a resposta do jogador
function buttonClick() {
  var userInput = document.querySelector('#resposta').value
  validation(userInput)
  document.querySelector('#resposta').value = ""
}

// transforma e valida a resposta dada
function validation(resposta) {
  resposta = resposta.toLowerCase()
  if (resposta == pokemonName[rng].toLowerCase()) {
    
    console.log("Correto!")
  } else {
    console.log("Errado!")
  }
}

// Quiz function
function quiz() {
  document.location.reload(true)
}
