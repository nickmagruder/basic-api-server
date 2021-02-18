'use strict';


module.exports = function(request, response, next) {

  if(!parseInt(request.params.id)) {
    next('Invalid ID');
  } else {
    next();
  }
}
