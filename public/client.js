console.log( 'js' );

$( document ).ready(docReady);

function docReady(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', addJoke);
  // get jokes on doc ready
  getJokes();
}// end doc ready

function addJoke(){
  console.log( 'addJokeButton on click');
  // -- your code here --
  // collect user input into an object
  var objectToSend = {
    whoseJoke : $( '#whoseJokeIn' ).val(),
    jokeQuestion : $( '#questionIn' ).val(),
    punchLine : $( '#punchlineIn' ).val()
  }; // end objectToSend
  console.log( 'sending:', objectToSend );
  // send object via ajax post to server
  $.ajax({
    url: '/addJoke',
    type: 'POST',
    data: objectToSend,
    success: function( data ){
      console.log( 'back from server with:', data );
      // on success run getJokes to update DOM
      getJokes();
    } // end success
  }); // end ajax
}// end addJokeButton on click

function getJokes(){
  console.log( 'getJokes function' );
  // - your code here --
  // ajax call to server
  $.ajax({
    type: 'GET',
    url: '/getJokes',
    success: function( response ){
      // receive array of jokes
      console.log( 'back from server with:', response );
      // update DOM
      displayJokes( response.allJokes );
    } // end success
  }); // end ajax
}//

function displayJokes( allTheJokes ) {
  // this function receives an array of joke objects
  console.log('displayJokes function');
  // clear outputDiv
  var outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  // loop through jokes
  for (var i = 0; i < allTheJokes.length; i++) {
    // display each joke in the output div on the DOM
    outputDiv.append( '<p>' + allTheJokes[i].jokeQuestion + '<p>' );
    outputDiv.append( '<p>' + allTheJokes[i].punchLine + '<p>' );
    outputDiv.append( '<p>~ <i>' + allTheJokes[i].whoseJoke + '</i><p>' );
  } // end for
}// end displayJokes
