const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/database.json')));

const Pokemon = mongoose.model('Pokemon', {
  id: Number,
  name: String,
  sprite: String,
  weight: Number,
  baseExp: Number,
  moves: [String],
  abilities: [String],
  types: [String],
});

mongoose.connect('mongodb://localhost/pokemon', {useNewUrlParser: true});

db.forEach(pokemon => {
  const newEntry = new Pokemon({
    id: pokemon.id, 
    name: pokemon.name,
    sprite: pokemon.sprites.front_default,
    weight: pokemon.weight,
    baseExp: pokemon.base_experience,
    moves: pokemon.moves.map(move => move.move.name),
    abilities: pokemon.abilities.map(ability => ability.ability.name),
    types: pokemon.types.map(type => type.type.name)
  });
  newEntry.save().then((console.log(`Successfully saved ${pokemon.name}`))); // eslint-disable-line no-console
});
