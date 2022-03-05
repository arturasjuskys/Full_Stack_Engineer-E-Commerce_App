const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productModel');
const Product = new ProductModel();

router.get('/', async (req, res) => {
  try {
    const response = await Product.getAllProducts();

    res.json(response);
  } catch(err) {
    console.error(err);
  };
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const response = await Product.getOneProduct(id);

    res.json(response);
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const response = await Product.createOneProduct(name, price, description);

    res.json(response);
  } catch (error) {
    console.log(error);
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { description, price, name } = req.body;

  try {
    const response = await Product.updateOneProduct(id, name, price, description);

    res.json('Product updated successfully')
  } catch (error) {
    console.log(error);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Product.deleteOneProduct(id);

    res.json('Product deleted successfully');
  } catch (error) {
    console.log(error);
  };
});

module.exports = router;
