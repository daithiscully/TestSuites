var express = require('express'),
    serveStatic = require('serve-static');

var app = express();
var port = process.env.PORT || 3000;

/* Cache the public dir on Client */
app.use(serveStatic(__dirname + '/public', {
    maxAge: '1d'
}));

/* Set the views directory and EJS as the view template */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./routes/route69.js')(app);

app.listen(port, function (err) {
    if (err) console.log('ERROR:', err);
    console.log('Welcome, I am listening on Port: ' + port);
});