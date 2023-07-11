var express = require('express');
var app = express();

app.use(function(req, res, next){
  console.log('One');
  next();
});

app.use(function(req, res, next){
  console.log('Two');
  next();
});


app.use(function(req, res, next){
  console.log('Three');
  next();
});

app.get('/', function(req, res){
  console.log('Request in');
  res.send('Tout est fait!');
});


app.listen(8080);
