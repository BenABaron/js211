'use strict'

console.log("Loading address.js");

let getButton = document.getElementById('getUsersButton');

getButton.addEventListener('click', function(){
  console.log("Get Users button has been clicked!");

  console.log("Before calling the API");

  // make the api call, and get a promise to connec tour callback to
  let fetchResult = fetch('https://randomuser.me/api/?results=10');

  let jsonResponse = fetchResult.then(function(response){
    console.log("Processing the results", response);
    return response.json();
  })

  jsonResponse.then(function(json){
    // print out the first name of the user in position[0] in the results array
    // console.log("The json payload", json);
    // console.log("The person's first name", json.results[0].name.first);
    console.log("The number of users is", json.results.length);

  })

  console.log("After calling the API");
})

processUsers = function(users){
  // update html page to list the users
}

// GOALS
// process 10 users, put on page as list of names and pictures
// on hover, show details about user
