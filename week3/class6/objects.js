/**
 * STUFF ABOUT OBJECTS
 * can be added to arrays
 * have keys (properties) and values
 * can hold any data type - strings, numbers, boolean, arrays, other objects
 * 
 * 
 */


let myFriend = {
  name: "John",
  age: 24,
  address: "1234 Main Street",
  isMale: true,
  bestFriend: false
}

let myOtherFriend = {
  name: "Jenny",
  age: 23,
  address: "1612 Main Street",
  isMale: false,
  bestFriend: true
}



let friends = [
  {
  name: "John",
  age: 24,
  address: "1234 Main Street",
  isMale: true,
  bestFriend: false
  },
  {
  name: "Jenny",
  age: 23,
  address: "1612 Main Street",
  isMale: false,
  bestFriend: true
  }
]

// for (let index = 0; index < friends.length; index++) {

//   let currentFriend = friends[index]

//   let text = `Hi ${currentFriend.name}, please text me when you get this`
//   console.log(text)
// }



let fruit = [
  {
    name: 'apple', color: ['red', 'green', 'yellow'], 
    properties: ['juicy', 'tart', 'sandy', 'crunchy']
  },
  {
    name: 'banana', color: ['yellow', 'green', 'black'], properties: ['squishy']
  },
  {
    name: 'orange', color: ['orange'], properties: ['sour']
  },
  {
    name: 'grape', color: ['green', 'red', 'black', 'indigo'], 
    properties: ['seedless', 'juicy', 'boozy']
  }]

// loop through the array of fruit and print the following description:
// An X is an awesome fruit, that can be found in # colors.
// some unique attributes of x is that they are x,x,x,x.

// for (let index = 0; index < fruit.length;  index++) {

//   let currentFruit = fruit[index]

//   let text = ''

//   if (currentFruit.color.length < 2) {
//   text = `The ${currentFruit.name} is an awesome fruit that can be found in ${currentFruit.color.length} color. some unique attributes of ${currentFruit.name}s is that they are ${currentFruit.properties.join(", ")}.`
//   } else {
//   text = `The ${currentFruit.name} is an awesome fruit that can be found in ${currentFruit.color.length} colors. some unique attributes of ${currentFruit.name}s is that they are ${currentFruit.properties.join(", ")}.`
//   }

//   console.log(text)

// }

// How Yousif did it

for (let index = 0; index < fruit.length;  index++) {

  let currentFruit = fruit[index]
  let numColors = currentFruit.color.length
  let name = currentFruit.name
  let properties = currentFruit.properties

  let text = `The ${name} is an awesome fruit that can be found in ${numColors}`
  if (numColors > 1) {
    text += " colors. "
  } else {
    text += " color. "
  }

  text += `Some of the unique attributes of ${name}s is that they are ${properties}.`

  console.log(text)

}