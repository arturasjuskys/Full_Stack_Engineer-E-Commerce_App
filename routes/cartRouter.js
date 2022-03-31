const express = require('express');
const router = express.Router();
const CartModel = require('../models/cartModel');
const Cart = new CartModel();
const factory = require('../controllers/cartController');

router.route('/carts')
  .get(factory.getAll(Cart))

router.route('/:user_id/cart')
  .get(factory.getOneById(Cart))

module.exports = router;
