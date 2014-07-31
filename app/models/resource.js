'use strict';

var db = require('../utils/db');

module.exports = {
  all: function*() {
    return yield db.getSomething();
  }
};