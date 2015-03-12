// libs/controllers/user.js

var User = require('../models/user');

exports.getUser = function(req, res) { res.json({message: 'ok!'}) };

exports.postUser = function(req, res) {};