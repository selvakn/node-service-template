'use strict';

var helpers = require('../helpers');

describe('Resource', function(){
  var expect = require('chai').expect,
    Resource = helpers.injector.get('Resource');

  helpers.withDatabase();

  it('should list the resources', function*(){
    var resources = yield Resource.all();
    expect(resources.length).to.least(0);
  });
});