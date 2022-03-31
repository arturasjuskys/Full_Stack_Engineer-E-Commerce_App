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

  // Get All
  async getAll() {
    const sql = `SELECT * FROM carts;`;

    try {
      const carts = await db.query(sql);

      return carts.rows;
    } catch (error) {
      throw error;
    }
  }

  // get by ID
  async getOneById(user_id) {
    const sql = `
      SELECT * FROM carts
      WHERE user_id = $1;
    `;

    try {
      const cart = await db.query(sql, [user_id]);

      return cart.rows[0];
    } catch (error) {
      throw error;
    };
  }
};
