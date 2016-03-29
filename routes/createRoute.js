var express = require('express');
var router = express.Router();
var UpdateDatabase = require('../database/UpdateDatabase.js');

router.post('/project', function (req, res, next) {
    console.log('Name: ' + req.body.name);
    UpdateDatabase.saveProject('app_user_db', req.body.name, function(){
        console.log('Project Saved');
    });
    res.redirect('/');
});

router.post('/suite', function (req, res, next) {
    console.log('Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    UpdateDatabase.saveSuite('app_user_db', 1, req.body.name, req.body.description, function(){
        console.log('Suite Saved');
    });
    res.redirect('/');
});

router.post('/test', function (req, res, next) {
    console.log('Suite ID: ' + req.body.suiteId + 'Name: ' + req.body.name + '\nDescription: ' + req.body.description);
    UpdateDatabase.saveTest('app_user_db', req.body.suiteId, req.body.name, 'Chrome', req.body.description, function(){
        console.log('Test Saved');
    });
    res.redirect('/');
});

module.exports = router;