const {MongoClient, ObjectID}  = require('mongodb');

var objectID = new ObjectID();
console.log(objectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to mondb server');
	}
	console.log('Connected mongodb server');

	db.close();
});
