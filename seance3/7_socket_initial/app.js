const express = require('express');


const app = express();
app.use(express.static('public'));

const server = require('http').createServer(app)
const { io } = require('./public/socket.io')(server);

io.on('connection',function (client) {
    console.log('client connected');
    //Emitting the messages event on our client server
    client.on('messages', function (data) {
        client.broadcast.emit('messages' , client.username + " : "+ data)
        //the chatter sees what he has written 
        client.emit('message',client.username)
    })

    //Add event to get the chatter username
    client.on('join',function (name) {
        client.username = name 
    })


})
server.listen(8080
    )

