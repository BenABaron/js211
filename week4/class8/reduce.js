// reduce: reduce the array to 1 thing

// what we want is the sum of all those numbers
// we will start with 0,
// and every line will answer 3 questions:
// 1. What came from the previous round?
// 2. What is the current number?
// 3. What came into this round?
// 4. What should go to the next round?

let numbers = [45, 14, 76, 1, 67, 9, 73, 59, 29, 59, 20]

// if I want to sum, then NEXT is the sum of PREVIOUS and CURRENT
let sum = numbers.reduce(function(previous, current, index){
  return previous + current
}, 0)

console.log(sum)

let max = numbers.reduce(function(previous, current, index){
  if (current > previous) {
    return current
  } else {
    return previous
  }
})

console.log(max)