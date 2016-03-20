var express = require('express');
var router = express.Router();
var UpdateDatabase = require('../database/UpdateDatabase.js');

router.post('/suite', function (req, res, next) {
    console.log('Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    UpdateDatabase.saveSuite('test_suites', req.body.name, req.body.description, function(){
        console.log('Suite Saved');
    });
    res.redirect('/');
});

router.post('/test', function (req, res, next) {
    console.log('Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    UpdateDatabase.saveTest('test_suites', '1', req.body.name, 'Chrome', req.body.description, function(){
        console.log('Test Saved');
    });
    res.redirect('/');
});

module.exports = router;