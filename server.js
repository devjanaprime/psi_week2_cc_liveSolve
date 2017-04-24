// requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// create the app
var app = express();

// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// set up public as static folder
// this will serve index.html by default,
// so we don't need a route for that
app.use(express.static('public'));

// existing joke data
var jokes = [
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  },
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  }
];

// -- your server code here --

// a route to get the joke data
app.get( '/getJokes', function( req, res ){
  console.log( 'getJokes get route hit' );
  var objectToSend = {
    status: 200,
    allJokes: jokes
  }; // end objectToSend
  res.send( objectToSend );
});

// a route to post new joke data
app.post( '/addJoke', function( req, res ){
  console.log( 'in addJoke post route:', req.body );
  jokes.push( req.body );
  res.send( 200 );
}); //end addJoke
// server listeing on port 3000
app.listen(3000, function(){
  console.log('server up on port 3000');
}); // end spin up server
