/**
 * FOR LOOPS
 * what are they?
 * 
 * loop through some code for however many times you specify, or until a certain condition is ment
 * 
 * run them on objects and arrays
 * 
 * for of and for in loops, while loops, do-while loops, for loops
 * 
 * for loops have 3 statements
 * 1. set the variable before the loops starts
 * 2. condition for when it should stop looping
 * 3. increment or decrement
 */



// 1. a statement that is run before the loop starts, this is executed only once
// 2. should I go again? true/false statement, if it resolves to true, then execute the iteration 1 more time
// 3. the code that should be executed for every iteration
// 4. what to do to prepare for the next iteration
// for(1; 2; 4) {
//   3
// }

// let us print the numbers 1 through 5
// 1. set a variable to hold the number 1
// 2. ask if the variable is less than or equal to 5
// 3. print the variable
// 4. increment the variable by 1

// for(let num = 1; num <= 5; num += 1) {
//   console.log(num);
// }

/**************************
 * computer memory:
 * 
 * num : 6
 * ************************
 * computer console:
 * 
 * 1
 * 2
 * 3
 * 4
 * 5
 */

// write a for loop to print all even numbers between 1 and 100

// for(let i = 2; i <= 100; i+=2) {
//   console.log(i)
// }

// // backwards
// for(let i = 100; i >= 1; i-=2) {
//   console.log(i)
// }

// for the number 1 through 45
// printing fizz if the number is divisible by 3
// printing buzz if the number is divisible by 5
// printing fizzbuzz if the number is divisible by 3 and 5
/**
 * 1
 * 2
 * fizz
 * 4
 * buzz
 * fizz
 * 7
 * 8
 * fizz
 * buzz
 * 11
 * fizz
 * 13
 * 14
 * fizzbuzz
 * ...
 * 
 * Check if number is divisible by 3
 * if true, let num = "fizz"
 * 
 * 
 */


for(let n = 1; n <= 45; n++) {

  if(n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz")
  }

  else if(n % 3 === 0) {
    console.log("fizz")
  }

  else if(n % 5 === 0) {
    console.log("buzz")
  }

  else {
    console.log(n)
  }

}

// for(let n = 1; n <= 45; n++) {

//   let num = ''

//   if(n % 3 === 0) {
//     num += "fizz"
//   }

//   if(n % 5 === 0) {
//     num += "buzz"
//   }

//   if(n % 3 != 0 && n % 5 != 0) {
//     num = n
//   }

//   console.log(num)

// }