const express = require('express');
const app = express();
const port = 3000;
const lesson1Controller = require('./controllers/lesson1.js')

app.get('/', lesson1Controller.ericRoute);

app.get('/alex', lesson1Controller.alexRoute);

app.get('/val', lesson1Controller.valRoute);

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
  });