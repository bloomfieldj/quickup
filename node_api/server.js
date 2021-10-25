const PORT = 3001;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors({
  origins: ['http://localhost:3001/']
}));
app.use(morgan('dev'));

const homeRoute = require('./routes/router');
//use homeRoute when fetching '/'
app.use('/', homeRoute);

app.listen(PORT, console.log(`server listening on port ${PORT}`))