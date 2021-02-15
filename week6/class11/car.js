/**
 * Car class
 * - tankSize: how big the gas tank is
 * - mpg: the car's efficiency
 * - fuelLevel: current fuel level
 * - odometer: distance driven
 * 
 * drive(distance): drive the car the distance, and update the odometer and fuelLevel
 * addFuel(gallons): add fuel to the car, update fuelLevel
 * actualMpg(): returns the actual efficiency for the car
 */


class Car {
  tankSize;
  mpg;
  fuelLevel;
  odometer;

  constructor(tankSize, mpg){
    this.tankSize = tankSize;
    this.mpg = mpg;
    this.fuelLevel = 0;
    this.odometer = 0
  }

  addFuel(gallons){
    // not checking for overfill
    // this is your assignment...

    this.fuelLevel += gallons;
  }

  drive(distance){
    // not checking that I have enough gas
    // this is your assignment...

    this.odometer += distance;
    let fuelUsed = distance/this.actualMpg();

    this.fuelLevel -= fuelUsed;
  }

  actualMpg(){
    if(this.odometer > 10000) {
      return this.mpg * 0.95;
    } else {
      return this.mpg;
    }
  }
}

/**
 * Build a truck class that will extend the car class
 * and add 1 attribute:
 * - isLoaded
 * 
 * add 2 methods:
 * - load(): flip the loaded flag on
 * - unload(): flip the loaded flag off
 * 
 * we want to override:
 * - actualMpg(): make this method aware of the efficiency loss when the truck is loaded
 */

class Truck extends Car {
  isLoaded;

  load(){
    this.isLoaded = true;
  }

  unload(){
    this.isLoaded = false;
  }

  actualMpg(){
    if(this.isLoaded){
      return this.mpg * 0.85;
    } else {
      return super.actualMpg();
    }
  }
}

let gilesTruck = new Truck(20, 25);
gilesTruck.addFuel(20);
gilesTruck.drive(50);

console.log("Giles' truck fuel level after driving 50 miles, unloaded", gilesTruck.fuelLevel);

gilesTruck.load();
gilesTruck.drive(50);

console.log("Giles' truck fuel level after driving 50 miles, loaded", gilesTruck.fuelLevel);

// let emiCar = new Car(11, 50);
// for (let i = 0; i < 21; i++) {
//   emiCar.addFuel(10);
//   emiCar.drive(500);
// }

// console.log("odometer: ", emiCar.odometer);
// console.log("actual mpg: ", emiCar.actualMpg());
// console.log("advertised mpg: ", emiCar.mpg);


