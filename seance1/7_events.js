var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
  response.writeHead(200);
  //La réponse dans la section Body
  response.write('Bonjour!');
  response.end();
  //Déclencher l'évènemen t close
  server.close()
});

//fonction de callback relative à l'event close
server.on('close', function(){
  console.log("connection closed")
});
server.listen(8080);
