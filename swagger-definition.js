const {
  User,
  UserSignUpRequest,
  Product,
  NewProductRequest,
  Stock,
  NewStockRequest,
} = require('./schemas');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for SUMMITECH task',
    version: '1.0.0',
    contact: {
      name: 'API Support',
      url: 'localhost:5000/api/v1/',
      email: 'info@summitech.com',
    },
  },
  components: {
    schemas: {
      User,
      UserSignUpRequest,
      Product,
      NewProductRequest,
      Stock,
      NewStockRequest,
    },
  },
};
