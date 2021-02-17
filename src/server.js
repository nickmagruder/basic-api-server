'use strict'

const express = require('express');
const app = express();

const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');

const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js'); 


app.use(express.json());

/* function personHandler(req, res, next) { */

app.get('/person', logger, validator, (req, res, next) => {
    let resObject = {
        name: req.query.name,
    }
    res.status(200).json(resObject)
  });

app.use(errorHandler404);
app.use(errorHandler500);


/* start(port => {
  app.listen(port, () => {
    console.log('App is running on port :: ' + port);
  });
}); */

function start(port) {
  app.listen(port, () => console.log('App is running on port :: ' + port));
}


module.exports = {
    app: app,
    start: start,
};