'use strict';

module.exports = function () {
  return function *(next) {
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
  };
};
