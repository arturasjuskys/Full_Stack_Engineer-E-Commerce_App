const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'postgres',
  database: 'E-Commerce'
});

client.connect();

client.query('SELECT * FROM accounts', (err, res) => {
  if (err) return console.error(err.message);

  console.log(res.rows);
  
  client.end();
});
