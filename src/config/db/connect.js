const pg = require("pg-promise")();
const database = pg({
  user: process.env.PG_USER, //"postgres",
  password: process.env.PG_PASSWORD, //"12345678",
  host: process.env.PG_HOST, //"localhost",
  port: process.env.PG_PORT, //5432
  database: process.env.PG_DATABASE //"cazastore",
});

module.exports = database;