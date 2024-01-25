const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.AUTH_USER,
  host: process.env.AUTH_HOST,
  database: process.env.AUTH_NAME,
  password: process.env.AUTH_PASSWORD,
  port: process.env.AUTH_PORT,
});

module.exports = pool;