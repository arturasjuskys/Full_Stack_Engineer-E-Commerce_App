const { Client } = require('pg');
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
      user: 'postgres',
      password: 'postgres',
      database: 'ecommerce',
      host: 'localhost',
      port: 5432
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
