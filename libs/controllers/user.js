// libs/controllers/user.js
var User = require('../models/user');

// Create endpoint /api/user for GET
exports.getUser = function(req, res) {
	// Find all users in the database
	// This is just a temporary
	User.find({}, function(err, users) {
		if (err)
			res.send(err);

		res.json(users);
	});
};

// Create endpoint /api/user for POST
exports.postUser = function(req, res) {
	// Create a new Instance of the User model
	var user = new User();

	// Set the user properties that came from the POST data
	user.email = req.body.email;
	user.displayname = req.body.displayname;
	user.password = req.body.password;
	user.contactNumber = req.body.contactNumber;

	// Save the user and check for errors
	user.save(function(err) {
		if (err)
	  		res.send(err);

		res.json({ message: 'New user has been added!' });
	});
};