const { Client } = require('pg');
const tablesSQL = require('./creatingTablesSQL');
const dataSQL = require('./insertingDataSQL');

(async () => {
  const {
    createUsersTable,
    createProductsTable,
    createOrdersTable,
    createOrderItemsTableS,
    createCartsTable,
    createCartItemsTable
  } = tablesSQL;
  const {
    insertUsers,
    insertProducts,
    insertCarts,
    insertOrders
  } = dataSQL;
  
  try {
    const db = new Client({
      user: 'postgres',
      password: 'postgres',
      database: 'ecommerce',
      host: 'localhost',
      port: 5432
    });

    await db.connect();

    // Running Tables SQL
    await db.query(createUsersTable);
    await db.query(createProductsTable);
    await db.query(createOrdersTable);
    await db.query(createOrderItemsTableS);
    await db.query(createCartsTable);
    await db.query(createCartItemsTable);

    // Running Data Inserts
    // await db.query(insertUsers);
    // await db.query(insertProducts);
    // await db.query(insertCarts);
    // await db.query(insertOrders);

    await db.end();

  } catch (err) {
    console.log('ERROR WHILE RUNNING SQL COMMANDS', err);
  }
})
();
