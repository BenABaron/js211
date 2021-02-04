'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(`${i+1}. ${board[i]}`);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {

  let hintA = 0
  let hintB = 0

  let guessArray = guess.split('');
  let solutionArray = solution.split('');

  guessArray.forEach(function(letter, index){

    if (guessArray[index] == solutionArray[index]) {
      hintA++;
      guessArray[index] = 0
      solutionArray[index] = 1
    } 
  
  })
  
  guessArray.forEach(function(guessLetter, guessIndex){
  
    solutionArray.forEach(function(solutionLetter, solutionIndex){
  
      if (guessLetter == solutionLetter) {
        hintB++
        guessArray[guessIndex] = 0
        solutionArray[solutionIndex] = 1
      }
  
    })
    
  })

  return `${hintA}-${hintB}`

  // console.log(solution)

  // for (let i = 0; i < 4; i++) {
  //   let guessChar = guess.charAt(i);

  //   if (solution.includes(guessChar)) {
  //     let solutionIndex = solution.indexOf(guessChar)

  //     // console.log(`The solution index of ${guessChar} is ${solutionIndex}, compared to ${i}`)

  //     if (solutionIndex == i) {
  //       hintA = hintA + 1
  //     } else {
  //       hintB = hintB + 1
  //     }
  //   }
  // }

  // for (let i = 0; i < letters.length; i++) {
  //   let currentLetter = letters[i];

  //   if (guess.includes(currentLetter)) {
  //     let guessIndex = guess.indexOf(currentLetter);
      
  //     if (solution.includes(currentLetter)) {
  //       let solutionIndex = solution.indexOf(currentLetter)
  
  //       console.log(`The solution index of ${currentLetter} is ${solutionIndex}, compared to ${guessIndex}`)
  
  //       if (solutionIndex == guessIndex) {
  //         hintA = hintA + 1
  //       } else {
  //         hintB = hintB + 1
  //       }
  //     }

  //   }
  // }

}

const mastermind = (guess) => {
  solution = 'gecc'; // Comment this out to generate a random solution
  // your code here

  /**
   * check if the use guessed correctly
   * IF they did, print out "Victory!"
   * IF they did NOT, generate & print out the hint
   * 
   * If they have guessed 10 times so far, then tell them the answer
   */

  /**
   * ORDER OF OPERATIONS:
   * First, we need to check if the guess is equal to the solution
   * IF this is true, print "You guessed it!"
   * IF this is false, execute generateHint() and pass it the guess
   * 
   * Second, we need to add our guess to the board.
   * This can be done with board.push()
   * Once board.length > 9, print the solution and "You lose!""
   */

  if (guess == solution){
    board = []
    console.log("You got it!")
    return "You guessed it!"
  } else {
    console.log(generateHint(guess, solution))
    board.push(guess);
  }

  if (board.length > 9) {
    console.log(`You lose! The solution was ${solution}.`)
    board = []
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}