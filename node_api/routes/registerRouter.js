const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const registerRouter = (db) => {

  router.post('/register', (req, res) => {

    db.query(`INSERT INTO users (first_name, last_name, age, gender, email, password, phone, city, occupation, bio) VALUES ()`)
    .then((response) => {
      console.log(response);
      res.json(response.rows)
    })
    .catch(err => console.error(err.message))
})
  return router;
};

module.exports = registerRouter;