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
    return Pokemon.find({id: id});
  },
  getPokemons () {
    return Pokemon.find({});
  },
};

// (async () => {
//   const mew = await model.getPokemon(151);
//   console.log(mew[0]); // eslint-disable-line no-console
// })();

module.exports = model;
