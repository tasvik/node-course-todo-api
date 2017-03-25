const {MongoClient, ObjectID}  = require('mongodb');

var objectID = new ObjectID();
console.log(objectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to mondb server');
	}
	console.log('Connected mongodb server');
	
	// db.collection('Todos').findOneAndUpdate({
	// 	completed: false
	// },{
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: true
	// }).then((result) => {
	// 	console.log(result);
	// });
	db.collection('User').findOneAndUpdate({
		name: 'Aditya'
	}, {
		$set: {
			name: 'Aditya Padhi'
		}
	}, {
		returnOriginal: true
	}).then((result) => {
		console.log(result);
	});

	db.collection('User').findOneAndUpdate({
		age: 40
	}, {
		$inc: {
			age:1
		}
	}, {
		returnOriginal: true
	}).then((result) => {
		console.log(result);
	});
	
	// db.close();
});