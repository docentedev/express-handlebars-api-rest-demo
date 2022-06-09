const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'musicband_db',
    password: '',
    port: 5432,
})

module.exports = pool
