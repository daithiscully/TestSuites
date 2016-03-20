var express = require('express');
var router = express.Router();

router.post('/suite', function (req, res, next) {
    console.log('Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    res.redirect('/');
});

router.post('/test', function (req, res, next) {
    console.log('Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    res.redirect('/');
});

module.exports = router;