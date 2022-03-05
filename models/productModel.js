const db = require('../db');

module.exports = class ProductModel {
  // Get all
  async getAllProducts() {
    const sql = `
      SELECT * FROM products;
    `;

    try {
      const products = await db.query(sql);

      return products.rows;
    } catch (error) {
      throw error;
    }
  }

  // Get  by ID
  async getOneProduct(id) {
    const sql = `
    SELECT * FROM products
    WHERE id = $1;
    `;

    try {
      const product = await db.query(sql, [id]);

      return product.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Create
  async createOneProduct(name, price, description) {
    const sql = `
    INSERT INTO products (name, price, description)
    VALUES
      ($1, $2, $3)
    RETURNING *;
    `;

    try {
      const product = await db.query(sql, [name, price, description]);

      return product.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update
  async updateOneProduct(id, name, price, description) {
    const sql = `
      UPDATE products
      SET
        name = $1,
        price = $2,
        description = $3
      WHERE id = $4;
    `;
    const values = [name, price, description, id];

    try {
      const product = await db.query(sql, values);

      return 'Product updated successfully';
    } catch (error) {
      throw error;
    }
  }

  // Delete
  async deleteOneProduct(id) {
    const sql = `
      DELETE FROM products
      WHERE id = $1;
    `;

    try {
      const product = await db.query(sql, [id]);
    } catch (error) {
      throw error;
    }
  }
};
