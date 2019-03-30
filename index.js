const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const model = require('./models');
const serve = require('koa-static');

router.get('/pokemons', async ctx => {
  ctx.body = model.getPokemons();
})

router.get('/pokemons/:id', async ctx => {
  ctx.body = model.getPokemon(ctx.params.id);
})

app
  .use(serve('public/pokemon'))
  .use(serve('public/assets'))
  .use(router.routes())
  .use(router.allowedMethods());

(async function () {
  await model.init();
  app.listen(3000, () => {
    console.log('Server online at port 3000');
  });
})()
