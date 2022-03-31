const { Router } = require('express');
const express = require('express');
const router = express.Router();
const OrderModel = require('../models/orderModel');
const Order = new OrderModel();
const factory = require('../controllers/orderController');

router.route('/')
  .get(factory.getAll(Order))

router.route('/:user_id/orders')
  .get(factory.getAllByUser(Order))
  
router.route('/orders/:id')
  .post(factory.createOne(Order))
  .get(factory.getOne(Order))
  .put(factory.updateOrderStatus(Order))
  .delete(factory.deleteOne(Order))

module.exports = router;
