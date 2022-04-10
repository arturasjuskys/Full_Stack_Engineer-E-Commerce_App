const db = require('../db');

module.exports = class CartModel {
  // Create
  // Created together with New User

  // Update

  // Get by email
  async getOneByEmail(email) {
    const sql = `
      SELECT * FROM carts
      WHERE email = $1;
    `;

    try {
      const cart = await db.query(sql, [email]);

      return cart.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // get by ID
  async getOneById(user_id) {
    const sql = `
      SELECT
        carts.id AS cart_id,
        products.id AS product_id,
        products.name AS product_name,
        products.price
      FROM
        users
      JOIN carts
        ON users.id = carts.user_id
      JOIN cart_items
        ON carts.id = cart_items.cart_id
      JOIN products
        ON cart_items.product_id = products.id
      WHERE user_id = $1;
    `;

    try {
      const cart = await db.query(sql, [user_id]);

      return cart.rows;
    } catch (error) {
      throw error;
    };
  }
};
