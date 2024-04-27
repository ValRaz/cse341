const express = require('express');
const app = express();
const routes = require('./routes/index.js');

const port = 3001;
app.use('/', routes);

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });