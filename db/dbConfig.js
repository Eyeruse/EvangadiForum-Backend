const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
