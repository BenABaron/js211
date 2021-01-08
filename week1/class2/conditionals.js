'use strict'


// let tall = true;
// let handsome = true;


/**
 * Create a function that takes in
 * 2 inputs
 * @param {boolean} handsome
 * @param {boolean} tall
 * @returns some exclamation based on the different criteria for handsome and tall
 */
// if they are handsome and tall return "you hit the genetic jackpot"
// if they are not handsome and not tall return "man tough luck"
// if they are either handsome or tall, but not both, return "it can be worse!"

/*
function Tinder(tall, handsome) {
  if (tall && handsome) {
    return "You hit the genetic jackbot!";
  } else if (tall || handsome) {
    return "It could be worse!";
  } else {
    return "Man, tough luck ):";
  }
}
*/


/**
 * if you are single, and make less than 75000, you get 600
 * if you are married and together make less than 150000, you get 1200
 * for every child you have you get an additional 600
 * 
 * @param {number} income: the household income
 * @param {boolean} married: true if married, false if single
 * @param {number} numDependents: the number of dependents
 * @return your stimulus check amount based on the rules above
 */

/*
function Stimulus(income, married, numDependents) {
  if (married === true) {
    if (income < 150000) {
      return (1200 + numDependents*600)
    } else {
      let limit = ((1200 + numDependents*600)-((income-150000)/100))
      if (limit >= 0) {
        return limit
      } else {
        return 0
      }
    }
  } else {
    if (income < 75000) {
      return (600 + numDependents*600)
    } else {
      let limit = ((600 + numDependents*600)-((income-75000)/100))
      if (limit >= 0) {
        return limit
      } else {
        return 0
      }
    }
  }
}

console.log(Stimulus(200000, true, 1))
console.log(Stimulus(1000000, true, 1))
console.log(Stimulus(300000, false, 0))
console.log(Stimulus(86000, false, 0))
// for every $100 over the threshold, you lose $1

// console.log("If you're single, make less than 75k, and have one kid you get $" + Stimulus(50000, false, 1))
// console.log("If you're single, make more than 75k, and have one kid you get $" + Stimulus(80000, false, 1))
// console.log("If you're married, make less than 150k, and have one kid you get $" + Stimulus(80000, true, 1))
// console.log("If you're married, make less than 150k, and have seven kids you get $" + Stimulus(80000, true, 7))
*/

/*
if(tall || handsome) {
  console.log("Sure thing");
} else if (tall && handsome) {
  console.log("Yes Please");
} else {
  console.log("I am not sure");
}

// Proof of concept

let grade = 102

if(grade >= 90){
  // if the predicate is true, then this code runs
  console.log("You made an A!");
} else if (grade >= 80) {
  console.log("You made a B!");
} else if (grade >= 75) {
  console.log("You made a C!");
} else if (grade >= 70) {
  console.log("You made a D!");
} else if (grade >= 100) {
  console.log("Super Duper! You made an A+!")
}

else {
  console.log("You made an F!");
}


console.log("All done")
*/

let winter = true

let fruit = winter? "watermelon" : "apple";

console.log(fruit);