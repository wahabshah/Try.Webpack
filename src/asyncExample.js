"use strict";

// Fetch a random joke
function fetchQuote() {
  return fetch( "http://api.icndb.com/jokes/random" ).then(function( resp ){
    return resp.json();
  }).then(function( data ){
    return data.value.joke;
  });
}

async function sayJoke()
{
  try {
    let result = await fetchQuote();
    var elem = document.getElementById('main');
    elem.innerHTML =  "Joke:" +  result ;
  } catch( err ) {
    console.error( err );
  }
}
sayJoke();
