const request = require('request');
const fs = require('fs');

const base = 'http://pokeapi.salestock.net/api/v2/pokemon/'
const promiseArr = []
// const databasePath = './database.json';

const db = JSON.parse(fs.readFileSync(databasePath).toString());
console.log('Finished reading db');
const start = 31;
const end = 61;
const progress = 0;


for (let n = 31; n < 61; n++) {
  promiseArr.push(new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('*****************');
      console.log('sending request for,', n);
      try {
        request(`${base}${n}/`, function(error, response, body) {
          const pokemon = JSON.parse(body);
          db.push(pokemon);
          progress++;
          console.log('successfully got number', n, `, ${progress} of ${end - start} retrieved`)
          resolve();
        });
      } catch (err) {
        console.log('error!', n);
      }
    }, n * 1000);
  }));
}

Promise.all(promiseArr).then(() => {
  fs.writeFile(databasePath, JSON.stringify(db), () => {
    console.log('done');
  });
})