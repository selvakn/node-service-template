'use strict';

var domain = require('domain');

module.exports = function () {
  return function *(next) {
    var d = domain.create();
    d.enter();
    yield next;
    d.exit();
  };
};
