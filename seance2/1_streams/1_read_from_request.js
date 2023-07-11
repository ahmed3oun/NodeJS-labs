const http = require('http');

http.createServer(function(request, response){
    //L'état de la requête dans la section Header
    response.writeHead(200);
    //Lire à partir d'un readable stream
    // request.on('readable', function(){
    //   var buffer = null;
    //   while ((buffer = request.read()) !== null) {
    //     //Ecrire dans un writable stream
    //     //Doit appeler toString
    //     response.write(buffer.toString());
    //     console.log(buffer.toString());
    //   }
    // });
    // request.on('end', function(){
    //   response.end();
    // });
    request.pipe(response);
  }).listen(8080);  //Rester à l'écoute sur le port 8080
