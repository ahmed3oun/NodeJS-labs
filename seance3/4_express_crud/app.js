var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// var parseUrlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes', function(request, response) {
  response.json(quotes);
});

app.get('/quotes/:name', function(request, response) {
  var my_quote = quotes[request.params.name];
  if(!my_quote) response.status(404)
                .json('No quote found for ' + request.params.name);
   response.json(my_quote);
});

app.post('/quotes', function(request, response) {
  var newQuote = request.body;
  quotes[newQuote.author] = newQuote.textQuote;
  response.status(201).json(newQuote.textQuote);
});

app.delete('/quotes/:name', function(request, response) {
  delete quotes[request.params.name];
  response.sendStatus(200);
});

app.put('/quotes/:name', function(request, response) {
  console.log(request.body.text, request.params.name);
  quotes[request.params.name] = request.body.text;
  response.status(200).json({message: "updated"})
});

app.get('*', (req, res) => {
  res.redirect(301, '/quotes');
});

app.listen(8080);