const router = require('express').Router();

const db = require('../../data/helpers/gamesDb');

router.get('/', (req, res) => {
  db.get()
    .then(games => res.status(200).json(games))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of games at this time', err}));
});

router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then(game => res.status(200).json(game));
})

router.post('/', (req, res) => {
  if(!req.body.title || !req.body.genre || !req.body.releaseYear) {
    res.status(422).json({message: 'Please provide a title, genre & release year for the game.'})
  } else {
    db.add(req.body)
      .then(id => {
        db.get(id[0])
          .then(newGame => res.status(201).json(newGame))
          .catch(err => res.status(500).json({message: 'Could not retrieve the new game at this time.', err}))
      })
      .catch(err => {
        if(err.errno === 19) {
          res.status(405).json({message: 'This game title already exists.'})
        } else {
          res.status(500).json({message: 'Could not create a new game at this time.', err});
        }
    });
  }
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
    .then(count => {
      if(count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({message: 'The game you tried to delete was not found.'});
      }
    })
    .catch(err => res.status(500).json({message: 'Could not delete this game at this time.', err}));
})

module.exports = router;