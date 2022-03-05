const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');

app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/orders', orderRouter);

// Server
module.exports = app;
