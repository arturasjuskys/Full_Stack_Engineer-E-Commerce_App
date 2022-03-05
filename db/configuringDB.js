const { Client } = require('pg');
// Adding 'config.env' values
const dotenv = require('dotenv').config({ path: '../config.env' });
const SQL = require('./creatingTablesSQL');


(async () => {
  const {
    createUsersTable,
    createProductsTable,
    createOrdersTable,
    createOrderItemsTableS,
    createCartsTable,
    createCartItemsTable
  } = SQL;
  
  try {
    const db = new Client({
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      host: process.env.PG_HOST,
      port: process.env.PG_PORT
    });

    await db.connect();

    // Running SQL
    await db.query(createUsersTable);
    await db.query(createProductsTable);
    await db.query(createOrdersTable);
    await db.query(createOrderItemsTableS);
    await db.query(createCartsTable);
    await db.query(createCartItemsTable);

    await db.end();

  } catch (err) {
    console.log('ERROR WHILE RUNNING SQL COMMANDS', err);
  }
})
();
