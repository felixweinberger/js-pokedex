const fs = require('fs');

const pokemons = JSON.parse(fs.readFileSync('./database.json').toString());
pokemons.sort((a, b) => a.id - b.id);

fs.writeFile('database.json', JSON.stringify(pokemons), () => {
  console.log('done');
});
