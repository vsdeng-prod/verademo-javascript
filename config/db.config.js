const { createPool } = require("mysql");
const db = createPool({
  port: 3306,
  host: "192.168.178.80",
  user: "blab",
  password: "z2^E6J4$;u;d",
  database: "blab",
  connectionLimit: 10,
});
module.exports = db;