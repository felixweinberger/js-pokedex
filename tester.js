const fs = require('fs');

const pokemons = JSON.parse(fs.readFileSync('./database.json').toString());
pokemons.forEach(pokemon => console.log(pokemon.name, pokemon.id));
console.log(pokemons.filter(pokemon => pokemon === undefined).length);
console.log(`You have caught ${pokemons.length} pokemons`)