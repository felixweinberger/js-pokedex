const fs = require('fs');
const databasePath = './database.json';
let db;

module.exports.init = () => {
  db = JSON.parse(fs.readFileSync(databasePath).toString());
}

module.exports.getPokemons = () => {
  return db.map(pokemon => {
    return {
      name: pokemon.name,
      id: pokemon.id, 
      sprites: pokemon.sprites,
      abilities: pokemon.abilities.map(ability => ability.ability.name),
      weight: pokemon.weight,
      moves: pokemon.moves.map(move => move.move.name),
      types: pokemon.types.map(type => type.type.name)
    }
  });
}

module.exports.getPokemon = (id) => {
  return db.find(pokemon => {
    return pokemon.id === Number(id)
  })
}