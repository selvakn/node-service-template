'use strict';

module.exports = function(Resource){
  this.list = function*(){
    this.body = yield Resource.all();
  };
};
