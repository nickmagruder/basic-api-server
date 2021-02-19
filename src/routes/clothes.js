'use strict';

const express = require('express');
const routerClothes = express.Router();

const validator = require('../middleware/validator');

const ClothesInterface = require('../models/clothes.js');
/* const clothing = new ClothesInterface(); */
const ClothesModel = require('../models/clothes-model.js');
const clothesController = new ClothesInterface(ClothesModel);

routerClothes.get('/clothes', getClothes);
routerClothes.get('/clothes/:id', validator, getClothes);
/* routerClothes.get('/clothes/:id', validator, getClothesByID); */
routerClothes.post('/clothes', createClothes);
routerClothes.put('/clothes/:id', validator, updateClothes);
routerClothes.delete('/clothes/:id', validator, deleteClothes);



async function getClothes(request, response, next) {
  const id = request.params.id
  const resObject = await clothesController.read(id);
  response.json(resObject)
}

/////// old getclothes
/* function getClothes(request, response, next) {
  let resObject = clothing.read();
  response.json(resObject);
} */
////// eliminated
/* function getClothesByID(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = clothing.read(id);
  response.json(resObject);
} */




async function createClothes(request, response, next) {
  const clothesObj = request.body;
  const newClothes = await clothesController.create(clothesObj);
  response.json(newClothes);
}

//// old createclothes
/* function createClothes(request, response, next) {
  const clothingObject = request.body;
  let resObject = clothing.create(clothingObject);
  response.json(resObject);
} */



async function updateClothes(request, response, next) {
  const id = request.params.id;
  const clothingObj = request.body;
  const updateClothes = await clothesController.update(id, clothingObj);
  response.json(updateClothes);
} 

/* function updateClothes(request, response, next) {
  const id = parseInt(request.params.id);
  const clothingObject = request.body;
  let resObject = clothing.update(id, clothingObject);
  response.json(resObject);
} */



async function deleteClothes(request, response, next) {
  const id = request.params.id;
  const deleteClothes = await clothesController.delete(id);
  response.status(200).json(deleteClothes);
} 


/* function deleteClothes(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = clothing.delete(id);
  response.status(204).json(resObject);
} */



module.exports = routerClothes;
