'use strict';

var Resource = require('../models/resource');

module.exports = {
  list: function*() {
    this.body = yield Resource.all();
  }
};
