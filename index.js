const express = require('express');

const app = express();
const PORT = 4000;

// Express Server
app.listen(PORT, () => {
  console.log(`Express server is listening on PORT: ${PORT}`);
});
