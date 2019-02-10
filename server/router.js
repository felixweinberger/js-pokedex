const router = require('koa-router')();

router.post('/', ctx => ctx.body = `Hello, ${ctx.request.body.firstname} ${ctx.request.body.lastname}`);

module.exports = router;