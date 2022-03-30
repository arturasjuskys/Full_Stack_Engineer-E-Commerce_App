module.exports.createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id              INT               PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    email           VARCHAR(50),      
    password        TEXT,
    first_name      VARCHAR(50),
    last_name       VARCHAR(50),
    google          JSON,
    facebook        JSON
  );
`;
module.exports.createProductsTable = `
  CREATE TABLE IF NOT EXISTS products (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    name            VARCHAR(50)     NOT NULL,
    price           BIGINT          NOT NULL,
    description     VARCHAR(50)     NOT NULL
  );
`;
module.exports.createOrdersTable = `
  CREATE TABLE IF NOT EXISTS orders (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    total           INT             NOT NULL,
    status          VARCHAR(50)     NOT NULL,
    user_id         INT             NOT NULL,
    created         DATE            NOT NULL,
    modified        DATE            NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`;
module.exports.createOrderItemsTableS = `
  CREATE TABLE IF NOT EXISTS order_items (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    created         DATE            NOT NULL,
    order_id        INT             NOT NULL,
    qty             INT             NOT NULL,
    price           INT             NOT NULL,
    product_id      INT             NOT NULL,
    name            VARCHAR(50)     NOT NULL,
    description     VARCHAR(200)    NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
  );
`;
module.exports.createCartsTable = `
  CREATE TABLE IF NOT EXISTS carts (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    user_id         INT             NOT NULL,
    modified        DATE            NOT NULL,
    created         DATE            NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`;
module.exports.createCartItemsTable = `
  CREATE TABLE IF NOT EXISTS cart_items (
    id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    cart_id         INT             NOT NULL,
    product_id      INT             NOT NULL,
    qty             INT             NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES carts(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`;
