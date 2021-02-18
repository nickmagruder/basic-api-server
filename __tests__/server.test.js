'use strict';

const server =  require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);


////////////////// Server Tests

describe('All tests', () => {

describe('404 Test', () => {
    it('should pass 404 on a bad route', async () => {
    const response = await request.get('/whatareyoudoing');

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('That route is not found')
  });
});


it('should pass 404 on a bad method', async () => {
  const response = await request.post('/food/dogs');

  expect(response.status).toEqual(404);
  expect(response.text).toEqual('That route is not found');

});



///////////////////// Clothes Tests

it('Should Create a record using POST /clothes', async () => {

  const response = await request.post('/clothes').send({
    name: 'Socks',
    type: 'underwear',
  });
  const response2 = await request.post('/clothes').send({
    name: 'Flip-flip',
    type: 'Shoe',
  });

  expect(response.status).toEqual(200);
  expect(response.body.id).toEqual(1);
  expect(response.body.data.name).toEqual('Socks');
  expect(response2.body.data.name).toEqual('Flip-flip');
});


it ('should Read a list of records using GET /clothes',  async () => {
  const response = await request.get('/clothes');


  expect(response.status).toEqual(200);
  expect(response.body[0].id).toEqual(1);
  expect(response.body[1].id).toEqual(2);
});

    it ('should Read a record using GET /clothes',  async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });


  it ('should Update a record using PUT /clothes/:id', async () => {
    const response = await request.put('/clothes/1').send({
      name: 'tshirt',
      type: 'Shirts',
    });


    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual('tshirt');
  });


it('should Destroy a record using DELETE - clothes', async () => {
  const response = await request.delete('/clothes/1');

  expect(response.status).toEqual(204);
});


///////////// Food Tests

it('Should Create a record using POST /food', async () => {

  const response = await request.post('/food').send({
    name: 'Gnocchi',
    type: 'Italian',
  });
  const response2 = await request.post('/food').send({
    name: 'Nachos',
    type: 'Basic',
  });

  expect(response.status).toEqual(200);
  expect(response.body.id).toEqual(1);
  expect(response.body.data.name).toEqual('Gnocchi');
  expect(response2.body.data.name).toEqual('Nachos');
});



it ('should Read a list of records using GET /food',  async () => {
  const response = await request.get('/food');


  expect(response.status).toEqual(200);
  expect(response.body[0].id).toEqual(1);
  expect(response.body[1].id).toEqual(2);
});



  it ('should Read a record using GET /food',  async () => {
  const response = await request.get('/food/1');


  expect(response.status).toEqual(200);
  expect(response.body.id).toEqual(1);
});


it ('should Update a record using PUT /food/:id', async () => {
  const response = await request.put('/food/1').send({
    name: 'Pho',
    type: 'Vietnamese',
  });

  expect(response.status).toEqual(200);
  expect(response.body.id).toEqual(1);
  expect(response.body.data.name).toEqual('Pho');
});


it('should Destroy a record using DELETE - food', async () => {
  const response = await request.delete('/food/1');

  expect(response.status).toEqual(204);
});

});