'use strict'

module.exports = function(req, res, next) {
    if (!req.query.name) {
      next('Person Not Found');
    }
  next();
  }