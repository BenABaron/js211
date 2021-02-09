/**
 * 
 * 2 classes:
 * 
 * CrewMember
 *  title: title of the crew member (captain, engineer, driver)
 *  name: name of the crew member
 *  assignedVehicle ** extra practice **: the vehicle this crew member is assigned to
 *  
 *  ** for extra practice: a crew member can not be in more than 1 vehicle at a time **
 * 
 *  assignVehicle(vehicle): add this crew member to the vehiclethat is passed in
 * 
 * 
 * Vehicle
 *  type: type of the vehicle (ship, bus, train)
 *  name: name of the vehicle
 *  crewOnBoard: an array of crew members on board the vehicle
 * 
 *  isReady(): this method should return true, if the vehicle is ready to go.
 *           : a vehicle is ready to go if there is the correct crew member on board the vehicle
 * 
 */

// Don't have to do this, but can be done if there's extra time
let jobs = {
  "Driver" : "Bus",
  "Pilot" : "Plane",
  "Engineer" : "Train"
}

class CrewMember {
  
  name;
  title;
  assignedVehicle;
  
  constructor(name, title){
    this.name = name;
    this.title = title;
  }

  assignVehicle(vehicle){
    /**
     * Needs to set assigned vehicle to the vehicle passed in
     * Needs to add the crew member to the vehicle's crew on board
     * It should only do these if the crew member is not already assigned to a vehicle
     */

    if(!this.assignedVehicle) {

      this.assignedVehicle = vehicle.name;

      vehicle.crewOnBoard.push(this.title);

      console.log(`${this.name} has been assigned to ${vehicle.name}.`)

    } else {

      console.log(`${this.name} is already assigned to a vehicle!`)

    }

  }

}



class Vehicle {

  type;
  name;
  crewOnBoard = [];

  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  isReady(){
    /**
     * Should check the crew member's title against the type of vehicle
     */

    for (let i = 0; i < this.crewOnBoard.length; i++) {

      let currentTitle = this.crewOnBoard[i]

      if (jobs[currentTitle] == this.type) {
        console.log(`${this.name} READY!`)
        return true;
      }

    }

    console.log(`${this.name} NOT READY!`)
    return false;

  }

}





let plane1 = new Vehicle("Big Bertha", "Plane")
let plane2 = new Vehicle("Tiny Tim", "Plane")

let train1 = new Vehicle("Thomas", "Train")

let bus = new Vehicle("Big Red", "Bus")

let c1 = new CrewMember("John", "Pilot")
let c2 = new CrewMember("Mad Max", "Engineer")

console.log(plane1.isReady()) // false

c1.assignVehicle(plane2)
console.log(plane2.isReady()) // true

c2.assignVehicle(bus)
console.log(bus.isReady()) // false