var express = require('express');
var router = express.Router();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

router.route("/")
    .get(function(request, response) {
    response.json(Object.keys(quotes));
    })
    .post(function(request, response) {
        var newQuote = request.body;
        console.log(newQuote);
        quotes[newQuote.author] = newQuote.text;
        response.status(201).json(newQuote.text);
      }
    );
router.route("/:name")
    .get(function(request, response) {
        var my_quote = quotes[request.params.name];
        if(!my_quote) response.status(404)
                        .json('No quote found for ' + request.params.name);
        response.json(my_quote);
    })
    .delete(function(request, response) {
        delete quotes[request.params.name];
        response.sendStatus(200);
    })
    .put(function(request, response) {
        console.log(request.body.text, request.params.name);
        quotes[request.params.name] = request.body.text;
        response.status(200).json({message: "updated"})
    })
    ;

module.exports = router;