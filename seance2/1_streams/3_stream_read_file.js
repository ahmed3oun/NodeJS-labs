const http = require('http');
const fs = require('fs');

/* http.createServer(function(request, response){
    var newFile = fs.createWriteStream("os.iso");
    var fileTotalSize = request.headers['content-length'];
    var uploadedSize = 0;
    
    request.on('readable', function(){
      let buffer = null;
      while ((buffer = request.read()) !== null) {
         uploadedSize += buffer.length;
         var progress = (uploadedSize /fileTotalSize) * 100;
         response.write("progress: "+ parseInt(progress, 10) + "%\n");
      }
    });
    request.pipe(newFile);


    request.on('end', function(){
      response.end('Upload fait!');
    })
  }).listen(8080);
 */
http.createServer((req,res)=>{
  const newFile = fs.createWriteStream('os.iso');
  const fileTotalSize = req.headers['content-length']
  var uploadedSize = 0 ;
  req.on('readable',()=>{
    let buffer = null ; 
    while (buffer = req.read() !== null) {
      uploadedSize += buffer.length
      let progress = (uploadedSize / fileTotalSize) * 100 ;
      res.write( parseInt(progress , 10) + " \n");
    }
    req.pipe(newFile);

    req.on('end',()=>{
      res.end('Upload fait')
    })
  })
})