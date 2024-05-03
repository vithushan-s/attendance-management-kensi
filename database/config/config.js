require('dotenv').config();

module.exports = {

  "development": {
    username :process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host : process.env.DB_HOST,
    "dialect": "mysql"
  },

  "production": {
    username :process.env.PRO_DB_USERNAME,
    password: process.env.PRO_DB_PASSWORD,
    database: process.env.PRO_DB_NAME,
    host : process.env.PRO_DB_HOST,
    "dialect": "mysql"
  }
}
