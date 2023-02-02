const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//  const errorHandler = require('../middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/users', require('./users'));
app.use('/api/v1/products', require('./products'));

// app.use(errorHandler);

module.exports = app;