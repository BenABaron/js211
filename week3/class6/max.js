'use strict'

/**
 * HOW TO FIND THE BIGGEST NUMBER IN THE BOOK
 * Start with the first number in the book
 * Compare that number with the second number in the book
 * Which is larger? Whichever is bigger gets "held" as the current biggest number.
 * After that, compare the number that is currently being "held" with the third number.
 * Once again, whichever of those two (the number being "held" and the third number) is bigger then becomes the number being "held" as the current biggest number
 * Repeat this process with every number in the book, comparing the current biggest number and the next number in the sequence.
 * Once you have reached the last number in the book, whatever number being "held" should be the largest number in the book.
 * 
 * EXAMPLE: [1, 6453, 177382, 345, 75812, 86932934, 84, 10, 657283]
 * Compare the first two numbers and hold the larger one in your brain. 1 < 6453, so 6453 is the current biggest number.
 * Then compare the next number to the current biggest number. 6453 < 177382, so 177382 is the current biggest number.
 * Keep the process going. 177382 > 345. 177382 is still the biggest number.
 * 177382 > 75812. 177382 is still the biggest number.
 * 177382 < 86932934. 86932934 is now the current biggest number.
 * 86932934 > 84. 86932934 is still the biggest number.
 * 86932934 > 10. 86932934 is still the biggest number.
 * 86932934 > 657283. 86932934 is still the biggest number.
 * We've gone through every number given, and the number being held is 86932934. Therefore, 86932934 is the largest number out of the numbers given.
 */

/**
 * This function takes in an array of numbers,
 * and returns the largest number in the array
 * If the array is empty, return null.
 * 
 * @param {array} numbers : is an array of numbers
 * @returns largest number in the array, null if the array is empty or undefined
 */

// let largest = function(numbers) {

//   let largestNum = 0

//   if (numbers.length == 0) {
//     return null
//   }

//   if (numbers.length == 1) {
//     largestNum = numbers[0]
//     return largestNum
//   }

//   if (numbers[0] > numbers[1]) {
//     largestNum = numbers[0]
//   } else if (numbers[0] < numbers[1]) {
//     largestNum = numbers[1]
//   }

//   for (let i = 2; i < numbers.length; i++) {

//     if (numbers[i] > largestNum) {
//       largestNum = numbers[i]
//     }
//   }

//   return largestNum
// }

let largest = function(numbers) {

  // 1. Look at your list if your list has no numbers, then declare that the list is empty and there is no largest number to an empty list, and you are done

  if (!numbers) {
    return null
  }

  // 2. If your list has atleast 1 numbers, then write the first number on the list on a peice of paper

  let piecePaper = numbers[0]

  // 7. repeat steps 3 through 6 untill there are no more numbers
  
  for (let index = 1; index < numbers.length; index++) {
    
    // 3. look at the next number on the list, and remeber it (we will refer to this number as "next number")

    let nextNumber = numbers[index]

    // 4. compare "next number" to the number written down.
    // 5. if the "next number" is bigger than the number on our peice of paper, then erase the number on the paper, and write down 'next number' on the paper
    // 6. if the "next number" is not bigger than the number on the peice of paper, then do nothing

    if (nextNumber > piecePaper) {
      piecePaper = nextNumber
    } else {
      // do nothing since the piece of paper is still bigger
    }
    
  }

  // 8. declare that the number on the peice of paper is the bigest number in the list

  return piecePaper

}

let test1 = [1]; // null
let test2 = undefined; // null
let test3 = [1,2,3,4,5,6,7,8,9,1,2,3,4,54,2,6,346,32,76,12,1] // 346

console.log(largest(test1))
console.log(largest(test2))
console.log(largest(test3))