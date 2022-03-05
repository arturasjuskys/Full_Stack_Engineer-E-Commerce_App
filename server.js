const { Pool } = require('pg');
const express = require('express');

const dotenv = require('dotenv').config();
const app = require('./index');
const PORT = process.env.PORT || 4001;

// PostgreSQL Server Connection
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'ecommerce',
  host: 'localhost',
  port: 5432
});

// Express Server
app.listen(PORT, () => {
  console.log(`Express server is listening on PORT: ${PORT}`);
});

module.exports = pool;
