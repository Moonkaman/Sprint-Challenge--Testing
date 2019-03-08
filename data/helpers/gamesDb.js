const db = require('../dbConfig');

module.exports = {
  get,
  add
}

function get() {
  return db('games');
}

function add(game) {
  return db('games').insert(game);
}