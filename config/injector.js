'use strict';

var di = require('di');

var requireMiddleware = function(name){
  return require('../app/middlewares/' + name);
}

var requireModel = function(name){
  return require('../app/models/' + name);
}

var requireController = function(name){
  return require('../app/controllers/' + name);
}

var requireUtil = function(name){
  return require('../app/utils/' + name);
}

module.exports = new di.Injector([{
  'Resource':           ['type', requireModel('resource')],

  'Resources':          ['type', requireController('resources')],

  'db':                 ['value', requireUtil('db')],

  'loggerMiddleware':   ['value', requireMiddleware('request_logger')],
  'domainMiddleware':   ['value', requireMiddleware('domain')],
  'databaseMiddleware': ['value', requireMiddleware('database')]
}]);
