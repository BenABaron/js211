let name = "Ben"
let age = 24
let isAlive = true
let address = {
  street: "8800 First Street",
  city: "Austin",
  state: "Texas",
  zip: "78748"
}

// write a function, that will generate a happy birthday message
// should take in 2 variables
// name
// age

// /**
//  * 
//  * @param {string} name name of the person
//  * @param {number} age age of the person
//  */

// let birthdayMessage = (name, age) => {
//   let message = `Hello ${name}, it seems today is your birthday! Congratulations on revolving around the sun ${age} times. Because of this exciting event we'd like to offer you $10 off your next purchase at Pottery Barn within 30 days. Happy birthday!`;
//   return message;
// }

// let birthday1 = birthdayMessage("Giles", 24);
// console.log(birthday1)

// let birthday2 = birthdayMessage("Mr. Smith", 113)
// console.log(birthday2)

let justHi = function(){
  return "Hi, how are you?"
}

let msg = justHi();

// for functions
// when defining a function, you need the name, input, and logic

let bigBadF = function(input1, input2){
  // code, AKA logic
  // the code to actually do what the function does

  // some functions return something.
  return 1;
  // if you do not specify a return keyword, the function automatically returns undefined when it exits (or is done)
}

/**
 * 
 */