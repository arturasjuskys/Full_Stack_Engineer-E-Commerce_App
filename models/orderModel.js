const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
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

  // Get all by User
  async getAllByUser(user_id) {
    const sql = `
      SELECT
        users.id AS user_id,
        users.first_name,
        users.last_name,
        orders.id AS order_id,
        orders.created,
        orders.total,
        orders.status,
        orders.modified
      FROM orders JOIN users
        ON users.id = orders.user_id
      WHERE user_id = $1
    `;

    try {
      const orders = await db.query(sql, [user_id]);

      return orders.rows;
    } catch (error) {
      throw error;
    }
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
  async createOne(total, status, id, created) {
    const sql = `
      INSERT INTO orders (total, status, user_id, created)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    try {
      const order = await db.query(sql, [total, status, id, created]);

      return order.rows;
    } catch (error) {
      throw error;
    }
  }

  // Update
  async updateOrderStatus(total, status, user_id, created, modified, id) {
    const sql = `
      UPDATE orders
      SET
        total = $1,
        status = $2,
        user_id = $3,
        created = $4,
        modified = DATE ($5)
      WHERE id = $6
      RETURNING *;
    `;

    try {
      const order = await db.query(sql, [total, status, user_id, created, modified, id]);

      return order.rows;
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
