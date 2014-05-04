'use strict';

var domain = require('domain'),
dbConnectionPool = require('../app/utils/db_connection_pool'),
injector = require('../config/injector');

var withDatabase = function(){
  var d;

  beforeEach(function*(){
    d = domain.create();
  });

  beforeEach(function *(){
    d.enter();
    process.domain.conn = yield dbConnectionPool.acquire();
  });

  afterEach(function(){
    dbConnectionPool.release(d.conn);
    d.exit();
  });

  after(function(){
    var pool = dbConnectionPool.pool;
    pool.drain(pool.destroyAllNow);
  });
};

module.exports = {
  withDatabase: withDatabase,
  injector: injector
};
