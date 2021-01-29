// how do I execute callbacks

/**
 * This function will print a number, update it, and print it again
 * 
 * @param {*} callback the function that defines how the number should be updated, takes in the original number
 * @param {*} number the number to print, and is passed to the callback to get updated
 */

let printAndUpdate = function(callback, number) {

  console.log("The number before the update", number);

  number = callback(number);

  console.log("The number after the update", number);

}

/**
 * 
 * @param {array} array the array to loop through
 * @param {function} callback the callback to execute on every element in the array
 */

let myForEach = function(array, callback){
  for(let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

let fruit = ['apple', 'banana', 'clementine'];

myForEach(fruit, function(element){
  console.log(element)
})