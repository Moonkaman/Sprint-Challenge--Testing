const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('GET /', () => {
    it('Has status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('Returns json', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });

    it('Returns correct object', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({message: 'Its working so far.'});
    });
  });
});