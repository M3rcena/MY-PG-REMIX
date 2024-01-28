const { Pool } = require('pg');
require('dotenv').config();

const auth = new Pool({
  user: process.env.AUTH_USER,
  host: process.env.AUTH_HOST,
  database: process.env.AUTH_NAME,
  password: process.env.AUTH_PASSWORD,
  port: process.env.AUTH_PORT,
});

const map = new Pool({
  user: process.env.MAP_USER,
  host: process.env.MAP_HOST,
  database: process.env.MAP_NAME,
  password: process.env.MAP_PASSWORD,
  port: process.env.MAP_PORT,
});

const user = new Pool({
  user: process.env.USER_USER,
  host: process.env.USER_HOST,
  database: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  port: process.env.USER_PORT,
});

module.exports = auth;
module.exports = map;
module.exports = user;