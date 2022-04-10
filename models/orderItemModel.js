const db = require('../db');

module.exports = class CartItemModel {
  // Create
  async addItem(order_id, qty, product_id) {
    const sql = `
      INSERT INTO orders_items (order_id, qty, product_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    try {
      const order = await db.query(sql, [order_id, qty, product_id]);

      return order.rows;
    } catch (error) {
      throw error;
    }
  }

  // Find all order items
  async find(order_id) {
    const sql = `
      SELECT
        *
      FROM order_items
      JOIN products
        ON order_items.product_id = products.id
      WHERE order_id = $1
      RETURNING *;
    `;

    try {
      const orderItem = await db.query(sql, [order_id]);

      return orderItem.rows;
    } catch (error) {
      throw error;
    };
  }
};