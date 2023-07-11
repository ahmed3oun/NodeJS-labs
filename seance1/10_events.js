var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, This is a request");
  //response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
  response.end();

});

server.on('close', function(){
  console.log('Closing down the server...');
});

server.listen(8080);
