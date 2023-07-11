const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html' });

  fs.readFile('index.html', function(error,contents){
    response.write(contents);
    response.end();
  });
}).listen(8080);
