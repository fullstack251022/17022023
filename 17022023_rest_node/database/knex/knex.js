const knex = require('knex').knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'admin1234',
        database: 'flight_system'
    }
});

module.exports = {
    knex
}