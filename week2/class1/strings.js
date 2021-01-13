// what do we know about strings?
// you can use single or double quotes - '' or ""
// how is a string different than a number?
// they have lots of methods!
// concat: put one at the end of the other
// method vs properties?
// method is a function that is "built in"
// properties are attributes about the thing
// methods are called on particular instances, functions tend to be global




// // length method
// let fruit = "apple"
// // console.log(fruit.length)


// // trim method
// let sentence = "   The brown fox jumped over the lazy dog       1     ae   f c a  a     "

// const newSentence = sentence.trim()
// // console.log(newSentence)


// // index method
// let fruit2 = "apple"
// let v = fruit.indexOf('p')
// // console.log(v)
// // index of returns the position of the desired character
// let sentence2 = "the big brown wolf ate the brown chicken"

// let word = "brown"

// console.log("brown is at positions:", sentence2.indexOf(word, 9))


// 
let a = 12
let e = -1
let u = 3
let i = 5
let o = -2


/**
 * write a function that takes in 2 numbers,
 * and returns the smallest non-negative number.
 * what should I do if both numbers are negative? just pick one of them
 */

function smallestNonNegative(num1, num2){
  if (num1<0) {
    return num2
  } else if (num2<0) {
    return num1
  } else {
    if (num1<num2) {
      return num1
    } else {
      return num2
    }
  }
}

// console.log(smallestNonNegative(a, i)) // 5
// console.log(smallestNonNegative(u, e)) // 3
// console.log(smallestNonNegative(e, o)) // -2




// write a function that will return the position of the first vowel
// using the function smallestNonNegative, and indexOf().

/**
 * this function will return the position of the first vowel of the word that is passed in
 * @param {string} word the word to look for the vowel in
 */
let indexOfFirstVowel = function(word) {
  // first fine the indexes of all vowels
  // compare vowels one at time, carrying the smaller indexed vowel
  let aIndex = word.indexOf("a")
  let eIndex = word.indexOf("e")
  let iIndex = word.indexOf("i")
  let oIndex = word.indexOf("o")
  let uIndex = word.indexOf("u")

  let vowelArray = [aIndex, eIndex, iIndex, oIndex, uIndex]

  vowel = -1

  for (let x = 0; x < vowelArray.length; x++) {
    vowel = smallestNonNegative(vowel, vowelArray[x])
  }

  return vowel
}

let word1 = "bobcat"
let word2 = "meow"
let word3 = "elephant"
let word4 = "TskTsk"

console.log(indexOfFirstVowel(word1))
console.log(indexOfFirstVowel(word2))
console.log(indexOfFirstVowel(word3))
console.log(indexOfFirstVowel(word4))

let word5 = "conditional"

let part1 = word5.substring(3, 6)
console.log(part1)

let part2 = word5.substring(2)
console.log(part2)

// we have a function that can find the position of the first vowel
// we have a method that can be used to split the word, at an index


// write a function that will take in a single word (as a string)
// and return the piglatin translation of the word

/**
 * RULES:
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
 */