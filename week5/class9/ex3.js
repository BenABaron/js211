/**
 * a class that represents a rectangle
 */

class Rectangle {

  length;
  width;

  constructor(inputLength, inputWidth){
    this.length = inputLength;
    this.width = inputWidth;
  }

  // return the area of the rectangle
  area(){
    return this.width * this.length;

  }

  // return the perimeter of the rectangle
  perimeter(){
    return (2 * this.width) + (2 * this.length);
  }

  /**
   * return true if rectangle is a square
   */
  isSquare(){
    if (this.length == this.width) {
      return true;
    }
  }

}

let r1 = new Rectangle(2,6);
let r2 = new Rectangle(4,2);
let r3 = new Rectangle(3,5);
let r4 = new Rectangle(5,5);
let r5 = new Rectangle(7,3);


function rectangleSentece (r) {

  let sentence = `has an area of ${r.area()}, a perimeter of ${r.perimeter()}, `
  if(r.isSquare()) {
    sentence += `and it's a square!`
  } else {
    sentence += `and it's not a square.`
  }

  return sentence;
}

console.log("The first rectangle", rectangleSentece(r1));
console.log("The second rectangle", rectangleSentece(r2));
console.log("The third rectangle", rectangleSentece(r3));
console.log("The fourth rectangle", rectangleSentece(r4));
console.log("The fifth rectangle", rectangleSentece(r5));