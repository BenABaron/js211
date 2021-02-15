/**
 * simple class that represents a person
 * - name attribute that holds the person's name
 * - title attribute that hold the person's job title
 */

class Person {
  name;
  title;

  constructor(inputName, inputTitle){
    this.name = inputName;
    this.title = inputTitle;
  }

  hi(){
    return `Hi my name is ${this.name}. Nice to meet you!`;
  }

}

// child class
class Hero extends Person {
  superpower;

  constructor(inputName, inputTitle, inputSuperpower) {
    super(inputName, inputTitle); // pass the 2 attributes to be handled by the base class's constructor

    this.superpower = inputSuperpower;
  }
}


class Villian extends Person {
  weakness;

  constructor(inputName, inputWeakness) {
    super(inputName, "Villian");
    this.weakness = inputWeakness;
  }

  //overriding a method
  hi(){
    return `I am ${this.name}. This is going to be a bad day for you!`
  }
}

let mike = new Person("Mike Wazzowski", "Trainer");
let batman = new Hero("Bruce Wayne", "Hero", "Resourceful");
let greenGoblin = new Villian("Green Goblin", "Spider-Man")

console.log(mike.hi());
console.log(batman.hi());
console.log(greenGoblin.hi());