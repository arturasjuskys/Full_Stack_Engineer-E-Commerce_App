const db = require('../db');

module.exports = class CartItemModel {
  // Create

  // Update

  // Get all

  // Delete
  static async deleteOne(id) {
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
