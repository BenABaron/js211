'use strict'

// filter is used to filter 'in' elements from the array

let friends = ['john', 'betty', 'marge', 
                'mark', 'james', 'mary', 
                'adam', 'bob']


/**
 * Write a function that takes in a string,
 * and returns true if the first letter is an "M"
 * and returns false, if the first letter is not an "M"
 */

let startsWithM = function(word){
  if (word[0] == 'm') {
    return true;
  } else {
    return false;
  }
}



let numbers = [1,2,3,4,5,6,7,8,9];

// filter down to just odd numbers
let odd = numbers.filter(function(element, index){
  if (element % 2 == 0) {
    return false;
  } else {
    return true;
  }

})

// for every odd number print the sentence
odd.forEach(function(element, index){
  console.log(element, "is an odd number");
})


let specialFriends = friends.filter(startsWithM)

console.log(specialFriends)
console.log(friends)





// ******************************************