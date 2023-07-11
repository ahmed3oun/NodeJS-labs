const { response } = require('express');
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


app.listen(8080);
