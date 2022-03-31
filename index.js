const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');

app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/account', orderRouter);
app.use('/account', cartRouter)
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/carts', cartRouter)

// Server
module.exports = app;
