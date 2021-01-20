'use strict'

console.log("Loading js file");

// get the button element from the DOM via ID
let button = document.getElementById("inputButton")

// attach the function to the 'click' event
// so when the button is clicked, the function gets called
button.addEventListener('click', function(){
  console.log("The button got clicked")

  // get the input element from the DOM
  let inputBox = document.getElementById("inputBox")

  // read the actual input from the input element
  let input = inputBox.value

  // console log the input to check and debug
  console.log("The user entered", input)

  // call the function to do the translation
  let pigWord = pigLatin(input)

  // grab the span that holds the translation from the DOM
  let span = document.getElementById("translation")

  // change text that's on the inside of the span
  span.innerText = pigWord
})

// required functions for pigLatin to run
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

// actual pigLatin function
const pigLatin = (word) => {

  // put all words into an array

  let wordArray = word.split(" ")

  wordArray = wordArray.filter(Boolean)

  // Lowercase and remove spaces from array values
  function scrubInput(str) {
    str = str.toLowerCase();
    str = str.replace(/ /g, '')
    return str
  }

  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = scrubInput(wordArray[i])
  }
  
  for (let i = 0; i < wordArray.length; i++) {
    
    // Find the index of the first vowel, store in a variable
    
    let firstVowelIndex = indexOfFirstVowel(wordArray[i])

    // if the index = 0, add "yay" to the end of the word

    if (firstVowelIndex === 0) {
      wordArray[i] = wordArray[i].concat("yay")
    }

    // if the index = -1, add "ay" to the od of the word

    if (firstVowelIndex === -1) {
      wordArray[i] = wordArray[i].concat("ay")
    }

    // if the index > 0, then,

    if (firstVowelIndex > 0) {``

    // -- get substring from 0 to vowelIndex, and substring from vowelIndex to end of word

    let part1 = wordArray[i].substring(0, firstVowelIndex)
    let part2 = wordArray[i].substring(firstVowelIndex)

    // -- Take substrings and put end of word before beginning of word

    let flippedWord = part2.concat(part1)

    // -- add "ay" to the end of the new string

    wordArray[i] = flippedWord.concat("ay")

    }

  }

  // return the changed string

  word = wordArray.toString()

  word = word.replace(/,/g, ' ')

  return word

}