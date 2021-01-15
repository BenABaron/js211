// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  function lowercase(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '')
    return str
  }

  hand1 = lowercase(hand1)
  hand2 = lowercase(hand2)

  if (hand1 == hand2) {
    return "It's a tie!"
  } else {
    // Hand 1 picks rock
    if (hand1 === "rock") {
      if (hand2 === "paper") {
        return "Hand two wins!"
      } else if (hand2 === "scissors") {
        return "Hand one wins!"
      }
    }
    // Hand 1 picks paper
    if (hand1 === "paper") {
      if (hand2 === "rock") {
        return "Hand one wins!"
      } else if (hand2 === "scissors") {
        return "Hand two wins!"
      }
    }
    // Hand 1 picks scissors
    if (hand1 === "scissors") {
      if (hand2 === "rock") {
        return "Hand two wins!"
      } else if (hand2 === "paper") {
        return "Hand one wins!"
      }
    }
  }

  // Write code here
  // Use the unit test to see what is expected

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });

  // additional tests for RPS

  describe('RPS Unit Test Assigment', function(){

    it('should handle bad input', function(){
      let actual = rockPaperScissors('boot', 'roach')
      let expected = 'boot'
      assert.equal(actual, expected)
    })

    it('should handle vulgar language', function(){
      let actual = rockPaperScissors('private parts', 'other private parts')
      let expected = 'no bad language please'
      assert.equal(actual, expected)
    })

    it('should make fire beat everything', function(){
      let actual = rockPaperScissors('fire', 'literally anything')
      let expected = 'fire'
      assert.equal(actual, expected)
    })

    it('should decide which hand is cooler', function(){
      let actual = rockPaperScissors('Guy Fieri', 'Bob Ross')
      let expected = 'Guy Fieri'
      assert.equal(actual, expected)
    })

    it('should decide which number is bigger', function(){
      let actual = rockPaperScissors("seven", "eleven")
      let expected = 'eleven'
      assert.equal(actual, expected)
    })

  })

} else {

  // always returns ask the user for another input
  getPrompt();

}