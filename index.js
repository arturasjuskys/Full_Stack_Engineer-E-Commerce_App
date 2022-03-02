// to include .env variables
require('dotenv').config();
const express = require('express');
const app = express();

const { PORT } = require('./config');
console.log(process.env.PORT);
async function server() {

  // starting express server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
};

server();
