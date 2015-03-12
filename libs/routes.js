var express = require('express');
var router = express.Router();

var userController = require('./controllers/user');

router.route('/user')
    .get(userController.getUser)
    .post(userController.postUser);

module.exports = function(app) {
    app.use('/api', router);
};