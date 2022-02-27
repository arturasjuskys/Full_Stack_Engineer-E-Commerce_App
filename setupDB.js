const { Client } = require('pg');
const { DB } = require('./config');
console.log(DB);

(async () => {
  const usersTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      email VARCHAR(50),
      password TEXT,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      google JSON,
      facebook JSON
    );
  `;
  const productsTableSQL = `
    CREATE TABLE IF NOT EXISTS products (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name VARCHAR(50) NOT NULL,
      price INT NOT NULL,
      description VARCHAR(200) NOT NULL
    );
  `;
  const ordersTableSQL = `
    CREATE TABLE IF NOT EXISTS orders (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      total INT NOT NULL,
      status VARCHAR(50) NOT NULL,
      user_id INT NOT NULL,
      created DATE NOT NULL,
      modified DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;
  const orderItemsTableSQL = `
    CREATE TABLE IF NOT EXISTS order_items (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      created DATE NOT NULL,
      order_id INT NOT NULL,
      qty INT NOT NULL,
      price INT NOT NULL,
      product_id INT NOT NULL,
      name VARCHAR(50) NOT NULL,
      description VARCHAR(200) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id)
    );
  `;
  const CartsTableSQL = `
    CREATE TABLE IF NOT EXISTS carts (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      user_id INT NOT NULL,
      created DATE NOT NULL,
      modified DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;
  const cartItemsSQL = `
    CREATE TABLE IF NOT EXISTS cart_items (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      cart_id INT NOT NULL,
      product_id INT NOT NULL,
      qty INT NOT NULL,
      FOREIGN KEY (cart_id) REFERENCES carts(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `;
  const dropAllTablesSQL = `
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS carts;
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
  `;

  try {
    const db = new Client({
      user: DB.PG_USER,
      host: DB.PG_HOST,
      database: DB.PG_DATABASE,
      password: DB.PG_PASSWORD,
      port: DB.PG_PORT
    });

    await db.connect();

    // await db.query(dropAllTablesSQL);

    // creating tables
    await db.query(usersTableSQL);
    await db.query(productsTableSQL);
    await db.query(ordersTableSQL);
    await db.query(orderItemsTableSQL);
    await db.query(CartsTableSQL);
    await db.query(cartItemsSQL);

    await db.end();

  } catch(err) {
    console.error('ERROR WHILE CREATING ONE OR MORE TABLES: ', err);
  };
})();
