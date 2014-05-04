'use strict';

var koa = require('koa'),
router = require('koa-router'),
cors = require('koa-cors'),
json = require('koa-json'),
app = koa(),

injector = require('./config/injector.js'),

routes = new router();

injector.invoke(function(domainMiddleware, loggerMiddleware, databaseMiddleware) {
  app.use(domainMiddleware());
  app.use(loggerMiddleware());
  app.use(json());
  app.use(cors());
  app.use(databaseMiddleware());
});

injector.invoke(function(Resources) {
  routes.get('/resources', Resources.list);
});


app.use(routes.middleware());
app.listen(9000);