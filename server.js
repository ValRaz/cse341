const express = require('express');
const app = express();

const port = 3001;

app.use('/', require('routes/index.js'));

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });