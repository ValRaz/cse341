const routes = require('express').Router();
const lesson1Controller = require('./controllers/lesson1.js');

routes.get('/', lesson1Controller.ericRoute);

routes.get('/alex', lesson1Controller.alexRoute);

routes.get('/val', lesson1Controller.valRoute);

module.exports = routes;