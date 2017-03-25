const {MongoClient, ObjectID}  = require('mongodb');

var objectID = new ObjectID();
console.log(objectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to mondb server');
	}
	console.log('Connected mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Do something',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert Todos', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	// db.collection('User').insertOne({
	// 	name: 'Aditya',
	// 	age: 40,
	// 	location: 'London'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to write to user', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});