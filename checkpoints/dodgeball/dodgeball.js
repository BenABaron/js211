'use strict'

console.log("dodgeball.js is connected")

let arrOfPeople = [
  {
    name: "Ben", 
    hobby: "Drumming"
  },
  {
    name: "Giles", 
    hobby: "Skateboarding"
  },
  {
    name: "Caitlyn",
    hobby: "Fish"
  },
  {
    name: "Andrew",
    hobby: "Being Tucker"
  },
  {
    name: "Mitch",
    hobby: "Country music"
  },
  {
    name: "Anna",
    hobby: "Nothing"
  },
  {
    name: "Mason",
    hobby: "Going on vacation"
  },
  {
    name: "David",
    hobby: "The universe"
}
]

let showPlayerButton = document.getElementById("showPlayers");
let playerList = document.getElementById("acceptedPlayers");
let applicantList = document.getElementById("applicants");
let blueTeam = document.getElementById("blueTeam");
let redTeam = document.getElementById("redTeam");

class Player {
  name;
  hobby;

  constructor(name, hobby){
    this.name = name;
    this.hobby = hobby;
  }

  acceptPlayer(){ // this method will accept an applicant into the league!
    let playerDiv = document.getElementById(`${this.name}Info`); // find the element in the applicants list associated with the current player
    playerDiv.remove(); // delete said element

    let newListItem = document.createElement('li'); // create a new list element
    newListItem.id = `${this.name}Info` // assign the new element an ID with the name of the person

    let blueButton = document.createElement('button'); // create a new button element
    blueButton.innerText = "Add to blue team"; // add text to the button element
    blueButton.addEventListener('click', this.addToBlueTeam); // add an event listener to the button that will call this player's "add to blue team" method
    blueButton.id = `${this.name}Blue`; // assign the button an ID with the name of the person
    newListItem.appendChild(blueButton); // append the button to the list element

    let redButton = document.createElement('button'); // same notes as for the blue button!
    redButton.innerText = "Add to red team";
    redButton.addEventListener('click', this.addToRedTeam);
    redButton.id = `${this.name}Red`;
    newListItem.appendChild(redButton);

    let personInfo = document.createTextNode(` ${this.name} - ${this.hobby}`) // create a text node containing the person's name and hobby
    newListItem.appendChild(personInfo); // append the new text node to the list element

    playerList.appendChild(newListItem); // append the list element to the player list
  }

  addToBlueTeam(){ // this method will create a new Team Member and call it's accept to blue team method
    let currentName = this.id.replace('Blue', ''); //access the name from the ID given to the button

    arrOfPeople.forEach(function(person){ // use a forEach loop to loop through our array of people
      if (person.name == currentName) { // once we find the element in the array with the correct name...
        let newMember = new TeamMember(person.name, person.hobby, 'blue'); // we create a new team member with their name, hobby, and the color (blue)
        newMember.acceptToBlueTeam(); // then we call the new team member's accept to blue team method
      }
    })
  }

  addToRedTeam(){ // this method will create a new Team Member and call it's accept to red team method
    let currentName = this.id.replace('Red', ''); // same notes as the add to blue team method :)

    arrOfPeople.forEach(function(person){
      if (person.name == currentName) {
        let newMember = new TeamMember(person.name, person.hobby, 'red');
        newMember.acceptToRedTeam();
      }
    })
  }
}

class TeamMember extends Player{
  color;

  constructor(name, hobby, color){
    super(name, hobby);
    this.color = color;
  }

  // The two methods that follow (accept to blue team and accept to red team) have essentially the same functionality as the accept player method in the Player class. First, it removes the old element from the player list. Then it creates a new element under the corresponding team list. Then it makes it colorful :)
  acceptToBlueTeam(){
    let playerDiv = document.getElementById(`${this.name}Info`);
    playerDiv.remove();

    let newListItem = document.createElement('li'); 
    newListItem.id = `${this.name}Blue`

    let personInfo = document.createTextNode(` ${this.name} - ${this.hobby}`)
    newListItem.appendChild(personInfo);
    newListItem.style.color = 'blue';

    blueTeam.appendChild(newListItem);
  }

  acceptToRedTeam(){
    let playerDiv = document.getElementById(`${this.name}Info`);
    playerDiv.remove();

    let newListItem = document.createElement('li');
    newListItem.id = `${this.name}Red`

    let personInfo = document.createTextNode(` ${this.name} - ${this.hobby}`)
    newListItem.appendChild(personInfo);
    newListItem.style.color = 'red';

    redTeam.appendChild(newListItem);
  }
}

let showAppsFunc = function(){

  arrOfPeople.map(function(person){ // using the map method we can go through our array and process them all in the same way. The rest of this is also the same in functionality to the Player class's accept player method, however we don't need to delete any elements before starting.
    let newListItem = document.createElement('li');
    newListItem.id = `${person.name}Info`

    let button = document.createElement('button');
    button.innerText = "Accept player"
    button.addEventListener('click', addToRoster);
    newListItem.appendChild(button);

    let personInfo = document.createTextNode(` ${person.name} - ${person.hobby}`)
    newListItem.appendChild(personInfo);

    applicantList.appendChild(newListItem);

  })

  showPlayerButton.removeEventListener('click', showAppsFunc);

}

showPlayerButton.addEventListener('click', showAppsFunc)

let addToRoster = function(){
  let currentName = this.parentElement.id.replace('Info', ''); // using the ID given to the list elements in the showAppsFunc function, we find the name of the person to be added to the roster

  arrOfPeople.forEach(function(person){ // then we use a forEach loop to loop through the array of people
    if (person.name == currentName) { // check if the current element in the array has the same name value as the name we've set to currentName
      let newPlayer = new Player(person.name, person.hobby); // make a new player using the name and hobby from the array of people
      newPlayer.acceptPlayer(); // then call the (now) Player's acceptPlayer function.
    }
  })

}

/**
 * Couldn't figure out how to do unit tests here, but here's what I would test for!
 * 
 * 1. When the "Show Players" button is pressed, the ul element with id "applicants" is populated.
 * 2. When the "Accept player" button is pressed, the player is removed from the ul elemenet with the id "applicants"
 * 2a. The ul element with the id "acceptedPlayers" is populated by the Player that has been accepted.
 * 3. When the "Add to blue team" button is pressed, the Player is removed from the ul element with the id "acceptedPlayers" and added to the ul element with the id "blueTeam".
 * 3a. The same as 3, but with the "Add to red team" button moving them to the ul element with the id "redTeam".
 */