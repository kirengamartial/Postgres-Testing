const pool = require('pg').Pool
require('dotenv').config()
const Pool = new pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

module.exports = Pool