const db = require('../db');

module.exports = class UserModel {
  // Create
  async createOne(email, password, first_name, last_name, google, facebook) {
    const sql = `
      INSERT INTO users (email, password, first_name, last_name, google, facebook)
      VALUES
        ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    try {
      const user = await db.query(sql, [email, password, first_name, last_name, google, facebook]);

      return user.rows[0];
    } catch (error) {
      throw error;
    };
  }

  // Update
  async updateOne(email, password, first_name, last_name, google, facebook, id) {
    const sql = `
      UPDATE users
      SET
        email = $1,
        password = $2,
        first_name = $3,
        last_name = $4,
        google = $5,
        facebook = $6
      WHERE id = $7;
    `;

    try {
      const user = await db.query(sql, [email, password, first_name, last_name, google, facebook, id]);

      return user.rows;
    } catch (error) {
      throw error;
    };
  }

  // Get by ID
  async getOneById(id) {
    const sql = `
      SELECT * FROM users
      WHERE id = $1;
    `;

    try {
      const user = await db.query(sql, [id]);
      
      return user.rows[0];
    } catch (error) {
      throw error;
    };
  }

  // Get by email
  async getOneByEmail(email) {
    const sql = `
      SELECT * FROM users
      WHERE email = $1;
    `;

    try {
      const user = await db.query(sql, [email]);

      return user.rows[0];
    } catch (error) {
      throw error;
    };
  }
};
