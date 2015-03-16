var express = require('express');
var router = express.Router();

var authController = require('./controllers/auth');
var userController = require('./controllers/user');

router.route('/user')
    .get(authController.isAuthenticated, userController.getUser)
    .post(userController.postUser);

module.exports = function(app) {
    app.use('/api', router);
};