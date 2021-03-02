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
    let contactArray = json.results;
    console.log("Contacts array: ", contactArray);
    processUsers(contactArray);

  })

  let processUsers = function(contacts){
    let addressBook = document.getElementById("addresses");
    addressBook.innerText = `You have ${contacts.length} people in your address book.`;

    for (let i = 0; i < contacts.length; i++){
      let newDiv = document.createElement("div");
      newDiv.id = "contact"+i;
      addressBook.appendChild(newDiv);

      let newPicture = contacts[i].picture.thumbnail;
      let newImage = document.createElement("img");
      newDiv.appendChild(newImage);
      newImage.src = newPicture;
      
      let firstName = contacts[i].name.first;
      let lastName = contacts[i].name.last;
      let nameText = document.createTextNode(firstName + " " + lastName);
      newDiv.appendChild(nameText);

      let hiddenDiv = document.createElement("div");
      hiddenDiv.style.display = 'none';
      newDiv.appendChild(hiddenDiv);

      let streetNumber = contacts[i].location.street.number;
      let streetName = contacts[i].location.street.name;
      let city = contacts[i].location.city;
      let state = contacts[i].location.state;
      let postcode = contacts[i].location.postcode;
      let cell = contacts[i].cell;

      let additionalInfo = document.createTextNode(`Address: ${streetNumber} ${streetName}, ${city}, ${state}, ${postcode}`)
      let cellNumber = document.createTextNode(` Cell: ${cell}`);

      hiddenDiv.appendChild(additionalInfo);
      hiddenDiv.appendChild(cellNumber);

      let currentDiv = document.getElementById("contact"+i);
      currentDiv.addEventListener('mouseover', function(){
        console.log("Moused over " + contacts[i].name.first);
        hiddenDiv.style.display = 'block';
      })
      currentDiv.addEventListener('mouseout', function(){
        hiddenDiv.style.display = 'none';
      })

      
    }

  }

  console.log("After calling the API");

})

// let addressDiv = document.getElementById("addresses");

// addressDiv.addEventListener('mouseover', function(e){
//   if (e.target && e.target.id == 'contact') {
//     console.log("moused over " + e.target.innerText);


//   }
// })

// GOALS
// process 10 users, put on page as list of names and pictures
// on hover, show details about user
