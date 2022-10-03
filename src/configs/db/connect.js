// const pg = require("pg-promise")();
// const database = pg({

//   host: process.env.PG_HOST, //"localhost",
//   database: process.env.PG_DATABASE, //"cazastore",
//   user: process.env.PG_USER, //"postgres",
//   port: process.env.PG_PORT, //5432
//   password: process.env.PG_PASSWORD, //"12345678",
// });

// module.exports = database;

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();
