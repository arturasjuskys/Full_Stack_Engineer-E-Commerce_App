const db = require('../db');

module.exports = class CartItemModel {
  // Create
  async createOne(cart_id, product_id, qty) {
    const sql = `
      INSERT INTO cart_items (cart_id, product_id, qty) VALUES ($1, $2, $3) RETURNING *;
    `;

    try {
      const cartItem = await db.query(sql, [cart_id, product_id, qty]);

      return cartItem.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update

  // Get all

  // Delete
  async deleteOne(id) {
    const sql = `
    DELETE FROM cart_items
    WHERE id = $1
    RETURNING *;
    `;

    try {
      const cartItem = await db.query(sql, [id]);

      return cartItem;
    } catch (error) {
      throw error;
    };
  }
};
