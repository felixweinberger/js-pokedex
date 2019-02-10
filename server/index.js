const Koa = require('koa');
const serve = require('koa-static');
const bodyparser = require('koa-bodyparser');
const path = require('path');

const router = require('./router');

const port = 3000;
const app = new Koa();

app.use(bodyparser());
app.use(router.routes());
app.use(serve(path.join(__dirname, '../public')));

app.listen(port, console.log('Listening on port 3000.')); // eslint-disable-line no-console
