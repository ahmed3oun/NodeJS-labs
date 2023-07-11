var express = require('express');
var app = express();

app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/products", function(request, response){
  response.sendFile(__dirname + "/products.html");

});
app.listen(8080);
