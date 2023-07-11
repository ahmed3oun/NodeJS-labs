const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html' });
  const baseURL = 'http://' + request.headers.host + '/';

  let urlpath =new url.URL(request.url,baseURL).pathname;
  var page;
  if(urlpath == '/') page = 'index.html';
  else if (urlpath == '/products') page = 'products.html';
  else page = '404.html';

  fs.readFile(page, function(error,contents){
    response.write(contents);
    response.end();
  });
}).listen(8080);

console.log("Listening on 8080 ...")