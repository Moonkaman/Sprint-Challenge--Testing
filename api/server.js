const server = require('express')();

const gamesRouter = require('./games/gamesRouter');

const configMiddleware = require('./middleware');

configMiddleware(server);
server.use('/api/games', gamesRouter);

server.get('/', (req, res) => {
  res.status(200).json({message: 'Its working so far.'})
})

module.exports = server;