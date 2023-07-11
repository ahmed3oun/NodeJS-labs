var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  console.log("Received a new Message: " + message)
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  console.log(nickname + " Just joined!")
  users.push(nickname);
});

// Emit events here
chat.emit('join', 'Hello World, a new member');
chat.emit('message', 'Hello world!');
