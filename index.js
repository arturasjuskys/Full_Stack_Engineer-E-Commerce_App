const express = require('express');
const productRouter = require('./routes/productRouter');
const app = express();

// Routes
app.use('/products', productRouter);

// Server
module.exports = app;
