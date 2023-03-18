const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API for e-commerce',
    description: 'API to add user and items to an online store'
  },
  host: 'efrain-commerce-project.onrender.com',
  schemes: ['https']
};

//const doc = {
//  info: {
//    title: 'My API for e-commerce',
//    description: 'API to add user and items to an online store'
//  },
//  host: 'localhost:3000',
//  schemes: ['http']
//};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });