'use strict';

var koa = require('koa'),
  router = require('koa-router'),
  cors = require('koa-cors'),
  json = require('koa-json'),
  app = koa(),

  routes = new router();

routes.get('/resources', require('./app/controllers/resources').list);
routes.get('/config', require('./app/controllers/config').show);


app.use(require('./app/middlewares/domain')());
app.use(require('./app/middlewares/request_logger')());
app.use(json());
app.use(cors());
app.use(routes.middleware());

app.listen(9000);