const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host: 'mysql://mysql',
        user: 'esencia',
        password: 'intel1234',
        database: 'esencia'
    });
}