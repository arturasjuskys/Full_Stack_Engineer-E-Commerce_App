const express = require('express');
const router = express.Router();
const CartItemModel = require('../models/cartItemModel');
const Model = new CartItemModel();
const controller = require('../controllers/cartItemController');

router.route('/:user_id/cart')
  .post(controller.createOne(Model))

module.exports = router;
