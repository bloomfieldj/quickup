const express = require('express');
const router = express.Router();

const mainRouter = (db) => {

  router.get('/', (req, res) => {

    db.query(`SELECT * FROM users;`)
    .then((response) => {
      // console.log(response.rows);
      res.json(response.rows)
    })
    .catch(err => console.error(error.message))
  });



return router;
};

module.exports = mainRouter;