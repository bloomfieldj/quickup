const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const loginRouter = (db) => {

  router.get('/login', (req, res) => {

    db.query(`SELECT * FROM users WHERE email = 'shelia6@gmail.com';`)
    .then((response) => {
      console.log(response);
      res.json(response.rows)
    })
    .catch(err => console.error(error.message)); 
  })
return router;
};

module.exports = loginRouter;