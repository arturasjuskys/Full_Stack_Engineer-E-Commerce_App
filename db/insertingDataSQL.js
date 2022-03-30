module.exports.insertUsers = `
  INSERT INTO users (email, password, first_name, last_name) VALUES ('test01@sql.io', 'password', 'John', 'White');
  INSERT INTO users (email, password, first_name, last_name) VALUES ('test01@sql.io', 'password', 'John', 'White');
  INSERT INTO users (email, password, first_name, last_name) VALUES ('test02@sql.io', 'password', 'Jennifer', 'Skid');
`;
module.exports.insertProducts = `
  INSERT INTO products (name, price, description) VALUES ('SkyMaster 25x70', 120, 'Binoculars');
  INSERT INTO products (name, price, description) VALUES ('S10+', 550, 'Smartphone');
`;
module.exports.insertOrders = `
  INSERT INTO orders (total, status, user_id) VALUES (9.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (99.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (19.99, 'pending', 1);
  INSERT INTO orders (total, status, user_id) VALUES (5.99, 'pending', 2);
  INSERT INTO orders (total, status, user_id) VALUES (0.99, 'pending', 3);
`;