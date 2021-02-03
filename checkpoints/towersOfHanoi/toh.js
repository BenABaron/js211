'use strict';

/**
 * 20 pts - your code correctly moves peices - DONE
 * 20 pts - your code correctly detects an illegal move - DONE
 * 20 pts - your code correctly detects a win - DONE
 * 20 pts - sufficiently understandable code comments or write up of your code - DONE
 * 20 pts - 3 new tests - DONE
 */

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

// DUE FEBRUARY 2ND!!!

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (start, end) => {
  // Your code here

  // responsible for moving a piece
  /**
   * Needs to move the last number of the 'start' array to the end of the 'end' array
   * This can be done with by pushing into the end array, a pop'd value of the start array
   * however, the values given are strings, so we need to get the arrays associated with the string
   */

  let startArr = stacks[start];
  let endArr = stacks[end];

  endArr.push(startArr.pop())

}

const isLegal = (start, end) => {
  // Your code here

  // checks to see if a move is legal, return true if it is.
  // illegal moves - a larger number can not be on top of a smaller number

  /**
   * Needs to check if the piece being moved is safe to put into the new array
   * Thus, if a number is greater than the previous number in the array, it's not legal
   * 
   * ORDER OF OPERATIONS
   * Access the two arrays and put them into variables
   * Find the value of the last number in the starting array - call this "x"
   * Find the value of the last number in the ending array - call this "y"
   * If x < y, return true
   * If there is nothing in the array, also return true
   * Else, do nothing (return false)
   */

  let startArr = stacks[start];
  let endArr = stacks[end];

  let x = startArr.slice(-1);
  let y = endArr.slice(-1);

  if (!endArr[0]) {
    return true;
  }

  if (x < y) {
    return true;
  }

  return false;

}

const checkForWin = () => {
  // Your code here

  // return true if board is in a winning state

  /**
   * Options:
   * Check if stacks b || c == [4, 3, 2, 1] //DIDN'T WORK
   * Check if stacks b || c (.length) == 4 //THIS WORKS
   */
  if (stacks.a.length == 4) {
    console.log("You need to move them to another stack!");
  }

  if (stacks.b.length == 4) {
    return true;
  }

  if (stacks.c.length == 4) {
    return true;
  }  

  return false;

}

/**
 * 
 * @param {string} startStack the stack from which a piece is being pulled from
 * @param {string} endStack the stack which is receiving the piece
 */
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  /**
   * ORDER OF OPERATIONS
   * First, check if the move is legal
   * ** If legal, execute movePiece()
   * ** If not legal (false), alert the user that the move is illegal
   * Second, check for a win
   * ** If it's a win, print a message!
   * ** If it's not a win, do nothing
   */

  function scrubInput(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '')
    return str
  }

  startStack = scrubInput(startStack)
  endStack = scrubInput(endStack)

  if(startStack == "harry" && endStack == "yerawizard"){
    console.log("I'm not a wizard! I'm just Harry!")
    startStack = 'a'
    endStack = 'a'
  }

  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  } else {
    console.log("Illegal move! Try again!")
  }

  if(checkForWin()) {
    console.log("Congrats! You won! Here's your winning board:")
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
    console.log("")
    console.log("Play again?")
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    it('should clear spaces from the input', () => {
      towersOfHanoi('   a', '  b    ');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    it('should lowercase the input', () => {
      towersOfHanoi('A', 'B');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    it('should not allow a win on stack "a"', () => {
      stacks = { a: [4, 3, 2, 1], b: [], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}