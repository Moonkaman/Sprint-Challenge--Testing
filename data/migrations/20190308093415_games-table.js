
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', t => {
    t.increments();
    t.string('title').unique();
    t.string('genre');
    t.integer('releaseYear');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
