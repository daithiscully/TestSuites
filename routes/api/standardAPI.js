var createRouteAPI =  require('./createRouteAPI.js');

module.exports = function (app) {
    app.use('/api/createRoute', createRouteAPI);
};