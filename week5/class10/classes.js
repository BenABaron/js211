/**
 * class that represents a student in our school
 * Every student has a name, an id, a dob, and a collection of grades
 * 
 * 
 * when a student instance is created,
 * set the name from the input, 
 * set dob from the input, 
 * and generate a random ID for the student,
 * and instantiate the collections of grades as an empty array
 * 
 * 
 * methods:
 * getAvg() : this method should return the average grade for the student
 * getMin() : this method should return the minimum grade for the student
 * isPassing() : returns true if the student is passing (passing is when the avg grade is a 70 or above)
 * addGrace(grade) : this method will add the passed in grade to the student's "gradebook"
 * 
 * What if grades weren't just a number, but an object with a name and number (name of assignment, grade of assignment)
 */

class Student {

  constructor(name, dob){

    this.name = name;
    this.dob = dob;
    let randomNumber = Math.floor(Math.random()*100);
    this.id = randomNumber;
    this.assignments = [];

  }

  getAvg(){

    if (this.assignments.length == 0) {
      return null;
    }

    let sum = 0;

    this.assignments.forEach(function(number){
      sum = sum + number.grade;
    })

    let average = sum / this.assignments.length

    return average;

  }

  getMin(){

    if (this.assignments.length == 0) {
      return null;
    }

    let min = this.assignments[0].grade;

    this.assignments.forEach(function(number){
      if (number.grade < min) {
        min = number.grade;
      }
    })

    return min;

  }

  isPassing(){

    if (this.getAvg() > 70) {
      return true;
    } else {
      return false;
    }

  }

  addAssignment(assn){

    this.assignments.push(assn);

  }

}

class Assignment{

  constructor(grade, aname){
    this.grade = grade;
    this.aname = aname;
  }

}

// let towers = new Assignment(90, "towers")
// let mastermind = new Assignment(99, "mastermind")
// let TTT = new Assignment(52, "Tic Tac Toe")


let Ben = new Student("Ben", "May 12th, 1996")

// Ben.addAssignment(towers);
// Ben.addAssignment(mastermind);
// Ben.addAssignment(TTT);
console.log(Ben.getAvg());
console.log(Ben.getMin());
console.log(Ben.isPassing());
console.log(Ben.assignments);

