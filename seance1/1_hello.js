const http = require('http');

http.createServer((req, res)=>{
    //L'état de la requête dans la section Header
    res.writeHead(200);
    //La réponse dans la section Body
    res.write('Bonjour!');
    console.log('Une requête...');
    setTimeout(() => {
      res.write("Au revoir!");
      res.end();
    }, 5000);
  }).listen(8080);  //Rester à l'écoute sur le port 8080

console.log('En écoute...');
