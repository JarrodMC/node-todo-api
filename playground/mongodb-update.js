const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59306d0d554851be53b6eab7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5930733f554851be53b6ee10')
  }, {
    $set: {
      name: 'Lindsay'
    },
    $inc: {
      age: 2
  }
    }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
