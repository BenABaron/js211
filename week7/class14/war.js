'use strict'

console.log("war.js connected")

/**
 * WHAT DO WE NEED TO DO?
 * When play game button is pressed:
 * -Create a new, shuffled deck
 * -Split the deck between the player and the computer (create 2 hands)
 * -That's it!
 * When the draw button is pressed:
 * -Draw the top card from both hands
 * -Compare the cards drawn
 * --IF one card is a higher value than the other, put all cards into the winner's hand
 * --IF they're the same value
 * ---Both players play one card face down, then another face up
 * ---Compare the face up cards, see previous notes
 * When one hand is empty, game over!
 */

let playButton = document.getElementById('playButton');
let drawButton = document.getElementById('drawButton');
let compareButton = document.getElementById('compareButton');
let currentDeck;

playButton.addEventListener('click', function(){

  console.log("Play button has been pressed!");

  // Get a new deck
  let fetchResult = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

  // process result into json
  let jsonResponse = fetchResult.then(function(response){
    console.log("Processing the results", response);
    return response.json();
  })

  // split the deck into two piles
  jsonResponse.then(function(json){
    currentDeck = json;

    console.log("Before splitting", currentDeck);

    // Draw half the deck
    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=26`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      let cards = [];

      for (let i = 0; i < json.cards.length; i++) {
        cards.push(json.cards[i].code);
      }

      let cardsString = cards.toString();

      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/add/?cards=${cardsString}`);

    })

    // Create CPU hand
    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=26`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      let cards = [];

      for (let i = 0; i < json.cards.length; i++) {
        cards.push(json.cards[i].code);
      }

      let cardsString = cards.toString();

      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/add/?cards=${cardsString}`)
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log("current deck status", json);
        currentDeck = json;
      })
    })
    
  })

  // Split the deck

  // })

})


let playerCard;
let cpuCard;

drawButton.addEventListener('click', function(){

  console.log("Draw button has been pressed!");

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/draw/?count=1`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    playerCard = json.cards[0].code;
    console.log("player card drawn");
    currentDeck = json;
  })

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/draw/?count=1`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    cpuCard = json.cards[0].code;
    console.log("cpu card drawn");
    currentDeck = json;
  })

})

compareButton.addEventListener('click', function(){
  console.log("The player card drawn is ", playerCard);
  console.log("The cpu card drawn is ", cpuCard);
  console.log("current deck status", currentDeck);
})