const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'ecommerce',
  host: 'localhost',
  port: 5432
});
module.exports = pool;