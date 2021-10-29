const PORT = 3001;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(morgan('dev'));


// PG database client/connection setup
const Pool = require('pg-pool');
const db = new Pool({
  host: 'localhost',
  database: 'quickup_app',
  user: 'caitohenry',
  port: '5432',
})
db.connect(console.log('connected to db'))
.then(client => {
  client.query(`SELECT * from users;`)
  .then((res) => {
    // console.log(res.rows);
  })
  .catch((err) => {
    console.error(error.message);
  })
})



const router = require('./routes/router');
app.use('/', router(db));

const registerRouter = require('./routes/registerRouter');
app.use('/register', registerRouter(db));


app.get('/login', (req, res) => {
  const userEmail = req.query.email
  // console.log('req.query.email', userEmail)

  db.query(`SELECT * FROM users WHERE email = '${userEmail}';`)
  .then((response) => {
    console.log(response.rows);
    res.json(response.rows)
  })
  .catch(err => console.error(err.message)) 
});

app.post('/chat', (req, res) => {
  const userId = req.query.chat_id
  const email = req.query.user

  db.query(`UPDATE users SET chat_id = ('${userId}') WHERE email='${email}';`)
  .then(res => console.log(res))
});

app.get('/call', (req, res) => {
  const email = req.query.user

  db.query(`SELECT chat_id, first_name FROM users WHERE email != '${email}';`)
  .then(result => res.json(result.rows))
});

app.listen(PORT, console.log(`server listening on port ${PORT}`))