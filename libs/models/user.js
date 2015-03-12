// libs/models/user.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	displayname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	contactNumber: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);