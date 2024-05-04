const express = require('express');
const app = express();
const routes = require('./routes/index.js');
const mongodb = require('./db/dbconnect');

const port = process.env.PORT || 3001;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Listening on ${port} and connected to Database`);
  }
});