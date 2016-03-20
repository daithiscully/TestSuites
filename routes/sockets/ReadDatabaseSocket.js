var readDatabase = require('../../database/ReadDatabase.js');

module.exports = function (io) {
    io.on('connection', function (client) {
        console.log('Client connected...');
        client.on('readDatabase', function (database) {
            readDatabase(database, function(data){

                client.emit('databaseContents', data);
                console.log('Test ID: ' + data[0].id +
                '\nSuite: ' + data[0].suite + '\nName: ' + data[0].name +
                '\nBrowser: ' + data[0].browser);
            });

        });
    });
}