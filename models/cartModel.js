const { syncBuiltinESMExports } = require('module');
const db = require('../db');

module.exports = class CartModel {
  // Create

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
  async getOneById(id) {
    const sql = `
      SELECT * FROM carts
      WHERE id = $1;
    `;

    try {
      const cart = await db.query(sql, [id]);

      return cart.rows[0];
    } catch (error) {
      throw error;
    };
  }
};
