var mysql = require('mysql');
var localDB = require('./ConnectionSettings');

var dataBaseData;

var readDatabase = function (databaseName, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('ReadDatabase is connected as id ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('select * from tests', function (err, rows) {
            if (!(rows >= 0)) {
                dataBaseData = rows;
                connection.release();
                return callback(dataBaseData);
            } else {
                console.log('ERROR in ReadDatabase');
                connection.release();
                return callback(dataBaseData);
            }
        });
    });
};

module.exports = readDatabase;