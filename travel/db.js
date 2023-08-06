const database = require('mysql');

module.exports = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'travel'
});