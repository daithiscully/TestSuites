var createRoute =  require('./createRoute.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
        res.render('index.ejs', {
            title: 'Welcome'
        }); // load the index.ejs file
    });

app.use('/createRoute', createRoute);

};



