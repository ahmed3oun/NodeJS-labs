var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

//Importing quotesController
const quotesController = require('../controllers/quotes.js');


router.route('/')
  .get(quotesController.getAllQuotes)
  .post(parseUrlencoded, quotesController.postNewQuote);

router.route('/:name')
  .get(quotesController.getOneQuote)
  .delete(quotesController.deleteOneQuote)
  .put(parseUrlencoded, quotesController.editQuote);

router.route('*')
  .get(quotesController.invalidURL);

module.exports = router;
