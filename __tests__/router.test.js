'use strict';

require('@code-fellows/supergoose');
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('Router tests', () => {

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


describe('Testing server routes', () => {
  it('should response with a 200 when hiting GET /food', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it ('should create a new food on POST /food', async () => {

    const response = await request.post('/food').send({
      name: 'Gnocchi',
      type: 'Italian',
    });


    expect(response.status).toEqual(200);
    expect(response.body._id).toBeTruthy();
    expect(response.body.name).toEqual('Gnocchi');
  });
});

 it ('should Update a record using PUT /food/:id', async () => {
  const response = await request.get('/food/');
  const test = await request.put(`/food/${response.body[0]._id}`).send({
    name: 'Pho',
    type: 'Vietnamese',
  });

  expect(response.status).toEqual(200);
  expect(response.body[0]._id).toBeTruthy();
  expect(test.body.name).toEqual('Pho');
});

it('should Destroy a record using DELETE - food', async () => {
  const response = await request.get('/food');
  const test = await request.get(`/food/${response.body[0]._id}`);

  expect(test.status).toEqual(200);
});


});