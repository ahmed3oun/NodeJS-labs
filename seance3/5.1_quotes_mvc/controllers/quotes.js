const Quote = require('../models/quote');

exports.getAllQuotes = function(request, response) {
  response.json(Object.keys(Quote.getAllQuotes()));
};

exports.postNewQuote = function(request, response) {
  var newQuote = new Quote(request.body.author, request.body.text)
  newQuote.save();
  response.status(201).json(newQuote.text);
};

exports.getOneQuote = function(request, response) {
  var my_quote = Quote.getOneQuote(request.params.name);
  if(!my_quote) response.status(404)
                .json('No quote found for ' + request.params.name);
   response.json(my_quote);
 };

exports.deleteOneQuote = function(request, response) {
  Quote.deleteQuote(request.params.name)
  //delete quotes[request.params.name];
  response.sendStatus(200);
};

exports.editQuote = function(request, response) {
  var newQuote = new Quote(request.params.name, request.body.text)
  newQuote.edit();
  response.status(200).json({message: "updated"})
};

exports.invalidURL = function(req, res) {
  res.redirect(301, '/quotes');
};
