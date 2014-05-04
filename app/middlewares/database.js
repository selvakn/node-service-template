'use strict';

var pool = require('../utils/db_connection_pool');

module.exports = function(){
  return function *(next){
    process.domain.conn = yield pool.acquire();
    yield next;
    pool.release(process.domain.conn);
  };
};
