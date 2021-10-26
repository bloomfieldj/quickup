const PORT = 3001;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors({
  origins: ['http://localhost:3001/']
}));
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
//use router when fetching '/'
app.use('/', router(db));


app.listen(PORT, console.log(`server listening on port ${PORT}`))