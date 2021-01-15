// ARRAYS
// they use square brackets
// can hold strings, numbers, objects, booleans



// let fruit = ['apple', 'banana', 'cucumber', 'dragon fruit']

// console.log(fruit[0])

// fruit[0] = 'berry'

// console.log(fruit[0])

/**
 * write a function that takes in an array,
 * 
 * return true if the first 3 elements are the same
 */





let same3 = function(fruit) {

  // if (fruit[0] == fruit[1]) {
  //   if (fruit[1] == fruit[2]) {
  //     return true
  //   }
  // }

  if (fruit[0] == fruit[1] && fruit[1] == fruit[2]) {
    return true
  }

  return false

}

/**
    |     |
  0 |  1  | 2
----+-----+----
  3 |  4  | 5
----+-----+----
  6 |  7  | 8
    |     |
*/

let board = [
    [ 'X', 'O', 'X'],
    [ 'O', 'X', 'O'],
    [ ' ', ' ', 'X']
]





/**
 * write a function that will put a fruit in the position passed in
 *
 * 
 * @param {number} position the position to add the fruit to
 * @param {string} toAdd the fruit we need to add
 * @param {array} theFruitArray the array to add the fruit to
 */

let addFruit = function(position, toAdd, theFruitArray){

  theFruitArray[position] = toAdd

}

let basket = []
addFruit(0, 'apple', basket)
console.log(basket)



const assert = require("assert")

if(typeof describe == 'function') {

  describe('array size 3', function(){
    it("all the same", function(){
        let actual = same3(['apple', 'apple', 'apple']);
        let expected = true;
        assert.equal(actual, expected)
    })

    it("2 the same", function(){
        let actual = same3(['apple', 'banana', 'apple']);
        let expected = false;
        assert.equal(actual, expected)
    })

    it("all different ", function(){
        let actual = same3(['kiwi', 'banana', 'apple']);
        let expected = false;
        assert.equal(actual, expected)
    })
  })

  describe('array bigger than 3', function(){
    it("first 3 the same", function(){
        let actual = same3(['apple', 'apple', 'apple', 'banana']);
        let expected = true;
        assert.equal(actual, expected)
    })

    it("first 3 different the same", function(){
        let actual = same3(['apple', 'banana', 'kiwiw', 'mellon']);
        let expected = false;
        assert.equal(actual, expected)
    })

  })

  describe('array less than 3', function(){
    it("size 2 ", function(){
        let actual = same3(['apple', 'banana']);
        let expected = false;
        assert.equal(actual, expected)
    })

    it("first 2 the same", function(){
        let actual = same3(['apple', 'apple']);
        let expected = false;
        assert.equal(actual, expected)
    })

  })

}


// console.log(same3(['a', 'a', 'a']))
// console.log(same3(['a', 'b', 'a']))
// console.log(same3(['a', 'a', 'c']))
// console.log(same3(['apple', 'apple', 'apple']))
// console.log(same3(['apple', 'banana', 'apple']))
// console.log(same3(['apple', 'apple', 'cucumber']))
// console.log(same3(['apple', 'apple', 'apple', 'banana']))