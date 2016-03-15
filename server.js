var express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

/* Cache the public dir on Client */
app.use(serveStatic(__dirname + '/public', {
    maxAge: '1d'
}));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


/* Set the views directory and EJS as the view template */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./routes/route69.js')(app);
require('./routes/api/standardAPI.js')(app);

app.listen(port, function (err) {
    if (err) console.log('ERROR:', err);
    console.log('Welcome, I am listening on Port: ' + port);
});