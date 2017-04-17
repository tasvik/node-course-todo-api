const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todos} = require('./models/Todos');
var {User} = require('./models/User');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var newTodos = new Todos({
		text: req.body.text
	});

	newTodos.save().then((doc) => {
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
