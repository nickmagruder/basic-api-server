'use strict'

module.exports = function(req, res, next) {

    console.log(`method ${req.method} :: ${req.url} :: ${new Date()}`);
  
    next();
  }