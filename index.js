const express = require('express');
const app = express();
// Adding 'config.env' values
const dotenv = require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 4001;

// Express Server
app.listen(PORT, () => {
  console.log(`Express server is listening on PORT: ${PORT}`);
});
