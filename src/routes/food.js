'use strict';

const express = require('express');
const routerFood = express.Router();

const validator = require('../middleware/validator');

const FoodInterface = require('../models/food.js');
/* const food = new FoodInterface(); */
const FoodModel = require('../models/food-model.js');
const foodController = new FoodInterface(FoodModel);


routerFood.get('/food', getFood);
routerFood.get('/food/:id', getFood);
/* routerFood.get('/food/:id', validator, getFoodByID); */
routerFood.post('/food', createFood);
routerFood.put('/food/:id', updateFood);
routerFood.delete('/food/:id', deleteFood);



async function getFood(request, response, next) {
  const id = request.params.id
  const resObject = await foodController.read(id);
  response.json(resObject)
}
/////// old getFood
/* function getFood(request, response, next) {
  let resObject = food.read();
  response.json(resObject);
} */
///// eliminated, combined with getFood
/* function getFoodByID(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = food.read(id);
  response.json(resObject);
} */



async function createFood(request, response, next) {
  const foodObj = request.body;
  const newFood = await foodController.create(foodObj);
  response.json(newFood);
}

////// old createfood
/* function createFood(request, response, next) {
  const foodObject = request.body;
  let resObject = food.create(foodObject);
  response.json(resObject);
} */



async function updateFood(request, response, next) {
  const id = request.params.id;
  const foodObject = request.body;
  const updateFood = await foodController.update(id, foodObject);
  response.json(updateFood);
}



/* function updateFood(request, response, next) {
  const id = parseInt(request.params.id);
  const foodObject = request.body;
  let resObject = food.update(id, foodObject);
  response.json(resObject);
}  */

async function deleteFood(request, response, next) {
  const id = request.params.id;
  const deleteFood = await foodController.delete(id);
  response.status(200).json(deleteFood);
}

/* function deleteFood(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = food.delete(id);
  response.status(204).json(resObject);
} */


module.exports = routerFood;
