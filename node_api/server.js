const PORT = 3001;

const express = require('express');
const morgan = require('morgan');

const homeRoute = require('./routes/router');
const app = express();

//use homeRoute when fetching '/'
app.use('/', homeRoute);

app.listen(PORT, console.log(`server listening on port ${PORT}`))