'use strict';

const express = require('express');
const routerClothes = express.Router();

const validator = require('../middleware/validator');

const ClothesInterface = require('../models/clothes.js');
const clothing = new ClothesInterface();

routerClothes.get('/clothes', getClothes);
routerClothes.get('/clothes/:id', validator, getClothesByID);
routerClothes.post('/clothes', createClothes);
routerClothes.put('/clothes/:id', validator, updateClothes);
routerClothes.delete('/clothes/:id', validator, deleteClothes);


function getClothes(request, response, next) {
  let resObject = clothing.read();
  response.json(resObject);
}

function getClothesByID(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = clothing.read(id);
  response.json(resObject);
}

function createClothes(request, response, next) {
  const clothingObject = request.body;
  let resObject = clothing.create(clothingObject);
  response.json(resObject);
}

function updateClothes(request, response, next) {
  const id = parseInt(request.params.id);
  const clothingObject = request.body;
  let resObject = clothing.update(id, clothingObject);
  response.json(resObject);
}

function deleteClothes(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = clothing.delete(id);
  response.status(204).json(resObject);
}

module.exports = routerClothes;
