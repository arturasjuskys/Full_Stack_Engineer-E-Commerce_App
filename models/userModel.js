const db = require('../db');

module.exports = class UserModel {
  // Create
  async createOne(email, password, first_name, last_name, google, facebook) {
    const createUser = `
      INSERT INTO users (email, password, first_name, last_name, google, facebook)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const createCart = `
      INSERT INTO carts (user_id)
      VALUES ($1);
    `;

    try {
      const user = await db.query(createUser, [email, password, first_name, last_name, google, facebook]);
      const userId = user.rows[0].id;
      const cart = await db.query(createCart, [userId])
      console.log(userId);

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

  // Get all
  async getAll() {
    const sql = `
      SELECT * FROM users;
    `;

    try {
      const users = await db.query(sql);

      return users.rows;
    } catch (error) {
      throw error;
    }
  }

  // Delete by email
  async deleteOneByEmail(email) {
    const sql = `
      DELETE FROM users
      WHERE email = $1
      RETURNING *;
    `;

    try {
      const user = await db.query(sql, [email]);

      return user;
    } catch (error) {
      throw error;
    }
  }
};
