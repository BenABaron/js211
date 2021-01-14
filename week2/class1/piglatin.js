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

// put functions from class here

function smallestNonNegative(num1, num2){
  if (num1<0) {
    return num2
  } 
  
  if (num2<0) {
    return num1
  }
  
  if (num1<num2) {
    return num1
  } else {
    return num2
  }
  
}

// b e n e n o
// 0 1 2 3 4 5

let indexOfFirstVowel = function(word) {
  // first fine the indexes of all vowels
  // compare vowels one at time, carrying the smaller indexed vowel
  let aIndex = word.indexOf("a")
  let eIndex = word.indexOf("e")
  let iIndex = word.indexOf("i")
  let oIndex = word.indexOf("o")
  let uIndex = word.indexOf("u")

  let vowelArray = [aIndex, eIndex, iIndex, oIndex, uIndex]

  let vowel = -1

  for (let x = 0; x < vowelArray.length; x++) {
    vowel = smallestNonNegative(vowel, vowelArray[x])
  }

  return vowel
}

/**
 * RULES:
 * 
 * if the word starts with a vowel, add -yay to the end
 * EX: egg -> eggyay; elephant -> elephantyay
 * 
 * if the word has a vowel, then split the word in to 2 parts at the vowel
 * then swap the 2 parts, then add -ay to the end
 * EX: fox -> f + ox -> oxf -> oxfay
 *     conditional -> c + onditional -> onditionalc -> onditionalcay
 * 
 * if the word has no vowel, then add -ay to the end
 * EX: tsk -> tskay; pftt -> pfttay
 * 
 */

/**
 * ORDER OF OPERATIONS:
 * 
 * First, lowercase and remove spaces from input
 * Second, fine the index of the first vowel of the word. Then,
 * - if the index = 0, add "yay" to the end of the word
 * - if the index = -1, add "ay" to the end of the word
 * - if the index > 0, then,
 * -- get substring from 0 to vowelIndex, and substring from vowelIndex to end of word
 * -- Take substrings and put end of word before beginning of word
 * -- add "ay" to the end of the new string
 * 
 */

const pigLatin = (word) => {

  // Lowercase and remove spaces from input
  function scrubInput(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '')
    return str
  }

  word = scrubInput(word)

  // Find the index of the first vowel, store in a variable

  let firstVowelIndex = indexOfFirstVowel(word)

  // if the index = 0, add "yay" to the end of the word

  if (firstVowelIndex === 0) {
    word = word.concat("yay")
  }

  // if the index = -1, add "ay" to the od of the word

  if (firstVowelIndex === -1) {
    word = word.concat("ay")
  }

  // if the index > 0, then,

  if (firstVowelIndex > 0) {

  // -- get substring from 0 to vowelIndex, and substring from vowelIndex to end of word

  let part1 = word.substring(0, firstVowelIndex)
  let part2 = word.substring(firstVowelIndex)

  // -- Take substrings and put end of word before beginning of word

  let flippedWord = part2.concat(part1)

  // -- add "ay" to the end of the new string

  word = flippedWord.concat("ay")

  }

  // return the changed string

  return word

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.