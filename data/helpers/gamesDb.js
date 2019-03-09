const db = require('../dbConfig');

module.exports = {
  get,
  add,
  remove
}

function get(id) {
  if(!id) {
    return db('games');
  } else {
    return db('games').where({id: id}).first();
  }
}

function add(game) {
  return db('games').insert(game);
}

function remove(id) {
  return db('games').where({id: id}).del();
}