//const { response, request } = require('express');
const express = require('express');
const app = express();

const my_quotes = [
    { author: 'einstein', text: 'Life is like riding a bicycle. To keep your balance you must keep moving' },
    { author: 'berners-lee', text: 'The Web does not just connect machines, it connects people' },
    { author: 'crockford', text: 'The good thing about reinventing the wheel is that you can get a round one' }
];

app.get('/json', function(request, response){
  response.json(my_quotes);
});

app.param('name', (req,res, next) => {
  let quote = my_quotes.find( item => item.author == req.params.name) || {};
  req.quoteByName = quote
  next()
})

app.param('text', (req,res, next) => {
  //autre traitement
  next()
})

app.get('/quotes/:name', function(req, res) {
    if (Object.keys(req.quoteByName).length > 0) {
      res.render('quote_page.ejs',{
        name:req.params.name,
        quote:req.quoteByName.text || ''
      });
    }
    else{
      res.status(404).json('No quote found for ' + req.params.name)
    }
});

//Returnning array to the template
app.get('/quotes', function(req, res){
  if (req.query != undefined) {
    if( req.query.limit >= 0){
      res.render('all_quotes.ejs',{quotes:my_quotes.slice(0,req.query.limit)});
    }
    else {
      res.render('all_quotes.ejs',{quotes:my_quotes});
    }  
  }
  else {
    res.render('all_quotes.ejs',{quotes:my_quotes});
  }
});

// //Permanent redirection
// app.get('/', function(req, res){
//   res.redirect(301,'/quotes');
// });

app.listen(8080);
