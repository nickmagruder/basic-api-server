'use strict';

const express = require('express');
const routerFood = express.Router();

const validator = require('../middleware/validator');

const FoodInterface = require('../models/food.js');
const food = new FoodInterface();

routerFood.get('/food', getFood);
routerFood.get('/food/:id', validator, getFoodByID);
routerFood.post('/food', createFood);
routerFood.put('/food/:id', validator, updateFood);
routerFood.delete('/food/:id', validator, deleteFood);


function getFood(request, response, next) {
  let resObject = food.read();
  response.json(resObject);
}

function getFoodByID(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = food.read(id);
  response.json(resObject);
}

function createFood(request, response, next) {
  const foodObject = request.body;
  let resObject = food.create(foodObject);
  response.json(resObject);
}

function updateFood(request, response, next) {
  const id = parseInt(request.params.id);
  const foodObject = request.body;
  let resObject = food.update(id, foodObject);
  response.json(resObject);
}

function deleteFood(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = food.delete(id);
  response.status(204).json(resObject);
}


module.exports = routerFood;
