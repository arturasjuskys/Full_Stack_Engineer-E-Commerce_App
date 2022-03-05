const { Pool } = require('pg');
const express = require('express');
const router = express.Router();
// app.use(express.json());

// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT
// });
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'ecommerce',
  host: 'localhost',
  port: 5432
});

//////////////////////////////////////////////////////////////////////
// Routes


// Products
router.get('/', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products;');

    res.json(products.rows);
  } catch(err) {
    console.error(err);
  };
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await pool.query('SELECT * FROM products WHERE id = $1;', [id]);

    res.json(product.rows[0]);
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newProduct = await pool.query('INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *;', [name, price, description]);

    res.json(newProduct.rows[0]);
  } catch (error) {
    console.log(error);
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { description, price, name } = req.body;
  const sql = `
    UPDATE products
    SET
      name = $1,
      price = $2,
      description = $3
    WHERE id = $4;
  `;

  try {
    const updateProduct = await pool.query(sql, [name, price, description, id]);

    res.json('Product updated successfully')
  } catch (error) {
    console.log(error);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleteProduct = await pool.query('DELETE FROM products WHERE id = $1', [id]);

    res.json('Product deleted successfully');
  } catch (error) {
    console.log(error);
  };
});

module.exports = router;
