'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);





describe('test for 404 on a bad route', () =>{
    it ('should send a 404 on a bad route', async () => {

      const res = await request.get('/fakeroute');

      expect(res.status).toEqual(404);
    });
  });



  describe('test 404 on a bad method', () =>{
    it ('should send 404 on a bad method', async () => {

      const res = await request.post('/fakepost');

      expect(res.status).toEqual(404);
    })
  })



describe('test 500 if no name in the query string', () =>{
    it ('should send 500 if no name in the query string', async () => {
      const res = await request.get('/person');

      expect(res.status).toEqual(500);
    })
  })


  describe('test 200 if the name is in the query string', () =>{
    it ('should send 200 if the name is in the query string', async () => {

      const res = await request.get('/person?name=Nick');

      expect(res.status).toEqual(200);
    })
  })



  describe('given an name in the query string, the output object is correct', () =>{
    it ('given an name in the query string, the output object is correct', async () => {

      const res = await request.get('/person?name=Nick');

      expect(res.body.name).toEqual('Nick');
    })
  })