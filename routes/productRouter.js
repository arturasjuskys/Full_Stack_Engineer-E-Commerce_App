const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productModel');
const Product = new ProductModel();
const factory = require('../controllers/productController');

router.route('/')
  .get(factory.getAll(Product))
  .post(factory.createOne(Product))

router.route('/:id')
  .get(factory.getOne(Product))
  .put(factory.updateOne(Product))
  .delete(factory.deleteOne(Product))

module.exports = router;
