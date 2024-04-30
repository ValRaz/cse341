const express = require('express');
const app = express();
const routes = require('../routes/index.js');

const port = process.env.PORT || 3001;
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });