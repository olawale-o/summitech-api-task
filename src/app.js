const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//  const errorHandler = require('../middleware/errorHandler');

const app = express();

const swaggerOptions = require('../swagger-options');

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/users', require('./users'));
app.use('/api/v1/products', require('./products'));
app.use('/api/v1/stocks', require('./stocks'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
// app.use(errorHandler);

module.exports = app;