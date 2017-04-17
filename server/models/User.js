const mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String
	},
	email: {
		type: String,
		min: 1,
		trim: true
	}
});

module.exports = {User};
