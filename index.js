const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');

app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/my-account', cartRouter);

// Server
module.exports = app;
