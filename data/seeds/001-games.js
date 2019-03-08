
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Crash Bandicoot', genre: 'Platformer', releaseYear: 1996},
        {title: 'League of Legends', genre: 'Moba', releaseYear: 2009},
        {title: 'World of Warcraft', genre: 'MMO', releaseYear: 2004}
      ]);
    });
};
