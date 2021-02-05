// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0

do {
  i++
  // console.log(i)
} while (i < 1000)

// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"


let jane = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// Create a function that logs out the keys of the object using Object.keys().

let logKeys = function(obj){

  return Object.keys(obj)

}

console.log(logKeys(jane));

// Create a function that logs out the keys and values of the object using Object.entries().

let logEntries = function(obj){

  return Object.entries(obj)

}

console.log(logEntries(jane))

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  },
  {
    firstName: "Ben",
    lastName: "Baron",
    birthDate: "Jan 6, 1996",
    gender: "male"
  },
  {
    firstName: "Caitlyn",
    lastName: "Dean",
    birthDate: "Jan 7, 1925",
    gender: "female"
  },
  {
    firstName: "Giles",
    lastName: "Adkins",
    birthDate: "Jan 8, 1996",
    gender: "male"
  }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

for (const i of arrayOfPersons) {
  let birthday = i.birthDate;
  if (birthday.slice(-1) % 2 == 1) {
    console.log(birthday)
  }
}

// Use .map() to map over the arrayOfPersons and console.log() their information.

arrayOfPersons.map(function(person){
  console.log(`${person.firstName} ${person.lastName} is a ${person.gender} born on ${person.birthDate}`)
})

// Use .filter() to filter the persons array and console.log only males in the array.

arrayOfPersons.filter(function(person){
  if (person.gender == 'male') {
    console.log(person)
  }
})

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

let oldGuys = arrayOfPersons.forEach(function(person){

  let birthYear = person.birthDate.slice(-4);

  if (birthYear < 1990) {
    console.log(person)
  }

})

console.log(oldGuys)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.