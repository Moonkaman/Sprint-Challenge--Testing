const server = require('express')();

const configMiddleware = require('./middleware');

configMiddleware(server);

server.get('/', (req, res) => {
  res.status(200).json({message: 'Its working so far.'})
})

module.exports = server;