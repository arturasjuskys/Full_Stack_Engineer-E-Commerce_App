const express = require('express');
const router = express.Router();
const CartModel = require('../models/cartModel');
const Cart = new CartModel();
const cartItemModel = require('../models/cartItemModel');
const CartItem = new cartItemModel();
const cartController = require('../controllers/cartController');

router.route('/cart')
  .get(cartController.getOneById(Cart))
  .post(cartController.addItemToCart(CartItem))

module.exports = router;
