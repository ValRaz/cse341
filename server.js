const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1.js');
const port = 3001;

app.get('/', lesson1Controller.ericRoute);

app.get('/alex', lesson1Controller.alexRoute);

app.get('/val', lesson1Controller.valRoute);

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });