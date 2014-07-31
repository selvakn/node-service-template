'use strict';

var config = require('config');

module.exports = {
  getSomething: function*() {
    return yield [1, 2, 3];
  },
  getConfig: function*() {
    return yield config;
  }
};