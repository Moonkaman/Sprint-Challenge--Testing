const request = require('supertest');

const server = require('../server');
const db = require('../../data/dbConfig');

describe('gamesRouter.js', () => {
  describe('GET /api/games', () => {
    it('Should return 200 status code', async () => {
      const res = await request(server).get('/api/games');
      expect(res.status).toBe(200)
    });

    it('Should return json data', async () => {
      const res = await request(server).get('/api/games');
      expect(res.type).toBe('application/json')
    });

    it('Should return an array', async () => {
      const res = await request(server).get('/api/games');
      expect(res.body.length).toBeDefined()
    })
  });

  describe('GET /api/games/:id', () => {
    beforeAll(async () => {
      await db('games').insert({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
    });

    afterAll(async () => {
      await db('games').truncate();
    });

    it('Should return 200 status code', async () => {
      const res = await request(server).get('/api/games/1');
      expect(res.status).toBe(200)
    });

    it('Should return json data', async () => {
      const res = await request(server).get('/api/games/1');
      expect(res.type).toBe('application/json')
    });

    it('Should return an object', async () => {
      const res = await request(server).get('/api/games/1');
      expect(typeof res.body).toBe('object')
    })
  });

  describe('POST /api/games', () => {
    afterEach(async () => {
      await db('games').truncate();
    })

    it('Should return 201 with the correct information sent', async () => {
      const res = await request(server).post('/api/games').send({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
      expect(res.status).toBe(201);
    });

    it('Should return 422 with incomplete information sent', async () => {
      const res = await request(server).post('/api/games').send({title: 'Pacman', genre: 'Arcade'});
      expect(res.status).toBe(422);
    })

    it('Should return the new object on success', async () => {
      const res = await request(server).post('/api/games').send({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
      expect(res.body).toEqual({id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
    })

    it('Should return a 405 when trying to add a game thats already there', async () => {
      await request(server).post('/api/games').send({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
      const res = await request(server).post('/api/games').send({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
      expect(res.status).toBe(405);
    })
  });

  describe('DELETE /api/games/:id', () => {
    beforeEach(async () => {
      await db('games').insert({title: 'Pacman', genre: 'Arcade', releaseYear: 1980});
    });

    afterEach(async () => {
      await db('games').truncate();
    });

    it('Should return 204 status code', async () => {
      const res = await request(server).delete('/api/games/1');
      expect(res.status).toBe(204)
    });

    it('Should return 404 on invalid status code', async () => {
      const res = await request(server).delete('/api/games/2');
      expect(res.status).toBe(404)
    })
  });
});