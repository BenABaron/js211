// Classes
// Can be used as templates
// It is an easier way to create multiple objects with the same properties
// There are built in METHODS and you can also create METHODS of your own

// the concept of a constructor

// diff between methods and functions
// when you call the class the parameters are the values in the class (NOT REALLY!!)
let assert = require("assert");
class Car {
  
  mpg; // what is the efficiency of this car?
  tankCapacity; // the capacity of the gas tank in gallons
  fuelLevel = 0; // current fuel level in gallons - how much gas my car has
  id; // the ID for this car
  odometer = 0; // number of miles the car has travalled

  // this is the constructor
  // this method gets called when the 'new' instance is constructed
  constructor(inputMpg, inputTankCapacity){
    // generate a random number between 0 and 1
    // multiply the number by 10000 to shift the decimal 4 places
    // round down, to get a whole number
    let randomNumber = Math.floor(Math.random()*10000);
    this.id = randomNumber;

    this.tankCapacity = inputTankCapacity;
    this.mpg = inputMpg;
  }

  // drive, affects fuel level and odometer
  // fuelUp: affects fuel level


  // write a method that will 'simulate' fueling up
  /**
   * method will add gallons of fuel to our tank
   * @param {*} gallons number of gallons of fuel to add
   */
  addFuel(gallons){
    this.fuelLevel = this.fuelLevel + gallons;
  }

  /**
   * This method returns the number of miles this car can drive
   * before it runs out of gas
   */
  range(){
    // if my car gets 26mpg, and it has 1 gallon: 26 miles
    // if my car gets 26mpg, and it has 2 gallon: 52 miles
    // if my car gets 26mpg, and it has 0.5 gallon: 13 miles

    return this.mpg * this.fuelLevel;
  }


  /**
   * Drive the car for a certain number of miles,
   * and update the fuel tank and odometer accordingly
   * @param {number} distance number of miles to drive
   */
  drive(distance){
    this.odometer = this.odometer + distance;

    let fuelUsed = distance/this.mpg;
    this.fuelLevel = this.fuelLevel - fuelUsed;
  }

}

describe("test set 1", function(){
  it("not over fill", function(){

    let c1 = new Car(10, 2);
    c1.addFuel(100);

    let expected = 2;
    assert.equal(c1.fuelLevel, expected);

  })
  it("not drive past empty", function(){

    let c2 = new Car(10, 2);
    c2.addFuel(2);
    c2.drive(1000)

    assert.equal(c1.fuelLevel, 0);
    assert.equal(c1.odometer, 20);

  })
})