const pg = require("pg-promise")();
const database = pg({
  user: "postgres",
  password: "12345678",
  host: "localhost",
  port: process.env.DB_PORT,
  database: "cazastore",
});

module.exports = database;
