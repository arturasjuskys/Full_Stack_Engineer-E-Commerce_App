const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productModel');
const Product = new ProductModel();
const catchAsync = require('../utils/catchAsync');

router.route('/')
  .get(catchAsync(async (req, res) => {
    const response = await Product.getAll();

    res.status(200).json({
      status: 'success',
      results: response.length,
      data: {
        response
      }
    });
  }))
  .post(catchAsync(async (req, res) => {
    const { name, price, description } = req.body;
    const response = await Product.createOne(name, price, description)

    res.status(201).json({
      status: 'success',
      data: {
        response
      }
    });
  }))

router.route('/:id')
  .get(catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await Product.getOne(id);

    res.status(200).json({
      status: 'success',
      data: {
        response
      }
    });
  }))
  .put(catchAsync(async (req, res) => {
    const { id } = req.params;
    const { description, price, name } = req.body;
    const response = await Product.updateOne(id, name, price, description);

    res.status(200).json({
      status: 'success',
      data: {
        response
      }
    });
  }))
  .delete(catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await Product.deleteOne(id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  }))

module.exports = router;
