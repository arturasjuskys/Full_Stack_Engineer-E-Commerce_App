const express = require('express');
const app = express();
// to include .env variables
require('dotenv').config();
const config = require('./config');

const { PORT } = require('./config');
// console.log(config);
// const PORT = 4000;

async function server() {

  // start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
};

server();
