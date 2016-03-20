var ReadDatabase = require('../../database/ReadDatabase.js');

module.exports = function (io) {
    io.on('connection', function (client) {
        console.log('Client connected...');
        client.on('getAllTests', function (database) {
            ReadDatabase.getTests(database, function (data) {
                console.log(JSON.stringify(data));
                console.log('Test ID: ' + data[0].id +
                    '\nSuite: ' + data[0].suite + '\nName: ' + data[0].name +
                    '\nBrowser: ' + data[0].browser);
                client.emit('allTests', data);
            });
        });
    });
}