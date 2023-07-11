const http = require('http');
const fs = require('fs');

/* http.createServer(function(request, response){
    var newFile = fs.createWriteStream("os.iso");
    request.pipe(newFile);

    request.on('end', function(){
      response.end('Upload fait!');
      console.log("Upload Fait !")
    })
  }).listen(8080);
 */

http.createServer((req,res)=>{
  let newFile = fs.createWriteStream("os.iso");
  req.pipe(newFile);

  req.on('end',()=>{
    res.end('upload fait');
  })
})