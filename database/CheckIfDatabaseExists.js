var mysql = require('mysql');
var localDB = require('./ConnectionSettings');

var checkForDatabase = function (databaseName, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('CheckIdDatabaseExists is connected as id ' + connection.threadId);

        connection.query('SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = \'' + databaseName + '\'', function (err, rows) {
            connection.release();
            if (!(rows >= 0)) {
                console.log('DB ' + databaseName + ' Exists');
            } else {
                console.log('DB Does Not Exist');
            }
        });
    });
}

module.exports = checkForDatabase;