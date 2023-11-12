const { Pool } = require('pg')
const pool = new Pool({
        user: 'jared',
        host: 'db',
        database: 'workouts',
        password: 'password',
        port: 5432
})

module.exports = pool;
