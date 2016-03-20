var createRoute =  require('./createRoute.js');
var checkForDB = require('../database/CheckIfDatabaseExists.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
        checkForDB('test_suites');
        res.render('index.ejs', {
            title: 'Welcome'
        }); // load the index.ejs file
    });

app.use('/createRoute', createRoute);

};



