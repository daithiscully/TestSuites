var mysql = require('mysql');
var localDB = require('./ConnectionSettings');

var saveSuite = function (databaseName, suiteName, suiteDescription, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('UpdateDatabase is connected as id: ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('INSERT INTO suites (name, description) VALUES (?, ?)', [suiteName, suiteDescription], function (err, rows) {
            connection.release();
            if (err) throw err;

            console.log('Suite has been saved to database');
            return callback('Suite saved');
        });
    });
};

module.exports = {
    saveSuite: saveSuite
}