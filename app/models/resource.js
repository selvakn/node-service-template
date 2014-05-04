'use strict';

module.exports = function(db){
  this.all = function*(){
    return yield db().getSomething();
  };
};
