var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 1000, //important
    host: 'localhost',
    user: 'root',
    password: 'Tipperary123',
    debug: false
});

/*var connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'Tipperary123'
 });*/

module.exports = pool;