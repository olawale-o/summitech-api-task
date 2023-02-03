const swaggerDefinition = require('./swagger-definition');

module.exports = {
  swaggerDefinition,
  apis: [
    './src/users/index.js',
    './src/products/index.js',
    './src/stocks/index.js',
  ],
};
