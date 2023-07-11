const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
// Connection URI
const url = 'mongodb://localhost:27017/test'

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, database)  {
  if (err) return process.exit(1)
  console.log('Bravo connecté à Mongo!')
  insertDocuments(database, function() {
    console.log("OK for insert")
    updateDocument(database, function(){
      console.log("OK for update")
      removeDocument(database, function(){
        findDocuments(database, () => { console.log("Thanks for using Mongo :) ")})
        database.close()
      })
    })
    })
  })


/********************* Insert documents ****************************************/
const insertDocuments = function(database, callback)  {
  //Reference to the database
  const myDB = database.db('test')
  // Get reference to test collection
  const collection = myDB.collection('test')
  // Insert 3 documents
  collection.insert([
    {demo : 'demo1', message:'message1'},
    {demo : 'demo2', message:'message2'},
    {demo : 'demo3', message:'message3'}
    // 3 documents
  ], function(error, result)  {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 3
    console.log(result.ops.length) // will be 3
    console.log('Inserted 3 documents into the test collection')
    callback(result)
  })
}


/********************* Update documents ****************************************/
const updateDocument = function(database, callback) {
  //Reference to the database
  const myDB = database.db('test')
  // Get the test collection
  var collection = myDB.collection('test')
  // Update document where message is message1
  const message = 'message1'
  collection.update({ message : message },
    { $set: { demo : 'Edited from Node' } },
    {multi: true},
    function(error, result) {
      if (error) return process.exit(1)
      console.log("Update Result " + result.result.n) // will be 1
      console.log(`Updated the test document where message = ${message}`)
      callback(result)
  })
}

/********************* Remove documents ****************************************/
const removeDocument = function(database, callback) {

  const myDB = database.db('test')
  // Get the documents collection
  const collection = myDB.collection('test')
  // Insert some documents
  const message = 'message3'
  collection.remove({ message : message },
    function(error, result)  {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Removed the document where message = ${message}`)
      callback(result)
  })
}

/********************* finding documents ****************************************/

const findDocuments = function(database, callback)  {
const myDB = database.db('test')
  // Get the documents collection
  var collection = myDB.collection('test')
  // Find some documents
  collection.find({}).toArray(
    function(error, docs){
      if (error) return process.exit(1)
      console.log(2, docs.length) // will be 2 because we removed one document
      console.log(`Found the following documents:`)
      console.dir(docs)
      callback(docs)
  })
}
