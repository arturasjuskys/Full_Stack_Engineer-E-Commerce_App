const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/account', orderRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

// Server
module.exports = app;
