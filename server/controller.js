const model = require('./model');

const controller = {};

controller.getPokemon = async (ctx) => {
  try {
    const result = await model.getPokemon(ctx.params.id);
    ctx.response.status = 200;
    ctx.response.body = JSON.stringify(result[0]);
  } catch (err) {
    throw err;
  }
};

controller.getPokemons = async (ctx) => {
  try {
    const result = await model.getPokemons();
    ctx.response.status = 200;
    ctx.response.body = JSON.stringify(result);
  } catch (err) {
    throw err;
  }
};

module.exports = controller;