const { Router } = require('express');
const express = require('express');
const router = express.Router();
const OrderModel = require('../models/orderModel');
const Order = new OrderModel();
const factory = require('../controllers/productController');

router.route('/')
  .get(factory.getAll(Order))
  .post(factory.createOne(Order))

router.route('/:id')
  .get(factory.getOne(Order))
  .put(factory.updateOne(Order))
  .delete(factory.deleteOne(Order))

module.exports = router;
