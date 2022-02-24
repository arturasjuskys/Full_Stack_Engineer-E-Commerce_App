const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (error) => {
  if (error) return console.error(error.message);

  console.log('connection successful');
});

// db.run('CREATE TABLE products(id, title, type)');
// const sql = `INSERT INTO products (id, title, type)
              // VALUES(?,?,?)`;
const sql = `SELECT * FROM products`;


// db.run(sql, [1, 'SkyMaster 25x70', 'Binoculars'], (error) => {
//   if (error) return console.error(error.message);

//   console.log('A new row had bin added');
// });
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);

  rows.forEach(row => {
    console.log(row);
  });
})

db.close((error) => {
  if (error) return console.error(error.message);
});
