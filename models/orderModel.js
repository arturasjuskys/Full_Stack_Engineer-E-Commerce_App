const db = require('../db');

module.exports = class OrderModel {
  // Get all
  async getAll() {
    const sql = `SELECT * FROM orders;`;

    try {
      const orders = await db.query(sql);

      return orders.rows;
    } catch (error) {
      throw error;
    };
  }

  // Get by ID
  async getOne(id) {
    const sql = `
      SELECT * FROM orders
      WHERE id = $1;
    `;

    try {
      const order = await db.query(sql, [id]);

      return order.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Create
  async createOne(total, status, user_id, created) {
    const sql = `
      INSERT INTO orders (total, status, user_id, created)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    try {
      const order = await db.query(sql, [total, status, user_id, created]);

      return order.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update
  async updateOne(total, status, user_id, modified, id) {
    const sql = `
      UPDATE orders
      SET
        total = $1,
        status = $2,
        user_id = $3,
        modified = $4
      WHERE id = $5;
    `;

    try {
      const order = await db.query(sql, [total, status, user_id, modified, id]);

      return 'Order updated successfully';
    } catch (error) {
      throw error;
    }
  }

  // Delete
  async deleteOne(id) {
    const sql = `
      DELETE FROM orders
      WHERE id = $1;
    `;

    try {
      const order = await db.query(sql, [id]);

      return order;
    } catch (error) {
      throw error;
    }
  }
};
