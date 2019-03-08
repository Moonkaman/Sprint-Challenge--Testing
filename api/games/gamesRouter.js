const router = require('express').Router();

const db = require('../../data/helpers/dogsDb');

router.get('/', (req, res) => {
  db.get()
    .then(games => res.status(200).json(games))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of games at this time', err}));
});

module.exports = router;