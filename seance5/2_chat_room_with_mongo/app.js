const express = require('express');
const mongodb= require('mongodb')

const app = express();
app.use(express.static('public'));

//create Http Server Which dispateches request to express
const server = require('http').createServer(app);
//Socket allowed to listen for requests: socket and expresss are sharing the same http server
const io = require('socket.io')(server);

const url = 'mongodb://localhost:27017/chatRoom'
const MongoClient = mongodb.MongoClient


MongoClient.connect(url, function(err, database)  {
  if (err) return process.exit(1)
  //Added event to get the chatter username
  const myDB = database.db('chatRoom')

  io.on('connection', function(client){
    console.log('Client Connected');
    //If a client joins then he is added to the database
    client.on('join', function(name){
      client.username = name;
      myDB.collection('users').insert({name:name}, function(error, results) {
        if (error) return process.exit(1)
     })
    });

    //if a client is connected he can read the old messages
    myDB.collection('messages').find({}).toArray((error, oldmessages) => {
      if (error) return next(error)
      client.emit('oldmessages', {old: oldmessages});
  })

    //if a message is received so it is added to the database and broadcasted
    client.on('messages', function(data){
      //broadcast the message to all the Connected clients
      client.broadcast.emit('messages', client.username + ":" + data);
      //Insert into DB
      myDB.collection('messages').insert({name:client.username, message:data},
        function(error, results) {
        if (error) return process.exit(1)
     })
    });
  });
})
server.listen(8080);
