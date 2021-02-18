'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const error404 = require('./error-handlers/404.js');

const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

app.use(express.json());
app.use(logger);

app.use(clothesRouter);
app.use(foodRouter);

app.use(error404);

module.exports = {
  app: app,
  start: (port) =>  {
    app.listen(port, () => console.log('App is running on port :: ' + port))
  }
}
