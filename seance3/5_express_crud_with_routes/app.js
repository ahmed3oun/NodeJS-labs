var express = require("express")
var app =express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

const quotes = require("./routes/quotes")
app.use('/quotes', quotes);

app.listen(8080);
