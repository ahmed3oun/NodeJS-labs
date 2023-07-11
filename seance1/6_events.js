const EventEmitter = require('events').EventEmitter;

//Appel au constructeur EventEmitter
var logger = new EventEmitter();
//A l'écoute des évènements error
logger.on('error',function(message){
  console.log("Une évènement error est survenu avec un message : " + message);
});
//émetter un évènement error
logger.emit('error', 'Pas si mauvais!');
