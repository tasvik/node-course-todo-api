const {MongoClient, ObjectID}  = require('mongodb');

var objectID = new ObjectID();
console.log(objectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to mondb server');
	}
	console.log('Connected mongodb server');

	// db.collection('Todos').find({completed: true}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// },(err) => {
	// 	console.log('Error fetching Todos', err);
	// });
	db.collection('Todos').find().count((err, count) => {
		if(err) {
			return console.log("Error while counting");
		}
		console.log(`Count is ${count}`)
	});
	// db.close();
});