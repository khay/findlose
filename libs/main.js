var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

// Connect to mongodb database
mongoose.connect('mongodb://localhost/pagewerkz')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

// Router configuration
require('./routes.js')(app);

/**
 * To caught exceptions, so that the server won't stop for most errors
 * Remove comments to enable it
 */
//process.on('uncaughtException', function(err) {
//	console.log('Caught exception: ' + err);
//});

app.listen(3000);