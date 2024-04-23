const fs = require("fs");
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();
const template = fs.readFileSync("./public/module.html");

router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = template;
});

app.use(router.routes()).use(router.allowedMethods());
app.use(serve(`${__dirname}/../public`));

app.listen(3000, () => {});
