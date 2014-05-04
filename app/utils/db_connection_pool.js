'use strict';

var poolModule = require('generic-pool'),
config = require('config'),
thunkify = require('thunkify');

var pool = poolModule.Pool({
    name     : 'db',
    create   : function(callback) {
      callback(null, {
        close: function(){
          console.log('DB Connection closed!');
        },
        getSomething: function(){
          return [1,2,3];
        }
      });
    },
    destroy  : function(connection) { connection.close(); },
    max      : 10,
    min      : 2,
    idleTimeoutMillis : 30000,
    log : false
});

console.log('DB Connection Pool created with database', config.database.db);

module.exports = {};
module.exports.acquire = thunkify(pool.acquire);
module.exports.release = pool.release;
module.exports.pool = pool;
