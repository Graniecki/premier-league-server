const express = require('express');
const router = express.Router();
const { Club, Player, Position, Country } = require('../models');

router.get('/test', async (req, res) => {
  res.json([1,2,3]);
});

router.get('/', async (req, res) => {
  const clubs = await Club.findAll({
    order: [['name', 'ASC']],
  });

  res.json(clubs);
});

router.get('/:club', async (req, res) => {
  const clubName = req.params.club;
  const club = await Club.findOne({
    where: { slug: clubName },
  });

  res.json(club);
});

router.get('/:club/players', async (req, res) => {
  const clubName = req.params.club;
  const club = await Club.findOne({
    where: { slug: clubName },
  });

  const players = await Player.findAll({
    where: { clubId: club.id },
    include: [
      { model: Club },
      { model: Position },
      { model: Country },
    ],
  });

  res.json(players);
});

module.exports = router;
