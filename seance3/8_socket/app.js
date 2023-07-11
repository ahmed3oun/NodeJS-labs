const express = require('express');

const app = express();
app.use(express.static('public'));

//create Http Server Which dispateches request to express
const server = require('http').createServer(app);
//Socket allowed to listen for requests: socket and expresss are sharing the same http server
const io = require('socket.io')(server);



io.on('connection', function(client){
  console.log('Client Connected');
  //Emitting the messages event on our client (browser)
  client.on('messages', function(data){
    //broadcast the message to all the Connected clients
    client.broadcast.emit('messages', client.username + ":" + data);
    //the chatter sees what he has written
    client.emit('message', client.username + ":" + data);

  });

  //Added event to get the chatter username
  client.on('join', function(name){
    //Setting a new variable that can be read on the client side
    client.username = name;

  });
});
server.listen(8080);
