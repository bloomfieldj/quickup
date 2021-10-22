const express = require('express');
const router = express.Router();

const fakeData = ['Hello', 'World', 'Im', 'Here'];

router.get('/', (req, res) => {
  res.json(fakeData);
});

module.exports = router;