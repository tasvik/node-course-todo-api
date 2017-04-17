var mongoose = require('mongoose');

var Todos = mongoose.model('Todos', {
	text: {
		type: String,
		required: true,
	},
	complete: {
		type: Boolean,
		default: false
	},
	completed: {
		type: Number,
		default: null
	}
});

module.exports = {Todos};
