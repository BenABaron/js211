'use strict'

let students = [];

students.push({
  'name':'Jimbo',
  'passing': false
})

students.push({
  'name':'Jay',
  'passing': true
})

students.push({
  'name':'Bob',
  'passing': true
})

students.push({
  'name':'McLain',
  'passing': false
})

students.push({
  'name':'Tool Man',
  'passing': true
})

/**
 * Write a function that takes iin a student object
 * and returns (not prints) one of the following:
 * Hi X, you are currently passing my class!
 * Hi X, please come see me.
 */

// map is used to conver every element from whatever it is
// to something else

// let generateMessage = function(student) {
//   if (student.passing) {
//     return `Hi ${student.name}, you are currently passing my Class!`
//   } else {
//     return `Hi ${student.name}, please come see me.`
//   }
// }

// let messages = students.map(generateMessage);
// console.log(messages);

// use the filter to filter down to the failing students
// use the map to generate a message for those failing students
// use the for each to console.log the message

// filtering down to failing students
let failingStudents = students.filter(function(student, index){
  if (student.passing == false) {
    return true;
  } else {
    return false;
  }
})

// generate a message for the failing students
let message = failingStudents.map(function(student, index){
  return `Hi ${student.name}, please come see me after class you absolute idiot.`;
})

// print (aka email, text, etc.) each generated message
message.forEach(function(msg, index){
  console.log(msg)
})


/**
 * Use the filter method on the students array
 * to filter down to just the failing students
 * 
 * Then use the forEach method on the failing students
 * to print their names
 */

// console.log(students);

// let failingStudents = students.filter(function(student, index){
//   if (student.passing == false) {
//     return true;
//   } else {
//     return false;
//   }
// })

// console.log(failingStudents);

// failingStudents.forEach(function(element, index){
//   console.log(`${element.name} is a failure`)
// })