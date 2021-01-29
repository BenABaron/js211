
let cars = [
{
  'make': 'Mazda', 
  'cylenders': 4, 
  'model': 'Protege', 
  'colors': ['blue', 'red', 'cyan', 'green']
},
{
  'make': 'Ford',
  'cylenders': 4, 
  'model': 'Focus', 
  'colors': ['blue', 'red', 'green']
},
{
  'make': 'BMW', 
  'cylenders': 4, 
  'model': '328', 
  'colors': ['silver', 'black']
},
{
  'make': 'Mazerati', 
  'cylenders': 8, 
  'model': 'X', 
  'colors': ['orange', 'neon green']
},
{
  'make': 'VW', 
  'cylenders': 2, 
  'model': 'Bug', 
  'colors': ['yellow', 'rust']
}]

cars.filter(function(car){

  if(car.cylenders == 4) {
    return true;
  }

}).filter(function(car){

  if(car.colors.indexOf('red') > -1) {
    return true;
  }

}).map(function(car){

  // The BMW 329 is a nice 4 cylender car that is available in silver and black
  return `The ${car.make} ${car.model} is a nice ${car.cylenders} cylender car that is available in ${car.colors.join(", ")}`

}).forEach(function(description){

  // console.log(description)

})

let someCar = cars.find(function(car){
  if(car.cylenders == 4) {
    return true;
  }
})

console.log(someCar)

