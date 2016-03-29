var mysql = require('mysql');
var localDB = require('./ConnectionSettings');

var saveProject = function (databaseName, projectName, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('UpdateDatabase is connected as id: ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('INSERT INTO projects (name, created_on) VALUES (?, ?)', [projectName, getDateTime()], function (err, rows) {
            connection.release();
            if (err) throw err;

            console.log('Project has been saved to database');
            return callback('Suite saved');
        });
    });
};

var saveSuite = function (databaseName, projectId, suiteName, suiteDescription, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('UpdateDatabase is connected as id: ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('INSERT INTO suites (project, name, description) VALUES (?, ?, ?)', [projectId, suiteName, suiteDescription], function (err, rows) {
            connection.release();
            if (err) throw err;

            console.log('Suite has been saved to database');
            return callback('Suite saved');
        });
    });
};

var saveTest = function (databaseName, suiteId, testName, testBrowser, testDescription, callback) {
    localDB.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error in connection database');
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }

        console.log('UpdateDatabase is connected as id: ' + connection.threadId);

        connection.query('USE ' + databaseName);
        connection.query('INSERT INTO tests (suite, name, browser, description) VALUES (?, ?, ?, ?)', [suiteId, testName, 1, testDescription], function (err, rows) {
            connection.release();
            if (err) throw err;

            console.log('Test has been saved to database');
            return callback('Test saved');
        });
    });
};


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;

}

module.exports = {
    saveProject: saveProject,
    saveSuite: saveSuite,
    saveTest: saveTest
}