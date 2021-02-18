'use strict'

/* const logger = require('../middleware/logger.js');


module.exports = function (err, req, res, next) {

    logger();

    const error = err.message ? err.message : err;
    const errorObject = {
      status: 404,
      message: error,
    }
  
    response.status(errorObject.status).json(errorObject);
  }
 */

module.exports = function(request, response, next) {
  response.status(404).send('That route is not found');
}
