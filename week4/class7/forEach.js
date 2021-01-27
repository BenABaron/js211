'use strict'

// forEach is used to perform 'logic'
// on every element of the array

// ******************************************

// let friends = ["john", 'jenny', 'jack', 'jill'];

// /**
//  * This is us defining what we want done on an element
//  * This function prints to the console whatever is passed to it
//  * @param {*} something 
//  */
// let print = function(element, index) {
//   console.log(element, "is in position", index);
// }

// // this is how I would print every element myself
// // for(let i = 0; i<friends.length; i++) {
// //   console.log(friends[i]);
// // }

// // any function that you pass in to the foreach function must meet certain "contract requirements"
// // 1. the first input to the function passed in si the element of the array
// // 2. the second input to the function passed in is the index of the element in the array
// // 3. the third input to the function passed in is the array itself
// friends.forEach(print)

// ******************************************

// let students = ['mike', 'matt', 'mary', 'marge'];


// // Hi x, thanks for being in my class.

// students.forEach(function(element, index){
//   console.log(`Hi ${element}, thanks for being in my class.`)
// })

// when you pass a function to another function/method,
// the function being passed in, is generally called a 'callback'

// ******************************************

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]

/**
 * 1. Use the forEach function to print every number
 * 2. change the forEach function to only print the odd numbers
 */

// to check if a number is odd, (num % 2 == 0) will be true for an even number, and false for an odd number

let print = function(element, index) {
  console.log(element);
}

let printOdd = function(element, index) {
  if (element % 2 != 0) {
    console.log(element);
  }
}

numbers.forEach(print);
numbers.forEach(printOdd);