const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contact handler'
  },
  host: 'localhost:3001'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/swagger.js', './routes/index.js','./routes/contacts.js'];

swaggerAutogen(outputFile, routes, doc);