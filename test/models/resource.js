'use strict';

var Resource = require('../../app/models/resource');
var expect = require('chai').expect;

describe('Resource', function(){
  it('should list the resources', function*(){
    var resources = yield Resource.all();
    expect(resources.length).to.least(0);
  });
});