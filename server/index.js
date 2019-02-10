const Koa = require('koa');
const serve = require('koa-static');
const bodyparser = require('koa-bodyparser');
const path = require('path');
const router = require('koa-router')();

const ctrl = require('./controller');

const port = 3000;
const app = new Koa();

router.get('/pokemon/:id', ctrl.getPokemon);
router.get('/pokemon', ctrl.getPokemons);

app.use(bodyparser());
app.use(router.routes());
app.use(serve(path.join(__dirname, '../public')));

app.listen(port, console.log('Listening on port 3000.')); // eslint-disable-line no-console
