const express = require('express');
const app = express();

const ericRoute = app.get('/', (req, res) => {
    res.send("Eric Nord");
});

const alexRoute = app.get('/alex', (req, res) => {
    res.send("Alex Raz");
});

const valRoute = app.get('/val', (req, res) => {
    res.send("Val Raz");
});

module.exports = {
  ericRoute,
  alexRoute,
  valRoute
}