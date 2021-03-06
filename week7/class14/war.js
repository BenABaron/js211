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
let checkButton = document.getElementById('checkButton');
let currentDeck;




// SET UP - ACQUIRE AND SPLIT THE DECK INTO TWO PILES
playButton.addEventListener('click', function(){

  console.log("Play button has been pressed!");

  // Get a new deck
  let fetchResult = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

  // process result into json
  let jsonResponse = fetchResult.then(function(response){
    console.log("Processing the results", response);
    return response.json();
  })

  // split the deck into two hands
  jsonResponse.then(function(json){

    currentDeck = json;

    console.log("Before splitting", currentDeck);

    // Draw half the deck for the player
    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=26`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // put the drawn half into the player pile
      let cards = [];

      for (let i = 0; i < json.cards.length; i++) {
        cards.push(json.cards[i].code);
      }

      let cardsString = cards.toString();

      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/add/?cards=${cardsString}`)
      .then(function(response){
        return response.json();
      });

    })

    // Draw the other half for the cpu
    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/draw/?count=26`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // put the other half into the cpu pile
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

})




let playerCard;
let cpuCard;
let pile = [];

// GET THE TOP CARD FROM THE PLAYER PILE
let drawPlayer = function(){

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/draw/bottom`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    playerCard = json.cards[0].code;
    console.log("Player drew ", playerCard);
    pile.push(json.cards[0].code)

    fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/add/?cards=${json.cards[0].code}`)
    .then(function(response){
      return response.json();
    })
  })
  
}

  // GET THE TOP CARD FROM THE CPU PILE
let drawCPU = function(){

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/draw/bottom`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
      cpuCard = json.cards[0].code;
      console.log("CPU drew ", cpuCard);
      pile.push(json.cards[0].code)

      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/add/?cards=${json.cards[0].code}`)
      .then(function(response){
        return response.json();
      })
  })

}

// THE DRAW BUTTON ACQUIRES THE TOP CARD FROM EACH PILE
drawButton.addEventListener('click', function(){
  console.log("Draw button pressed!");
  drawPlayer();
  drawCPU();
});





// THIS IS WHERE WE CONVERT THE DRAWN CARD INTO AN INTEGER
let cardIntParse = function(num){
  
    if (num == "0") {
      return 10;
    } else if (num == "J") {
      return 11;
    } else if (num == "Q") {
      return 12;
    } else if (num == "K") {
      return 13;
    } else if (num == "A") {
      return 14;
    } else {
      return parseInt(num);
    }

}

// SEND CARDS TO THE CORRECT HAND

let playerHand;
let cpuHand;

// IF PLAYER WINS, GIVE THEM THE CARDS
let playerWin = function(){
  console.log("Player wins!")
  
  pile.forEach(function(element, i){
    setTimeout(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/add/?cards=${element}`)
    }, i * 250)
  })

  pile = [];
}

// IF CPU WINS, GIVE THEM THE CARDS
let cpuWin = function(){
  console.log("CPU wins!")
  
  // pile.forEach(function(element){
  //   fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/add/?cards=${element}`)
  // })
  
  pile.forEach(function(element, i){
    setTimeout(() => {
      fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/add/?cards=${element}`)
    }, i * 250)
  })

  pile = [];
}

// IF THERE'S A TIE
let roundTie = function(){
  setTimeout(() => {
    drawPlayer();
  }, 500);
  setTimeout(() => {
    drawCPU();
  }, 500);
  setTimeout(() => {
    drawPlayer();
  }, 1000);
  setTimeout(() => {
    drawCPU();
  }, 1000);
}

// DISPLAY THE CURRENT HANDS
let displayHands = function(){

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/playerPile/list/`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    playerHand = json.piles.playerPile.cards;
  })

  fetch(`https://deckofcardsapi.com/api/deck/${currentDeck.deck_id}/pile/cpuPile/list/`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    cpuHand = json.piles.cpuPile.cards;
  })

  setTimeout(function(){
    console.log("Player Hand", playerHand);
    console.log("CPU Hand", cpuHand);
  }, 250);

}

// THIS IS WHERE WE COMPARE THE CARDS
let cardCompare = function(player, cpu){
  
  player = cardIntParse(player);
  cpu = cardIntParse(cpu);

  console.log("player value is ", player);
  console.log("cpu value is ", cpu);

  if (player == cpu) {
    roundTie();
  } else if (player > cpu) {
    playerWin();
  } else {
    cpuWin();
  }

}

compareButton.addEventListener('click', function(){
  console.log("The cards in the pile are ", pile);
  
  // get the values of the cards drawn
  let cpuCardValue = cpuCard[0];
  let playerCardValue = playerCard[0];
  
  // COMPARE THE VALUES
  cardCompare(playerCardValue, cpuCardValue);

})

checkButton.addEventListener('click', function(){
  displayHands();
});