const { Pool } = require('pg');
// Adding 'config.env' values
const dotenv = require('dotenv').config({ path: '../config.env' });

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT
});

module.exports = pool;
