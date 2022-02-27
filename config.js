
module.exports = {
  PORT: process.env.PORT,
  DB: {
    PG_HOST: process.env.PG_HOST,
    PG_USER: process.env.PG_USER,
    PG_DATABASE: process.env.PG_DATABASE,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_PORT: process.env.PG_PORT
  },
  SESSION_SECRET: process.env.SESSION_SECRET
};
