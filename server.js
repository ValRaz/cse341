const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongodb = require('./db/dbconnect');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger-output.json');

const port = process.env.PORT || 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  next();
})
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Listening on ${port} and connected to Database`);
  }
});