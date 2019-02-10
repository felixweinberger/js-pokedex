const path = require('path'); 
const mongoose = require('mongoose');

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

const model = {
  getPokemon (id) {
    return Pokemon.find({id: id}).select('-_id -__v');
  },
  getPokemons () {
    return Pokemon.find({}).select('-_id -__v');
  },
};

module.exports = model;
