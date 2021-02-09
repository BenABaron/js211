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

let jobs = {
  "Driver" : "Bus",
  "Pilot" : "Plane",
  "Engineer" : "Train"
}

class CrewMember {

  constructor(/**what goes in here? */){
    // what goes in here
  }

  assignVehicle(/**what goes in here? */){
    // what goes in here
  }

}



class Vehicle {

  constructor(/**what goes in here? */){
    // what goes in here
  }

  isReady(){
    // what goes in here
  }

}



let plane1 = new Vehicle("Big Bertha", "Plane")
let plane2 = new Vehicle("Tiny Tim", "Plane")

let train1 = new Vehicle("Thomas", "Train")

let bus1 = new Vehicle("Big Red", "Bus")

let c1 = new CrewMember("John", "Pilot")
let c2 = new CrewMember("Mad Max", "Engineer")

console.log(plane1.isReady()) // false

c1.assignVehicle(plane2)
console.log(plane2.isReady()) // true

c2.assignVehicle(bus)
console.log(bus.isReady()) // false