var mysql = require('mysql');
var localDB = require('./ConnectionSettings');

var getAllTests = function (databaseName, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('ReadDatabase is connected as id ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('select * from tests', function (err, result) {
            if (!(result >= 0)) {
                connection.release();
                return callback(result);
            } else {
                console.log('ERROR in ReadDatabase');
                connection.release();
                return callback(result);
            }
        });
    });
};

var getAllSuites = function (databaseName, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('ReadDatabase is connected as id ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('select * from suites', function (err, result) {
            if (!(result >= 0)) {
                connection.release();
                return callback(result);
            } else {
                console.log('ERROR in ReadDatabase');
                connection.release();
                return callback(result);
            }
        });
    });
};

module.exports = {
    getTests: getAllTests,
    getSuites: getAllSuites
}