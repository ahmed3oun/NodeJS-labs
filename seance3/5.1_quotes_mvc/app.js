//On utilise le repertoire routes dans cette version
var express = require('express');
var app = express();
app.use(express.static('public'));

const quotes = require('./routes/quotes');
app.use('/quotes', quotes);

app.listen(8080);
