const { Pool }  = require("pg");
const pool = new Pool ({
  user: process.env.PG_USER, //"postgres",
  host: process.env.PG_HOST, //"localhost",
  database: process.env.PG_DATABASE, //"cazastore",
  password: process.env.PG_PASSWORD, //"12345678",
  port: process.env.PG_PORT, //5432

});
// local
module.exports = pool;

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// module.exports = pool
